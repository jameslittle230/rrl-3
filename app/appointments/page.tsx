import { Metadata } from "next";
import Appointments from "./appointments.mdx";

export const metadata: Metadata = {
  title: "Appointments",
  alternates: { canonical: "/appointments" },
};

export default function Page() {
  return <Appointments />;
}
