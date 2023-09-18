import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Icon from "./icon";
import Link from "next/link";

const Resource = (props: {
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

export const makeResourceList = (resources, tag) => {
  if (tag === "li") {
    return resources.map(({ file, name, subtitle }) => (
      <li className="prose">
        <Link
          target="_blank"
          href={`https://files.rothrotterlaster.com/${file}`}
        >
          {name}
        </Link>
      </li>
    ));
  }
  return resources.map(({ file, name, subtitle }) => (
    <Resource
      url={`https://files.rothrotterlaster.com/${file}`}
      name={name}
      subtitle={subtitle}
    />
  ));
};

export default Resource;
