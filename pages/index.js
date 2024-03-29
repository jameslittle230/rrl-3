import Container from "../components/container";
import Spacer from "../components/spacer";
import Alert from "../components/alert";
import ReactMarkdown from "react-markdown";
import Button from "../components/button";
import { generateStorkConfig, generateStorkIndex } from "../lib/stork";
import Link from "next/link";

export async function getStaticProps() {
  if (process.env.NETLIFY === "true") {
    generateStorkConfig();
    generateStorkIndex();
  }

  return { props: {} };
}

const HomeBox = (props) => (
  <div className="rounded ring ring-blue-300 flex-shrink mb-4 sm:mb-0 sm:w-1/2">
    <div className="bg-blue-200 p-3 font-bold text-lg rounded-tl rounded-tr">
      {props.title}
    </div>
    <div className="p-3 prose prose-sm">{props.children}</div>
  </div>
);

const Index = () => (
  <Container
    title="Home"
    belowHeader={
      <>
        <Alert
          className="mb-5"
          color="green"
          title="We are currently accepting new patients!"
          icon="check"
        ></Alert>
        <Spacer />
      </>
    }
  >
    <>
      <img
        className="w-full ring ring-gray-700 rounded-lg"
        src="/images/building-c.jpg"
        alt="An image of the facade of 637 Washington Street"
      />
      <Spacer />
      <ReactMarkdown className="prose">
        {`Welcome to the office of Drs. Roth, Rotter, Laster, and Ivanova. We are 4
        pediatricians in a small, private practice in Brookline, Massachusetts
        and we are dedicated to taking excellent and personal care of our
        patients. We are all Board Certified by the American Board of
        Pediatrics. We are affiliated with Boston Children's Hospital and are
        proud members of the PPOC (Pediatric Physicians Organization at
        Children's), Boston Children's Hospital's only preferred primary care
        provider network. 
        
## Why choose us? 
        
Our patients choose us because they
        know they will get excellent medical care in a personalized office. We
        have access to the most up to date pediatric information in the country
        through our strong affiliation with Boston Children's Hospital, and in
        our intimate office setting we can easily maintain close, long term
        health relationships with our families.`}
      </ReactMarkdown>
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
            <Link href={"/resources#vis"}>Vaccine information sheets →</Link>
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
  </Container>
);

export default Index;
