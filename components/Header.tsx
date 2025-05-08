import { Link, LinkConfig } from "@/components/Link";
import { cva, cx } from "class-variance-authority";
import * as React from "react";
import { MapPinIcon, PhoneIcon, PrinterIcon } from "@heroicons/react/24/solid";
import { Icon, IconConfig } from "./Icon";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

const headerStyles = cva([
  "pb-6",
  "mb-6",
  "border-b-1",
  "border-gray-300",
]);

const headerIconStyles = cva(["inline-block", "shrink-0", "translate-y-0.5"]);

const headerLinkStyles = cva(["flex", "gap-1", "items-baseline"]);

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={headerStyles({ className })}
        ref={ref}
        {...props}
      >
        <h1 className="text-blue-600 hover:text-blue-800 font-serif text-4xl md:text-5xl mb-2 mr-12">
          <Link
            className="pointer-coarse:no-underline touch:underline"
            href="/"
          >
            Drs. Roth, Rotter, Laster&nbsp;&amp;&nbsp;Ivanova
          </Link>
        </h1>
        <div className="flex flex-col gap-1 text-gray-600 fill-gray-500">
          <LinkConfig uses={[headerLinkStyles()]}>
            <IconConfig uses={[headerIconStyles()]}>
              <Link href="#">
                <Icon icon={<MapPinIcon />} aria-label="Address" />
                <span>
                  637 Washington Street, Suite 202 • Brookline MA 02446
                </span>
              </Link>
              <div className="w-full flex">
                <div className="flex gap-4 grow">
                  <Link href="#">
                    <Icon icon={<PhoneIcon />} aria-label="Phone number" />
                    <span>(617) 232-2811</span>
                  </Link>
                  <Link href="#">
                    <Icon icon={<PrinterIcon />} aria-label="Fax" />
                    <span>(617) 383-8178</span>
                  </Link>
                </div>
                <Link
                  className={cx([
                    "hidden",
                    "md:inline-block",
                  ], [
                    "bg-blue-200",
                    "hover:bg-blue-300",
                    "active:bg-blue-400",
                    "text-black",
                    "px-4",
                    "py-1",
                    "rounded-sm",
                    "-my-1",
                    "font-bold",
                    "hover:no-underline",
                    "pointer-coarse:no-underline",
                  ])}
                  href="#"
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
