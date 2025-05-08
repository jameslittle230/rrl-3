import type { MDXComponents } from "mdx/types";
import { Link } from "./components/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className="prose">{children}</div>,
    a: ({ children, ...props }) => <Link href={props.href}>{children}</Link>,
    ...components,
  };
}
