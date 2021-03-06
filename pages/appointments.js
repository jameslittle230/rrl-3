import Container from "../components/container";
import Address from "../components/address";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# Appointments

We are always happy to see your child when you have any concerns. Please call
and make an appointment for a visit. While we can’t accept walk-ins, we
always have time for scheduled visits. You do not need to check with your
child's physician before making an appointment. Our staff is trained to take
your call and make an appointment.

**We are available to see patients every day of the year.** We are open for all
appointments, 9am-5pm, Monday-Friday, and for urgent medical problems on
Saturday, Sunday and holidays.

If you would like to make an appointment for your child, please call our
office at 617-232-2811.

Our office address is:
`;

const Appointments = () => (
  <Container title="Appointments">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
    <Address></Address>
    <div className="prose">
      <p>
        <strong>Note: </strong>We require 24 hours notice to cancel an
        appointment. There is a charge for appointments missed without proper
        notice.
      </p>
    </div>
  </Container>
);

export default Appointments;
