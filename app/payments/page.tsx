import { Metadata } from "next";
import Content from "./payments.mdx";

export const metadata: Metadata = {
  title: "Payments",
};

export default function Page() {
  return <Content />;
}
