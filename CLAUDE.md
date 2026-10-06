# Washington Square Pediatrics website

Marketing and information site for a pediatric practice in Brookline, MA (https://washingtonsquarepediatrics.com). Most visitors are parents on their phones, so mobile is the priority.

## Stack

- Next.js 15 (App Router) with `output: "export"`: the site is fully static HTML in `out/`. No server features (API routes, server actions, `next/image` optimization, middleware).
- Tailwind CSS v4 (configured in `app/globals.css`, no `tailwind.config`) with `@tailwindcss/typography`.
- MDX via `@next/mdx`. `mdx-components.tsx` wraps every MDX page in `.prose` and routes links through `components/Link`.
- Package manager is yarn (`yarn.lock`).

## Commands

- `yarn dev`: dev server
- `yarn build`: static export to `out/`
- `yarn serve-out`: serve `out/` on port 8000 to check the real build
- `yarn lint`
- If the build fails with `PageNotFoundError: Cannot find module for page` on untouched pages, the `.next` cache is stale: `rm -rf .next` and rebuild.

## Layout

- Content pages are a folder with `page.tsx` (sets `metadata.title` and `alternates.canonical`) plus a sibling `.mdx` file holding the text. Most content edits happen in the `.mdx` files.
- `data/navigationItems.ts` drives both the desktop sidebar and the mobile menu. `mobileOnly` items (e.g. the patient portal link) show only on mobile.
- Mobile menu: `components/navigation/MobileNavigation.tsx` (react-aria-components modal, with a `<noscript>` fallback list). Desktop sub-menu expand animation: `DesktopNavigationItem.tsx` (`motion`).
- About page: doctors use `Profile`, office staff use `StaffProfile` inside `StaffGrid` (`app/about/components/`).
- Analytics: GoatCounter (`components/GoatCounter.tsx`), disabled in development.

## Components

Shared components live in `components/`. Follow the shape of `Alert`, `Resource`, `Address` and `ResourceGrid`:

```tsx
import * as React from "react";
import { cva } from "class-variance-authority";

const thingStyles = cva(["flex", "gap-3", "rounded-md", "not-prose"], {
  variants: {
    type: {
      info: ["bg-blue-50", "text-blue-900"],
      warning: ["bg-yellow-50", "text-yellow-700"],
    },
  },
});

export interface ThingProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "warning";
}

const Thing = React.forwardRef<HTMLDivElement, ThingProps>(
  ({ className, type = "info", ...props }, ref) => (
    <div className={thingStyles({ className, type })} ref={ref} {...props} />
  ),
);

Thing.displayName = "Thing";
export default Thing;
```

- Styles go in a module-level `cva` named `<thing>Styles`, written as an array of class strings. Pass the caller's `className` into the `cva` call so callers can add classes.
- Use `variants` for visual options rather than conditional class strings, and type the matching prop as a string union.
- Props extend the matching `React.HTMLAttributes<...>`, the component forwards `ref` and spreads `...props` onto the root element, and it sets `displayName`. Shared components use a default export.
- To build on another component's styles, compose its `cva` output: `cva([buttonStyles(), ["block", "bg-transparent"]])`. When the added classes override ones from the base (e.g. a different `bg-*`), wrap the list in `twMerge` so the override wins (see `DesktopNavigationItem.tsx`).
- Add `"use client"` only when the component needs hooks or context. Content components stay server components.
- Components used by a single page can be simple arrow-function components and live next to that page (`app/about/components/`) or inline in its `page.tsx` (`HomeBox` on the home page).
- Add new shared components to the showcase page at `app/components/page.tsx` (served at `/components`).
- Import with the `@/components/*` and `@/data/*` aliases.

### Links, buttons and icons

- Always use `Link` from `@/components/Link`, never `next/link` or a bare `<a>`. It handles internal and external URLs and picks up context styles. MDX links already go through it.
- There's no `Button` component. A button-looking link is `<Link className={buttonStyles()}>`, with `buttonStyles` from `@/components/Button`.
- `LinkConfig` and `IconConfig` set default classes for every `Link` / `Icon` beneath them (`<LinkConfig uses={...}>`). Use them when a component restyles links in its children, such as `Alert`'s body and actions or the `Header` contact links, instead of passing `className` to each one.
- Icons come from `@heroicons/react` (`24/solid` or `24/outline`), sized with `size-*`. Wrap them in `Icon` when they should pick up `IconConfig` styles, and give meaningful icons an `aria-label`.
- External links in navigation get an arrow (`&rarr;` or `ArrowTopRightOnSquareIcon`).

## Styling

- Tailwind utility classes only. `app/globals.css` holds just the theme font variables, a global `text-wrap: pretty` and `.bg-address`. Add global CSS only for something utilities can't express, like a background image.
- Mobile first: unprefixed classes are for phones, and `md:` is the switch to the desktop layout (the sidebar nav appears at `md`). `sm:` and `lg:` are used for in-between grid tweaks.
- Touch devices have no hover, so every `hover:` treatment that conveys meaning has a `pointer-coarse:` equivalent. For example, links are `hover:underline pointer-coarse:underline`, and `Alert` actions get `pointer-coarse:bg-*` so they look tappable. Pair `hover:` with `active:` for press feedback, and use `pointer-coarse:gap-*` to space tap targets further apart.
- Colors use the default Tailwind palette. Blue is the brand and interactive color (`bg-blue-200` buttons, `bg-blue-100` for the active nav item, `bg-blue-50` panels, `text-blue-600` site title). Gray is for borders (`border-gray-200`/`300`) and secondary text. Yellow, green and red are only for `Alert` status.
- Corners are `rounded-sm` (buttons, resource links), `rounded-md` (alerts, address) or `rounded-lg` (cards, images). Borders are usually `border-2` light gray.
- Fonts: `font-sans` (Inter) for everything, `font-serif` (DM Serif Text) for the site title only.
- MDX content is styled by `prose`. A component that renders inside MDX and has its own styling must add `not-prose` to its root (as `Alert` and `Resource` do).

## Images

Images live in `public/images` and use plain `<img>` (no `next/image` in a static export).

- Always set `width`/`height` to the file's real dimensions (or its aspect ratio) to prevent layout shift.
- The main above-the-fold image on a page gets `fetchPriority="high"` (only one per page). Below-the-fold images get `loading="lazy"`.
- `Profile` lazy-loads by default. The first doctor on the About page passes `loading="eager"`; move that if the order changes.
- Size files for how they're displayed, at 2x for high-density screens: portraits about 600px square, full-width content images about 1600px wide. The address map background (`map.webp`) is 1400px for a box up to 700px wide.
- Prefer WebP for large photos and backgrounds.

## Browser support

Based on GoatCounter data (October 2026): the oldest visitors are on iOS Safari 17.5 and Chrome 145.

- iPhone: Safari 17+. This is the real floor for the site.
- Android: current Chrome and Samsung Internet (they update through the Play Store regardless of Android version).
- Desktop: current evergreen browsers.
- Anything Safari 17 supports can be used without a fallback: `<dialog>`, Popover, `:has()`, container queries, WebP, and everything Tailwind v4 needs.
- Newer features are fine as progressive enhancement if the page still works and reads correctly without them. Anything required for core functionality (navigation, reading content, contact info) must work in Safari 17, via a small fallback if needed. Prefer a few lines of JS over a polyfill.
- Not in Safari 17, so they need a fallback or must be optional: invoker commands (`commandfor`), `<dialog closedby>`, `interpolate-size` / `calc-size()`, cross-document view transitions (Safari 18.2+).

## Web platform guidance

Use the `modern-web-guidance` skill before writing HTML, CSS or client-side JS, and apply its fallbacks according to the browser support policy above.
