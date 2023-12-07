import { Metadata } from "next";
import Appointments from "./appointments.mdx";

export const metadata: Metadata = {
  title: "Appointments",
};

export default function Page() {
  return <Appointments />;
}
