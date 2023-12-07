import { Metadata } from "next";
import Content from "./behavioral.mdx";

export const metadata: Metadata = {
  title: "Behavioral Health",
};

export default function Page() {
  return <Content />;
}
