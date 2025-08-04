import { Metadata } from "next";
import Content from "./new-patient.mdx";

export const metadata: Metadata = {
  title: "New Patient Information",
  alternates: { canonical: "/new-patient" },
};

export default function Page() {
  return <Content />;
}
