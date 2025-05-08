import React from "react";
import { cva } from "class-variance-authority";
import { Link } from "./Link";
import { DocumentTextIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

const resourceStyles = cva([
  "inline-block",
  "rounded-sm",
  "border-2",
  "border-gray-200",
  "py-2",
  "px-2",
  "mb-3",
  "flex",
  "gap-3",
  "items-center",
  "no-underline",
  "pointer-coarse:no-underline",
  "hover:bg-gray-100",
  "not-prose",
  "leading-5",
]);

export interface ResourceProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  subtitle: string;
  url: string;
  icon?: "document" | "video";
}

const Resource = React.forwardRef<HTMLAnchorElement, ResourceProps>(
  (
    { className, url, name, icon = "document", subtitle, children, ...props },
    ref,
  ) => {
    return (
      <Link
        className={resourceStyles({ className })}
        ref={ref}
        href={url}
        {...props}
      >
        {icon === "document" &&
          <DocumentTextIcon className="size-8" />}
        {icon === "video" &&
          <VideoCameraIcon className="size-8" />}
        <div className="flex flex-col">
          <span className="font-semibold">
            {name}
          </span>
          {subtitle && (
            <span className="text-sm font-normal">
              {subtitle}
            </span>
          )}
          {children &&
            (
              <div>
                {children}
              </div>
            )}
        </div>
      </Link>
    );
  },
);

const Resource2 = (props: {
  url: string;
  name: string;
  subtitle: string;
  children?: React.ReactNode;
}) => (
  <a
    href={props.url}
    target="_blank"
    className={`resource p-4 rounded-xl
    border-4 border-gray-300 border-solid
    flex space-x-4 items-center hover:bg-gray-100`}
  >
    <div className="flex-shrink text-4xl">
    </div>
    <div className="">
      <p className="text-gray-800 font-semibold m-0 leading-tight">
        {props.name}
      </p>
      {props.subtitle
        ? <p className="text-sm text-gray-600 m-0">{props.subtitle}</p>
        : null}
      {props.children ? <p className="mt-4">{props.children}</p> : null}
    </div>
  </a>
);

Resource.displayName = "Resource";
export default Resource;
