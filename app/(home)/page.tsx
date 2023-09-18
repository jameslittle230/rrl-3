import Spacer from "@/components/spacer";
import Link from "next/link";
import HomeContent from "./home-content.mdx";
import Alert from "@/components/alert";
import { Metadata } from "next";

const HomeBox = (props) => (
  <div className="rounded ring ring-blue-300 flex-shrink mb-4 sm:mb-0 sm:w-1/2">
    <div className="bg-blue-200 p-3 font-bold text-lg rounded-tl rounded-tr">
      {props.title}
    </div>
    <div className="p-3 prose prose-sm">{props.children}</div>
  </div>
);

export const metadata: Metadata = {
  title: {
    absolute:
      "Dr. Sally Roth, Dr. Sari Rotter, Dr. Susan Laster, and Dr. Magdalena Ivanova",
  },
  description: "Pediatricians in Brookline, MA",
};

export default function Page() {
  return (
    <>
      <Alert
        className="mb-5"
        color="green"
        title="We are currently accepting new patients!"
        icon="check"
      ></Alert>
      <img
        className="w-full ring ring-gray-700 rounded-lg"
        src="/images/building-c.jpg"
        alt="An image of the facade of 637 Washington Street"
      />
      <Spacer />
      <HomeContent />
      <Spacer />
      <div className="block sm:flex sm:space-x-4">
        <HomeBox title="Vaccination Policy">
          <p>
            We fully vaccinate all of our patients. We follow the most up to
            date guidelines of the American Academy of Pediatrics. We are proud
            of our commitment to vaccinating against vaccine preventable
            disease.
          </p>

          <p>
            <Link href="/resources#vis">Vaccine information sheets →</Link>
          </p>
        </HomeBox>
        <HomeBox title="Welcome to our Office!">
          <p>
            New to the area? Looking for a new pediatrician? Expecting a new
            baby? We are thrilled to welcome new patients into our practice!
          </p>
          <p>
            Please call our office at (617) 232-2811 to arrange for a visit. Our
            staff is here and ready to help you.
          </p>
        </HomeBox>
      </div>
    </>
  );
}
