import Container from "../components/container";
import Resource from "../components/resource";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# Forms & Resources

In this section you will find information about specific medical advice for
basic problems, information about your child’s well visit form, and
miscellaneous forms that you might need to download and print.

## Medical Information 

The following are forms regarding medical care. This
information does not replace actual medical advice as given by a professional
and is not specific to any one child or any one medical situation.
`;

const wellVisitContent = `
&nbsp;
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
`;

const Resources = () => (
  <Container title="Forms and Resources">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
    <Resource url="https://files.rothrotterlaster.com/fever.pdf" name="Fever" />
    <Resource
      url="https://files.rothrotterlaster.com/vomit-diarrhea.pdf"
      name="Vomiting and Diarrhea"
    />
    <Resource
      url="https://files.rothrotterlaster.com/stomach-bugs.pdf"
      name="How to Prevent Stomach Bugs"
    />
    <Resource
      url="https://files.rothrotterlaster.com/drug-dosing.pdf"
      name="Dosing for over-the-counter medications"
      subtitle="Includes Tylenol (Acetaminophen), Advil/Motrin (Ibuprofen), and Benadryl
      (Diphenhydramine)"
    />
    <Resource
      url="https://files.rothrotterlaster.com/add-checklist.pdf"
      name="ADHD Diagnostic Checklist"
    />
    <Resource
      url="https://files.rothrotterlaster.com/toilet-training.pdf"
      name="Toilet Training"
    />
    <Resource
      url="https://files.rothrotterlaster.com/starting-solids.pdf"
      name="Starting Solids"
    />
    <Resource
      url="https://files.rothrotterlaster.com/parent-feeding-styles.pdf"
      name="Parent Feeding Styles"
    />
    <Resource
      url="https://www.youtube.com/watch?v=Hl6vItGt4qQ"
      name="How to do your Strep Test at home (video)"
      icon="video"
    />
    <ReactMarkdown className="prose">{wellVisitContent}</ReactMarkdown>
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
    <Resource
      url="https://files.rothrotterlaster.com/privacy-summary.pdf"
      name="Notice of Privacy Practices"
    />
    <Resource
      url="https://files.rothrotterlaster.com/teen-consent.pdf"
      name="Adolescent Consent to Share Medical Information with Guardian or Parent"
    />
  </Container>
);

export default Resources;
