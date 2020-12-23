import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";

const markdownContent = `
# How to Reach your Pediatrician

## Weekdays: 9am - 5pm
To reach your child's pediatrician please call our office at 617-232-2811.
Our staff will make an appointment for you or ensure your child’s
pediatrician calls you back as soon as possible.
## After Hours/Weekends
This time is for urgent matters that cannot wait until regular office hours.
Please call our office, at 617-232-2811 and your call will be answered by one
of the pediatricians from our office or one of the physicians from our
covering pediatric practice in Newton Centre.

We do not use or respond to text messages or emails from patients. We have
found that when a family has medical questions, the best way to communicate
is in person or by phone. We are always happy talk to you in person or by
telephone.

**If your child is experiencing a life threatening emergency, please call 911
or go to your nearest Emergency Room.**
`;

const HowToReach = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
</Container>;

export default HowToReach;
