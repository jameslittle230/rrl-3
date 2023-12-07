import { Metadata } from "next";
import Content from "./medication.mdx";

export const metadata: Metadata = {
  title: "Behavioral Health",
};

export default function Page() {
  return <Content />;
}
