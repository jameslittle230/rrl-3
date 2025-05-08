import { DesktopNavigationItem } from "./DesktopNavigationItem";
import { NavItem, navItems } from "../../data/navigationItems";

export const Navigation = () => {
  return (
    <nav className="w-fit hidden md:block">
      <ul>
        {navItems
          .filter((item: NavItem) => !item.mobileOnly)
          .map((item: NavItem) => (
            <DesktopNavigationItem key={item.href} item={item} />
          ))}
      </ul>
    </nav>
  );
};
