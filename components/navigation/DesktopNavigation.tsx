import { DesktopNavigationItem } from "./DesktopNavigationItem";
import { navItems } from "../../data/navigationItems";

export const Navigation = () => {
  return (
    <nav className="w-fit">
      <ul>
        {navItems
          .filter((item) => !item.mobileOnly)
          .map((item) => (
            <DesktopNavigationItem key={item.href} item={item} />
          ))}
      </ul>
    </nav>
  );
};
