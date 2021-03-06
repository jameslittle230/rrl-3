import Container from "../components/container";
import Resource from "../components/resource";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# New Patient Information

We are always happy to hear from new families. If you are an expecting a baby, new to the area, or looking for a new pediatrician and would like a small, personalized office setting, please call our office to learn more at 617-232-2811. Our staff will be happy to assist you with making an appointment.

In advance of making an appointment, please forward your child's health and immunization records. After reviewing them, we will call you to schedule an appointment.

On the day of your appointment, please fill out and bring three forms:
`;

const NewPatient = () => (
  <Container title="New Patient Information">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>

    <Resource
      url="https://files.rothrotterlaster.com/new-patient.pdf"
      name="New Patient Information"
    />
    <Resource
      url="https://files.rothrotterlaster.com/family-history.pdf"
      name="Family History Form"
    />
    <Resource
      url="https://files.rothrotterlaster.com/general-consent.pdf"
      name="General Consent Form"
    />
  </Container>
);

export default NewPatient;
