import Container from "../components/container";
import Address from "../components/address"
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

const Appointments = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  <Address></Address>
  {/* <iframe
    className="my-4 ring ring-gray-400"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1759327244226!2d-71.13215350000002!3d42.33877230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379ba880fdf45%3A0x536471f86b11d0cf!2s637+Washington+St+%23202%2C+Brookline%2C+MA+02446!5e0!3m2!1sen!2sus!4v1439920811315"
    width="100%"
    height="450"
    frameborder="0"
    allowfullscreen=""
    title="Map of Roth, Rotter, and Laster Office"
    style={{"border": "0px"}}
  ></iframe> */}
  <div className="prose">
    <p>
      <strong>Note: </strong>We require 24 hours notice to cancel an
      appointment. There is a charge for appointments missed without proper
      notice.
    </p>
  </div>
</Container>;

export default Appointments;
