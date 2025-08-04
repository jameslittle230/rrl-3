import { Metadata } from "next";
import Content from "./resources.mdx";

export const metadata: Metadata = {
  title: "Forms & Resources",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return <Content />;
}
