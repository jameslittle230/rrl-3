import { Metadata } from "next";
import Content from "./illness.mdx";

export const metadata: Metadata = {
  title: "Illness Resources",
  alternates: { canonical: "/resources/illness" },
};

export default function Page() {
  return <Content />;
}
