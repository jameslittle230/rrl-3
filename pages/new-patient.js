import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";

const markdownContent = `
# New Patient Information

We are always happy to hear from new families. If you are an expecting a baby, new to the area, or looking for a new pediatrician and would like a small, personalized office setting, please call our office to learn more at 617-232-2811. Our staff will be happy to assist you with making an appointment.

In advance of making an appointment, please forward your child's health and immunization records. After reviewing them, we will call you to schedule an appointment.

On the day of your appointment, please fill out and bring three forms:

1. New Patient Information Form
2. Family History Form
3. General Consent Form
`;

const NewPatient = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
</Container>;

export default NewPatient;
