import { Metadata } from "next";
import Content from "./medication.mdx";

export const metadata: Metadata = {
  title: "Medication Dosing",
};

export default function Page() {
  return <Content />;
}
