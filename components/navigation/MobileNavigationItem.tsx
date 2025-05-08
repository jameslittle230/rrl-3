"use client";

import classnames from "classnames";
import { NavItem } from "@/data/navigationItems";
import { usePathname } from "next/navigation";
import { Link } from "../Link";
import { cva } from "class-variance-authority";
import { isExternal } from "node:util/types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const linkStyles = cva([
  "block",
  "rounded-sm",
  "px-4",
  "py-1",
  "-ml-3",
  "hover:bg-gray-100",
  "hover:text-blue-900",
  "hover:no-underline",
  "pointer-coarse:no-underline",
  "transition-colors",
  "ease-[cubic-bezier(0.215,0.61,0.355,1)]",
  "pointer-coarse:no-underline",
  "touch:underline",
], {
  variants: {
    active: {
      false: null,
      true: ["bg-blue-100", "hover:bg-blue-200", "font-bold", "tracking-tight"],
    },
  },
});

export const MobileNavigationItem = ({
  item,
  onClick,
}: {
  item: NavItem;
  onClick: any;
}) => {
  const { href, title, children } = item;
  const isExternalLink = href.startsWith("http");
  const pathname = usePathname();
  const isCurrentPage = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={linkStyles({ active: isCurrentPage })}
      >
        {title}{" "}
        {isExternalLink && (
          <ArrowTopRightOnSquareIcon className="inline size-4 align-baseline translate-y-0.5" />
        )}
      </Link>
      {children && (
        <ul className="pl-4 ml-2 border-l-4 border-gray-200">
          {children?.map((child) => (
            <MobileNavigationItem
              onClick={onClick}
              key={child.href}
              item={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
