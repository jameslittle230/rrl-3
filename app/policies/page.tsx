import { Metadata } from "next";
import Content from "./policies.mdx";

export const metadata: Metadata = {
  title: "Office Policies",
  alternates: { canonical: "/policies" },
};

export default function Page() {
  return <Content />;
}
