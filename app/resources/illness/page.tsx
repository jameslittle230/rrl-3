import { Metadata } from "next";
import Content from "./illness.mdx";

export const metadata: Metadata = {
  title: "Illness Resources",
};

export default function Page() {
  return <Content />;
}
