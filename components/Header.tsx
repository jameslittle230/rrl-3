import { Link, LinkConfig } from "@/components/Link";
import { cva, cx } from "class-variance-authority";
import * as React from "react";
import { MapPinIcon, PhoneIcon, PrinterIcon, UserCircleIcon } from "@heroicons/react/24/solid";
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

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 526 578"
    {...props}
  >
    <g id="Page-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g id="Frame" transform="translate(-162 -136)">
        <g id="Group" transform="translate(162.522 136)">
          <path
            id="Triangle"
            fill="#0091FF"
            d="M260.548 0q108.094 149.04 81.072 213.985c-27.022 64.945-130.254 67.44-158.182 0Q155.509 146.545 260.548 0"
            transform="rotate(180 262.298 131.817)"
          ></path>
          <path
            id="Triangle"
            fill="#5FBAFF"
            d="M285.084 277.836q74.693-168.373 144.303-177.384c69.61-9.01 123.382 79.375 79.091 137.344q-44.29 57.97-223.394 40.04"
          ></path>
          <path
            id="Triangle"
            fill="#0091FF"
            d="M283.334 303.202q182.787-19.334 225.375 36.601c42.589 55.935-6.872 146.815-79.09 137.344q-72.22-9.471-146.285-173.945"
          ></path>
          <path
            id="Triangle"
            fill="#5FBAFF"
            d="M260.548 314.366q108.094 149.04 81.072 213.985c-27.022 64.945-130.254 67.44-158.182 0q-27.929-67.44 77.11-213.985"
          ></path>
          <path
            id="Triangle"
            fill="#0091FF"
            d="M239.512 300.164Q164.82 468.538 95.209 477.548c-69.61 9.01-123.382-79.375-79.091-137.344q44.29-57.97 223.394-40.04"
          ></path>
          <path
            id="Triangle"
            fill="#5FBAFF"
            d="M241.262 274.798Q58.475 294.132 15.887 238.197c-42.588-55.935 6.872-146.815 79.091-137.344q72.219 9.471 146.284 173.945"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M261.978 57.5v141"
            opacity="0.396"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M399.243 136.75v141"
            opacity="0.396"
            transform="rotate(60 399.243 207.25)"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M399.243 295.25v141"
            opacity="0.396"
            transform="rotate(120 399.243 365.75)"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M261.978 374.5v141"
            opacity="0.396"
            transform="rotate(180 261.978 445)"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M124.713 295.25v141"
            opacity="0.396"
            transform="rotate(-120 124.713 365.75)"
          ></path>
          <path
            id="Line"
            stroke="#FFF"
            strokeLinecap="round"
            strokeWidth="16"
            d="M124.713 136.75v141"
            opacity="0.396"
            transform="rotate(-60 124.713 207.25)"
          ></path>
          <circle
            id="Oval"
            cx="262.478"
            cy="289"
            r="90"
            fill="#FEFEA3"
          ></circle>
        </g>
      </g>
    </g>
  </svg>
);

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={headerStyles({ className })} ref={ref} {...props}>
        <h1 className="text-blue-600 hover:text-blue-800 font-serif text-4xl md:text-5xl mb-2 mr-12 font-normal inline-flex gap-2 md:gap-3">
          <Logo className="h-10 md:h-12 w-10 md:w-10" />
          <Link className="pointer-coarse:no-underline touch:underline" href="/">
            Washington Square Pediatrics
          </Link>
        </h1>
        <Link href="#content" className={skipToContentStyles()}>Skip to content</Link>
        <div className="flex flex-col items-start gap-1 text-gray-600 fill-gray-500">
          <LinkConfig uses={[headerLinkStyles()]}>
            <IconConfig uses={[headerIconStyles()]}>
              <span className={headerLinkStyles()}>
                <Icon icon={<UserCircleIcon />} aria-label="Address" />
                <span>Drs. Sally Roth, Susan Laster, and Cara Guenther</span>
              </span>
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
