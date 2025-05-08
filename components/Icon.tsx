"use client";

import React from "react";
import { cx } from "class-variance-authority";

const IconStyleContext = React.createContext(["fill-inherit", "size-4"]);

export const IconConfig = ({ uses, children }) => {
  const iconStyleContextValue = React.useContext(IconStyleContext);
  return (
    <IconStyleContext.Provider value={[...iconStyleContextValue, uses]}>
      {children}
    </IconStyleContext.Provider>
  );
};

export const Icon = ({ icon, className = "", ...props }) => {
  const iconStyleContextValue = React.useContext(IconStyleContext);
  return (
    <span
      className={cx(iconStyleContextValue, className)}
      {...props}
    >
      {icon}
    </span>
  );
};
