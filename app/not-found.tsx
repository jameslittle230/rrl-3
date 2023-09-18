import { Metadata } from "next";
import Content from "./new-patient.mdx";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function Page() {
  return (
    <div className="prose">
      <h1>404: Page not found.</h1>
      <p>You've landed on a link that doesn't exist on this website.</p>
      <p>
        If you think this is an error, please let us know! Otherwise, use the
        navigation links to get back to somewhere familiar.
      </p>
      <img src="/images/404.jpg" />
    </div>
  );
}
