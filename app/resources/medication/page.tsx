import { Metadata } from "next";
import Content from "./medication.mdx";

export const metadata: Metadata = {
  title: "Medication Dosing",
  alternates: { canonical: "/resources/medication" },
};

export default function Page() {
  return <Content />;
}
