import { Metadata } from "next";
import Content from "./policies.mdx";

export const metadata: Metadata = {
  title: "Office Policies",
};

export default function Page() {
  return <Content />;
}
