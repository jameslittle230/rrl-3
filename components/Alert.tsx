import * as React from "react";
import { cva, cx } from "class-variance-authority";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { LinkConfig } from "@/components/Link";
import { buttonStyles } from "./Button";

const alertStyles = cva(["alert", "flex", "gap-x-3", "text-sm", "py-3", "px-4", "rounded-md", "not-prose"], {
  variants: {
    type: {
      warning: ["bg-yellow-50", "text-yellow-700", "fill-orange-700/60"],
      success: ["bg-green-100", "text-green-700", "fill-green-700/60"],
      error: ["bg-red-100", "text-red-700", "fill-red-700/60"],
    },
  },
});

const alertIconStyles = cva(["size-5", "fill-inherit"]);

const alertActionStyles = cva([buttonStyles(),
[
  "inline-block",
  "px-2",
  "-mx-2",
  "font-semibold",
  "text-inherit",
  "bg-transparent"
]], {
  variants: {
    type: {
      warning: ["pointer-coarse:bg-orange-200 hover:bg-orange-200 active:bg-orange-300"],
      success: ["pointer-coarse:bg-green-200 hover:bg-green-200 active:bg-green-300"],
      error: ["pointer-coarse:bg-red-200 hover:bg-red-200 active:bg-red-300"],
    },
  },
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "warning" | "success" | "error";
  actions?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, actions, type = "warning", ...props }, ref) => {
    return (
      <div className={alertStyles({ className, type })} ref={ref} {...props}>
        <span>
          {type === "warning" && (
            <ExclamationTriangleIcon className={alertIconStyles()} />
          )}
          {type === "success" && (
            <CheckCircleIcon className={alertIconStyles()} />
          )}
          {type === "error" && (
            <ExclamationCircleIcon className={alertIconStyles()} />
          )}
        </span>
        <div className="flex gap-x-4 gap-y-2 flex-col md:flex-row grow items-start">
          <LinkConfig uses={cx(["font-bold", "underline", "hover:no-underline"])}>
            <div className="flex flex-col gap-2 grow">{children}</div>
          </LinkConfig>
          <div className="shrink-0 flex flex-wrap gap-3 pointer-coarse:gap-6">
            <LinkConfig uses={alertActionStyles({ type })}>{actions}</LinkConfig>
          </div>
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
export default Alert;
