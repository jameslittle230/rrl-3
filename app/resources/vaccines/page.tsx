import { Metadata } from "next";
import Content from "./vaccines.mdx";

export const metadata: Metadata = {
  title: "Vaccine Information Sheets",
  alternates: { canonical: "/resources/vaccines" },
};

export default function Page() {
  return <Content />;
}
