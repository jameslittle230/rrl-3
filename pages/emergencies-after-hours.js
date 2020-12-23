import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";
import Address from "../components/address";

const markdownContent = `
If you would like to reach the on call physician about an urgent matter that
cannot wait until regular office hours, we are available after 5 pm on
weeknights, and throughout the weekend. To reach a physician please call our
office at 617-232-2811. If you do not receive a call back in the expected
time, please call our office again.

We are available to see your child for urgent medical issues on Saturday,
Sundays, and holidays. These visits are by appointment. Please call our
office at 617-232-2811 and the on-call physician will call you back either to
give you advice or to schedule an office visit.

We are available 24 hours/day, 365 days/year to care for our patients. If you
are considering going to an urgent care center please call us first. The best
after-hours care for your child comes from a pediatrician who knows your
child or who works closely with your child’s pediatrician.

For weekend appointments your child will be seen in our office or in the
Newton office of our weekend covering group.
`;

const EmergenciesAfterHours = () => <Container>
  <div className="prose mb-6"><h1>Emergencies &amp; After Hours</h1></div>
  <Alert>If your child is experiencing a life-threatening emergency, please call 911 or go to your nearest Emergency Room.</Alert>
  <ReactMarkdown className="my-5 prose">{markdownContent}</ReactMarkdown>
  <p>Our office address is:</p>
  <Address />
  <p>The office of our weekend covering group in Newton Centre is:</p>
  <Address covering />
</Container>;

export default EmergenciesAfterHours;
