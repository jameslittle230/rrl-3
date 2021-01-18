import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";

const markdownContent = `
# Insurance

The insurance companies stipulate that the office see your child's insurance
card at every visit. If you are unable to show it, they require you to sign a
payment waiver in case the insurance coverage is incorrect. We recommend
taking a picture of your child’s insurance card on your phone so you have a
copy with you at all times.

There may be a charge associated with telemedicine which includes video visits,
phone calls or portal messages. This is in accordance with the Massachusetts 
Governor's Executive Order from March, 2020.

We accept most major insurance plans. If you have any questions, please call
our office to find out if we accept your insurance.

Copayments are due in full at the time of the office visit, as per all
insurance policy guidelines. This requirement applies to weekday and weekend
office visits. If your child is accompanied by a non-parent to a visit, we
are still required to collect the co-payment on the day of the visit. Please
plan accordingly.

If you are having financial difficulties, you may easily arrange a payment
plan with our office manager. While we cannot waive fees, we can always set
up a monthly payment plan, should the need arise.
`;

const Insurance = () => (
  <Container title="Insurance">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  </Container>
);

export default Insurance;
