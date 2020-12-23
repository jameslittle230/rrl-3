import Container from "../components/container";
import ReactMarkdown from "react-markdown";
import Alert from "../components/alert";

const markdownContent = `
# Office Policies

Our office policies help us provide excellent and timely care of your child.
If you have any questions about our office, please don't hesitate to call us
at 617-232-2811.

1. We care for patients from birth through college graduation. We are happy
to make that health journey with our patients into young adulthood.

2. For well visits from newborn until age 3, you will make your child's next
appointment as you leave your current appointment.

3. For annual well visits starting at age 3, we find it best to schedule that
visit on or shortly after your child's birthday.

4. On rare occasions, certain insurance plans do not cover routine pediatric
visits. You will be responsible for the payments on all visits, including
routine but uncovered visits. If you have any billing questions, feel free to
contact our office or check with your insurance company about coverage
guidelines.

5. For sick visits, we are happy to see your child for any health concern
that you have. You do not need to check with your doctor about whether to
make an appointment.

6. According to guidelines set forth by insurance companies, all co-payments
are due at the time of an office visit.

7. Certain visits might have a co-payment that is billed after the visit has
occurred.

8. If at any time you have any billing questions, our billing is staff is
ready to help you. While we cannot waive fees, we can always set up a monthly
payment plan should the need arise.
`;

const Policies = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
</Container>;

export default Policies;
