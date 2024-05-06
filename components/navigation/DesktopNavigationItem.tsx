"use client";

import classnames from "classnames";
import { NavItem } from "@/data/navigationItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../Icon";

export const DesktopNavigationItem = ({ item }: { item: NavItem }) => {
  const { href, title, children } = item;
  const isExternalLink = href.startsWith("http");
  const pathname = usePathname();
  const isCurrentPage = pathname === href;
  const childIsCurrentPage = children?.some((child) => child.href === pathname);

  const baseClassNames =
    "block uppercase text-md mb-2 px-3 py-1 rounded hover:bg-gray-100 active:bg-gray-300 focus:ring-2 focus:ring-blue-600";
  const currentPageClassNames = "bg-blue-100 hover:bg-blue-200 font-bold";

  return (
    <li>
      <Link
        href={href}
        className={classnames(baseClassNames, {
          [currentPageClassNames]: isCurrentPage,
        })}
      >
        {title}
        {isExternalLink ? (
          <>
            {" "}
            <Icon icon="arrow.up.right.square" />
          </>
        ) : null}
      </Link>
      {children && (isCurrentPage || childIsCurrentPage) && (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">
          {children?.map((child) => (
            <DesktopNavigationItem key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
