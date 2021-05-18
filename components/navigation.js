import Search from "./search";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icon";
import NavItems from "../data/navigationItems";

const NavItem = (props) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = props.href === router.pathname;

  // Drives whether "folder" is open
  const isCurrentPageOrChild = router.pathname.startsWith(props.href);

  // Drives icon
  const isExternalLink = props.href.startsWith("/");

  const baseClassNames =
    "block uppercase text-md mb-2 px-3 py-1 rounded hover:bg-gray-100 active:bg-gray-300 focus:ring-2 focus:ring-blue-600";
  const currentPageClassNames = "bg-blue-100 hover:bg-blue-200 font-bold";

  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li>
      <Link href={props.href} passHref={true}>
        <a className={classNames}>
          {props.title}{" "}
          {!isExternalLink ? <Icon icon="arrow.up.right.square" /> : null}
        </a>
      </Link>
      {props.children && isCurrentPageOrChild ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">
          {props.children}
        </ul>
      ) : null}
    </li>
  );
};

const listNavItems = (items) => {
  return items
    .filter((item) => !item.mobileOnly)
    .map((item) => (
      <NavItem key={item.href} href={item.href} title={item.title}>
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
