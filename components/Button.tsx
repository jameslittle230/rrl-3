import { cva } from "class-variance-authority";

export const buttonStyles = cva([
  "bg-blue-200",
  "hover:bg-blue-300",
  "active:bg-blue-400",
  "text-black",
  "px-4",
  "py-1",
  "rounded-sm",
  "-my-1",
  "font-bold",
  "hover:no-underline",
  "pointer-coarse:no-underline",
  "transition-colors",
  "ease-[cubic-bezier(0.215,0.61,0.355,1)]",
])


