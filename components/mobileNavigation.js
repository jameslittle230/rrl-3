import { useRouter } from "next/router";
import Link from "next/link";
import NavItems from "../data/navigationItems";
import Search from "./search";
import Icon from "./icon";

const NavItem = (props) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = props.href === router.pathname;

  // Drives icon
  const isExternalLink = props.href.startsWith("/");

  const baseClassNames =
    "block text-lg mb-2 px-3 py-2 rounded cursor-pointer active:bg-gray-400";
  const currentPageClassNames = "bg-blue-700 text-gray-50 font-bold";

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
      {props.children ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-500">
          {props.children}
        </ul>
      ) : null}
    </li>
  );
};

const listNavItems = (items) => {
  return items.map((item) => (
    <NavItem key={item.href} href={item.href} title={item.title}>
      {item.children ? listNavItems(item.children) : null}
    </NavItem>
  ));
};

const MobileNavigation = (props) => {
  return (
    <div className="fixed w-screen h-screen bg-gray-300 z-50 p-8 overflow-y-scroll overscroll-contain">
      <div className="flex justify-between items-start">
        <h1 className="font-black text-3xl pb-6">Navigation</h1>
        <button
          className="text-3xl active:bg-gray-400 rounded-full"
          style={{ height: "1.4em", width: "1.4em", textAlign: "center", lineHeight: "1.4em" }}
          onClick={() => {
            props.setMobileNavVisible(false);
          }}
        >
          <Icon icon="xmark.circle.fill" />
        </button>
      </div>

      <Search />
      <ul className="pb-80">{listNavItems(NavItems)}</ul>
    </div>
  );
};

export default MobileNavigation;
