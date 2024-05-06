"use client";

import { navItems } from "@/data/navigationItems";
import { MobileNavigationItem } from "./MobileNavigationItem";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import { usePathname } from "next/navigation";

export const MobileNavigation = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setVisible(false);
    setLoading(false);
  }, [pathname]);

  if (!visible)
    return (
      <button
        onClick={() => setVisible(true)}
        className="fixed top-3 right-3 bg-gray-100 rounded-full px-3 py-2 text-4xl text-gray-700 md:hidden outline outline-1 outline-gray-200"
      >
        <Icon icon="ellipsis.rectangle" />
      </button>
    );
  return (
    <div className="md:hidden fixed bottom-0 top-0 left-0 right-0 bg-gray-400 bg-opacity-80 overscroll-contain">
      <button
        onClick={() => setVisible(false)}
        className="fixed top-3 right-3 text-5xl text-white md:hidden"
      >
        <Icon icon="xmark.circle.fill" />
      </button>
      {!loading && (
        <ul className="bg-gray-600 bottom-0 px-4 py-6 left-3 right-3 fixed rounded-t-3xl max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => {
            return (
              <MobileNavigationItem
                key={item.href}
                item={item}
                onClick={() => {
                  setLoading(true);
                }}
              ></MobileNavigationItem>
            );
          })}
        </ul>
      )}
    </div>
  );
};
