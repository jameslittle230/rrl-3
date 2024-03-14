import { Metadata } from "next";
import Content from "./vaccines.mdx";

export const metadata: Metadata = {
  title: "Vaccine Information Sheets",
};

export default function Page() {
  return <Content />;
}
