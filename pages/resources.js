import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";

const markdownContent = `
# Forms & Rseources

In this section you will find information about specific medical advice for
basic problems, information about your child’s well visit form, and
miscellaneous forms that you might need to download and print.

## Medical Information 

The following are forms regarding medical care. This
information does not replace actual medical advice as given by a professional
and is not specific to any one child or any one medical situation.
`;

const wellVisitContent = `
## Well Visit Forms
At the completion of your child’s routine annual check up, you will receive a
general health form which will include up-to-date immunization information.
This form can be used for school, camp or sports registration, or proof of
health for jobs for teens. Please keep the form you receive in a safe place
and make copies to provide to school, camps, or other institutions. We highly
recommend that you take a picture of this form on your phone so you have
access to this form at all times.

If you need additional forms completed by your physician, fill in as much of
the form as you are able and submit them either in person, or in a self
addressed, stamped envelope and allow 5-7 business days for completion.

There is a charge to provide you with extra copies of your child’s health
form.
`

export default () => (
  <Container>
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
    <ReactMarkdown className="prose">{wellVisitContent}</ReactMarkdown>
  </Container>
);
