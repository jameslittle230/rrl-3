import { Metadata } from "next";
import Content from "./behavioral.mdx";

export const metadata: Metadata = {
  title: "Behavioral Health",
  alternates: { canonical: "/resources/behavioral" },

};

export default function Page() {
  return <Content />;
}
