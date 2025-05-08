"use client";

import { default as NextLink } from "next/link";
import React from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const LinkStyleContext = React.createContext([
  "hover:underline",
  "pointer-coarse:underline",
]);

export const LinkConfig = ({ uses, children }) => {
  const linkStyleContextValue = React.useContext(LinkStyleContext);
  return (
    <LinkStyleContext.Provider value={[...linkStyleContextValue, uses]}>
      {children}
    </LinkStyleContext.Provider>
  );
};

export const Link = ({ className = "", href, ...props }) => {
  const linkStyleContextValue = React.useContext(LinkStyleContext);
  return (
    <NextLink
      href={href}
      className={twMerge(cx(linkStyleContextValue, className))}
      {...props}
    />
  );
};
