import { Metadata } from "next";
import Content from "./insurance.mdx";

export const metadata: Metadata = {
  title: "Insurance",
};

export default function Page() {
  return <Content />;
}
