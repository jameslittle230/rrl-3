import { Metadata } from "next";
import Content from "./well-child.mdx";

export const metadata: Metadata = {
  title: "Behavioral Health",
};

export default function Page() {
  return <Content />;
}
