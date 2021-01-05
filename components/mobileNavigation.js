import { useRouter } from "next/router";
import Link from "next/link";
import NavItems from "../data/navigationItems";
import Search from "./search";
import Icon from "./icon";
import Spacer from "./spacer";
import { useEffect } from "react";

const NavItem = (props) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = props.href === router.pathname;

  const baseClassNames = "text-lg mb-2 px-3 py-2 rounded cursor-pointer";
  const currentPageClassNames = "bg-blue-900 font-bold";

  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li>
      {props.href.startsWith("/") ? (
        <Link href={props.href}>
          <div className={classNames}>{props.title}</div>
        </Link>
      ) : (
        <a href={props.href}>
          <div className={classNames}>
            {props.title} <Icon icon="arrow.up.right.square" />
          </div>
        </a>
      )}
      {props.children ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">
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
    <div className="fixed w-screen h-screen bg-gray-800 text-white z-50 p-12 overflow-y-scroll">
      <div className="flex justify-between">
        <h1 className="font-black text-3xl">Navigation</h1>
        <button
          onClick={() => {
            props.setMobileNavVisible(false);
          }}
        >
          &times;
        </button>
      </div>
      <Spacer />

      <Search />
      <ul>{listNavItems(NavItems)}</ul>
    </div>
  );
};

export default MobileNavigation;
