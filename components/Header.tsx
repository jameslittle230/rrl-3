import { Link, LinkConfig } from "@/components/Link";
import { cva, cx } from "class-variance-authority";
import * as React from "react";
import { MapPinIcon, PhoneIcon, PrinterIcon } from "@heroicons/react/24/solid";
import { Icon, IconConfig } from "./Icon";
import { buttonStyles } from "./Button";
import { skip } from "node:test";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

const headerStyles = cva([
  "pb-6",
  "mb-6",
  "border-b-1",
  "border-gray-300",
]);

const skipToContentStyles = cva([
  "sr-only",
  "focus:not-sr-only",
  "focus:absolute",
  "focus:top-0",
  "focus:left-0",
  "focus:bg-blue-100",
  "focus:px-8",
  "focus:py-3",
  "rounded-br-lg"
])

const headerIconStyles = cva(["inline-block", "shrink-0", "translate-y-0.5"]);

const headerLinkStyles = cva(["flex", "gap-1", "items-baseline"]);

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={headerStyles({ className })} ref={ref} {...props}>
        <h1 className="text-blue-600 hover:text-blue-800 font-serif text-4xl md:text-5xl mb-2 mr-12 font-normal">
          <Link className="pointer-coarse:no-underline touch:underline" href="/">
            Drs. Roth, Rotter, Laster&nbsp;&amp;&nbsp;Ivanova
          </Link>
        </h1>
        <Link href="#content" className={skipToContentStyles()}>Skip to content</Link>
        <div className="flex flex-col gap-1 text-gray-600 fill-gray-500">
          <LinkConfig uses={[headerLinkStyles()]}>
            <IconConfig uses={[headerIconStyles()]}>
              <Link href="https://maps.app.goo.gl/UBDnf2qYcMg2e23m8">
                <Icon icon={<MapPinIcon />} aria-label="Address" />
                <span>
                  637 Washington Street, Suite 202 • Brookline MA 02446
                </span>
              </Link>
              <div className="w-full flex">
                <div className="flex gap-4 grow">
                  <Link href="tel:6172322811">
                    <Icon icon={<PhoneIcon />} aria-label="Phone number" />
                    <span>(617) 232-2811</span>
                  </Link>
                  <span className={headerLinkStyles()}>
                    <Icon icon={<PrinterIcon />} aria-label="Fax" />
                    <span>(617) 383-8178</span>
                  </span>
                </div>
                <Link
                  className={cx(["hidden", "md:inline-block"], buttonStyles())}
                  href="https://mychart.chppoc.org/rrl"
                >
                  Patient Portal Login &rarr;
                </Link>
              </div>
            </IconConfig>
          </LinkConfig>
        </div>
      </div>
    );
  },
);

Header.displayName = "Header";
export default Header;
