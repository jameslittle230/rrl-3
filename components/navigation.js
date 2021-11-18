import Search from "./search";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icon";
import NavItems from "../data/navigationItems";

const NavItem = ({ href, title, children, childrenAlwaysOpen }) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = href === router.pathname;

  // Drives whether "folder" is open
  const isCurrentPageOrChild = router.pathname.startsWith(href);

  // Drives icon
  const isExternalLink = href.startsWith("/");

  const baseClassNames =
    "block uppercase text-md mb-2 px-3 py-1 rounded hover:bg-gray-100 active:bg-gray-300 focus:ring-2 focus:ring-blue-600";
  const currentPageClassNames = "bg-blue-100 hover:bg-blue-200 font-bold";

  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li>
      <Link href={href} passHref={true}>
        <a className={classNames}>
          {title}{" "}
          {!isExternalLink ? <Icon icon="arrow.up.right.square" /> : null}
        </a>
      </Link>
      {children && (isCurrentPageOrChild || childrenAlwaysOpen) ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">{children}</ul>
      ) : null}
    </li>
  );
};

const listNavItems = (items) => {
  return items
    .filter((item) => !item.mobileOnly)
    .map((item) => (
      <NavItem
        key={item.href}
        href={item.href}
        title={item.title}
        childrenAlwaysOpen={item.childrenAlwaysOpen}
      >
        {item.children ? listNavItems(item.children) : null}
      </NavItem>
    ));
};

const Navigation = () => {
  return (
    <div className="flex-shrink-0">
      <Search />
      <ul>{listNavItems(NavItems)}</ul>
    </div>
  );
};

export default Navigation;
