import { Metadata } from "next";
import Content from "./billing.mdx";

export const metadata: Metadata = {
  title: "Billing",
};

export default function Page() {
  return <Content />;
}
