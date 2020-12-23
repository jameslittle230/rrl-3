import Container from "../components/container";
import Icon from "../components/icon"
import ReactMarkdown from "react-markdown";

const Resource = (props) => (
  <a
    href={props.url}
    className={`block p-4 rounded-xl
  border-4 border-gray-500 border-solid
  flex space-x-4`}
  >
    <div className="flex-shrink text-4xl"><Icon icon="doc.text" /></div>
    <div className="">
      <p className="text-lg font-semibold">{props.name} →</p>
      <p className="text-sm text-gray-600">{props.subtitle}</p>
      {props.children ? <p className="mt-4">{props.children}</p> : null}
    </div>
  </a>
);

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

const Resources = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  <div className="grid grid-cols-1 gap-2">
    <Resource
      url="https://files.rothrotterlaster.com/whatever.pdf"
      name="Fever"
      subtitle="25 MB"
    />
    <Resource
      url="https://files.rothrotterlaster.com/whatever.pdf"
      name="Vomiting and Diarrhea"
      subtitle="25 MB"
    />
    <Resource
      url="https://files.rothrotterlaster.com/whatever.pdf"
      name="How to Prevent Stomach Bugs"
      subtitle="25 MB"
    />
    <Resource
      url="https://files.rothrotterlaster.com/whatever.pdf"
      name="Dosing for over-the-counter medications"
      subtitle="25 MB • Includes Tylenol (Acetaminophen), Advil/Motrin (Ibuprofen), and Benadryl
      (Diphenhydramine)"
    >
    </Resource>
  </div>
  <ReactMarkdown className="prose">{wellVisitContent}</ReactMarkdown>
</Container>;

export default Resources;
