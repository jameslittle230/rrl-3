import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Icon from "./icon";
import Link from "next/link";

export const Resource = (props: {
  url: string;
  icon?: any;
  name: string;
  subtitle: string;
  children?: React.ReactNode;
}) => (
  <a
    href={props.url}
    target="_blank"
    className={`p-4 my-4 rounded-xl
    border-4 border-gray-400 border-solid
    flex space-x-4 items-center hover:bg-gray-100`}
  >
    <div className="flex-shrink text-4xl">
      {/* <Icon icon={props.icon || "doc.text"} /> */}
    </div>
    <div className="">
      <p className="text-lg text-gray-800 font-semibold m-0">{props.name} →</p>
      {props.subtitle ? (
        <p className="text-sm text-gray-600 m-0">{props.subtitle}</p>
      ) : null}
      {props.children ? <p className="mt-4">{props.children}</p> : null}
    </div>
  </a>
);
