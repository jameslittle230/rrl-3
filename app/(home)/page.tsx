import { Link } from "@/components/Link";
import HomeContent from "./home-content.mdx";
import { Metadata } from "next";
import Alert from "@/components/Alert";

const HomeBox = (props) => (
  <div className="rounded-lg bg-blue-50 flex-shrink mb-4 sm:mb-0 sm:w-1/2">
    <div className="bg-blue-200 text-blue-950 px-3 py-2 font-bold text-lg rounded-tl-lg rounded-tr-lg border-b-1 border-blue-300">
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
        type="success"
        className="mb-6"
        actions={<Link href="#">Contact us today!</Link>}
      >
        <p>We are currently accepting new patients!</p>
      </Alert>
      <img
        className="w-full rounded-lg mb-6"
        src="/images/building-c.jpg"
        alt="An image of the facade of 637 Washington Street"
      />
      <div className="mb-6">
        <HomeContent />
      </div>
      <div className="block sm:flex sm:space-x-4">
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
      </div>
    </>
  );
}
