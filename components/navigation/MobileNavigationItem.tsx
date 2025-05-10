"use client";

import classnames from "classnames";
import { NavItem } from "@/data/navigationItems";
import { usePathname } from "next/navigation";
import { Link } from "../Link";
import { cva } from "class-variance-authority";
import { isExternal } from "node:util/types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { buttonStyles } from "../Button";

const linkStyles = cva([
  buttonStyles(),
  [
    "block",
    "my-0",
    "font-normal",
    "bg-transparent",
    "hover:bg-gray-100",
    "active:bg-blue-200",
  ]
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
        <ul className="ml-6 my-2 pl-2 border-l-2 border-gray-200 flex flex-col">
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
