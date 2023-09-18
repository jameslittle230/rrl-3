import { Metadata } from "next";
import Content from "./emergencies-after-hours.mdx";

export const metadata: Metadata = {
  title: "Emergencies & After Hours",
};

export default function Page() {
  return <Content />;
}
