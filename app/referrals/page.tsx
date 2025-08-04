import { Metadata } from "next";
import Content from "./referrals.mdx";

export const metadata: Metadata = {
  title: "Referrals",
  alternates: { canonical: "/referrals" },
};

export default function Page() {
  return <Content />;
}
