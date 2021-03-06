import Container from "../../components/container";
import Resource from "../../components/resource";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# COVID-19 Vaccination Information for Patients

The Pfizer-BioNTech COVID-19 vaccine is now approved for patients 12 years and
older. **We strongly urge all of our patients 12 years and older to get the
COVID-19 vaccine.**

The Pfizer-BioNTech COVID-19 vaccine is a 2 dose vaccine given 21 days apart.
Immunity from the shot occurs 2 weeks after the 2nd dose.

We are not yet a designated COVID-19 vaccination site. If we become a COVID-19
vaccination site we will notify you by email.

## Current Information (Updated 2021-05-16)

1. CONSENT FORM — any patient younger than 18 years is required to show written
consent from a parent or guardian. The parent does not have to be present at the
vaccine appointment but the patient must show the consent form. You can go to
<https://www.mass.gov/lists/ma-consent-forms-for-people-under-18-years-of-age>
to download a consent form. 

2. SIDE EFFECTS — the side effects of the Pfizer-BioNTech vaccine for patients
ages 12-15 are similar to patients ages 16 and older: pain, fever, chills,
fatigue. These side effects are more frequent after the 2nd vaccine. 

3. HOW TO BOOK AN APPOINTMENT: 

* Adults can book an appointment for their child at <https://vaxfinder.mass.gov>

* Some vaccine sites do not require an appointment and are walk-in sites: <https://www.bostonglobe.com/2021/05/05/metro/six-states-mass-vaccination-sites-will-offer-walk-up-appointments-starting-monday-baker-says>

* If your child has ever had medical care at Boston Children’s Hospital, you can
sign up for your child’s COVID vaccine at Boston Children’s Hospital. You can 
find more information here: bostonchildrens.org/covid19
`;

const EmotionalHealth = () => (
  <Container title="Emotional Health during COVID-19">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  </Container>
);

export default EmotionalHealth;
