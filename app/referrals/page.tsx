import { Metadata } from "next";
import Content from "./referrals.mdx";

export const metadata: Metadata = {
  title: "Referrals",
};

export default function Page() {
  return <Content />;
}
