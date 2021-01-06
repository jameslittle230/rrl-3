import Container from "../components/container";
import Spacer from "../components/spacer";
import Alert from "../components/alert";
import ReactMarkdown from "react-markdown";
import Button from "../components/button";

const markdownContent = `
Welcome to the office of Drs. Roth, Rotter, and Laster. We are 3
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
through our strong affiliation with Boston Children’s Hospital, and in
our intimate office setting we can easily maintain close, long term
health relationships with our families.`;

const HomeBox = (props) => (
  <div className="rounded ring ring-blue-300 flex-shrink mb-4 sm:mb-0 sm:w-1/2">
    <div className="bg-blue-200 p-3 font-bold text-lg rounded-tl rounded-tr">
      {props.title}
    </div>
    <div className="p-3 prose-sm">
      <p className="my-0">{props.children}</p>
    </div>
  </div>
);

const Index = () => (
  <Container
    title="Home"
    belowHeader={
      <>
        <Alert
          title="COVID-19 Information"
          endContent={
            <Button href="/covid19" type="red">
              Visit the COVID-19 Page →
            </Button>
          }
        >
          COVID-19 continues to be a significant danger to those in the
          Brookline Community. Our COVID-19 Guidelines page has up-to-date
          medical advice from the Massachusetts Department of Health and the
          Center for Disease Control.
        </Alert>
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
      <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
      <Spacer />
      <div className="block sm:flex sm:space-x-4">
        <HomeBox title="Flu Clinic 2020">
          We are happy to let you know that we will begin a series of multiple
          flu vaccine clinics starting in September. We will notify you about
          your child's scheduled day and time. We will have ample supply of
          vaccines and will offer clinics throughout September, October, and
          November until 100% of our patients are vaccinated.
        </HomeBox>
        <HomeBox title="Welcome to our Office!">
          New to the area? Looking for a new pediatrician? Expecting a new baby?
          We are thrilled to welcome new patients into our practice! Please call
          our office at (617) 232-2811 to arrange for a visit. Our staff is here
          and ready to help you.
        </HomeBox>
      </div>
    </>
  </Container>
);

export default Index;
