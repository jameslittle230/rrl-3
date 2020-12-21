import Container from "../components/container";
import Spacer from "../components/spacer";
import Alert from "../components/alert";
import HomeBox from "../components/homeBox";

export default () => (
  <Container
    belowHeader={
      <>
        <Alert title="COVID-19 Information">
          Click here for an important message related to Coronavirus (COVID-19)
          and patients of Drs. Roth, Rotter and Laster
        </Alert>
        <Spacer />
      </>
    }
  >
    <>
      <img
        className="w-full ring ring-gray-700 rounded-lg"
        src="https://rothrotterlaster.com/static/359dd930e6d4c10c8bca4c8e7b53d182/4fe8c/building-c.jpg"
        alt=""
      />
      <Spacer />
      <div className="prose">
        <p>
          Welcome to the office of Drs. Roth, Rotter, and Laster. We are 3
          pediatricians in a small, private practice in Brookline, Massachusetts
          and we are dedicated to taking excellent and personal care of our
          patients. We are all Board Certified by the American Board of
          Pediatrics. We are affiliated with Boston Children's Hospital and are
          proud members of the PPOC (Pediatric Physicians Organization at
          Children's), Boston Children's Hospital's only preferred primary care
          provider network.
        </p>
        <h2>Why choose us?</h2>
        <p>
          Our patients choose us because they know they will get excellent
          medical care in a personalized office. We have access to the most up
          to date pediatric information in the country through our strong
          affiliation with Boston Children’s Hospital, and in our intimate
          office setting we can easily maintain close, long term health
          relationships with our families.
        </p>
      </div>
      <Spacer />
      <div className="flex space-x-4">
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
      <Spacer />
      <img
        className="w-80 mx-auto ring ring-gray-200"
        src="https://rothrotterlaster.com/static/fc1d97dbc0967de6a3399f42f5af3223/a6173/ppoc.jpg"
        alt=""
      />
    </>
  </Container>
);
