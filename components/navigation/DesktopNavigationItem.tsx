"use client";

import { NavItem } from "@/data/navigationItems";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { Link } from "../Link";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

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

export const DesktopNavigationItem = ({ item }: { item: NavItem }) => {
  const { href, title, children } = item;
  const isExternalLink = href.startsWith("http");
  const pathname = usePathname();
  const isCurrentPage = pathname === href;
  const childIsCurrentPage = children?.some((child) => child.href === pathname);

  return (
    <li>
      <Link
        href={href}
        className={linkStyles({ active: isCurrentPage })}
      >
        {title} {isExternalLink ? "&rarr;" : null}
      </Link>
      <MotionConfig transition={{ ease: "easeOut", duration: 0.3 }}>
        <AnimatePresence>
          {children && (isCurrentPage || childIsCurrentPage) && (
            <motion.div
              layout
              className="overflow-clip"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <div className="h-3" />
              <motion.ul
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="ml-1 pl-5 border-l-2 border-gray-200"
              >
                {children?.map((child) => (
                  <DesktopNavigationItem key={child.href} item={child} />
                ))}
              </motion.ul>
              <div className="h-3" />
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </li>
  );
};
