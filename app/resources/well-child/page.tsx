import { Metadata } from "next";
import Content from "./well-child.mdx";

export const metadata: Metadata = {
  title: "Well Child Resources",
};

export default function Page() {
  return <Content />;
}
