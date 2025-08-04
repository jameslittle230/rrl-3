import { Metadata } from "next";
import Content from "./billing.mdx";

export const metadata: Metadata = {
  title: "Billing",
  alternates: { canonical: "/billing" },
};

export default function Page() {
  return <Content />;
}
