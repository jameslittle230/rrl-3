"use client";

import classnames from "classnames";
import { NavItem } from "@/data/navigationItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

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

  const baseClassNames =
    "block uppercase text-md mb-2 px-3 py-1 rounded focus:ring-2 focus:ring-blue-600";
  const nonCurrentPageClassNames = "hover:bg-gray-700 text-white";
  const currentPageClassNames = "bg-gray-100 font-bold";

  return (
    <li>
      <Link
        href={href}
        className={classnames(baseClassNames, {
          [currentPageClassNames]: isCurrentPage,
          [nonCurrentPageClassNames]: !isCurrentPage,
        })}
        onClick={onClick}
      >
        {title}{" "}
        {isExternalLink && (
          <Icon icon="arrow.up.right.square" className="inline-block" />
        )}
      </Link>
      {children && (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">
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
