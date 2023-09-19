import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className="prose">{children}</div>,
    a: ({ children, ...props }) => <Link href={props.href}>{children}</Link>,
    ...components,
  };
}
