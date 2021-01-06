import Container from "../../components/container";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# COVID-19 Guidelines

Please help stop the spread of COVID-19 and wear your mask to cover your nose
and mouth. This applies to everyone age 2 years and older. When socializing
the ideal way to visit is small groups, out of doors, >6 feet apart, wearing
masks.

## ILLNESS: If my child is sick, when should I get my child tested for COVID-19?

Your child should get tested for COVID-19 if they are experiencing any of the
following symptoms:

- Fever (100.0 or higher), chills, or shaking chills
- Cough (not due to other known cause, such as chronic cough)
- Difficulty breathing or shortness of breath
- New loss of taste of smell
- Sore throat
- Headache when in combination with other symptoms
- Muscle aches or body aches
- Nausea, vomiting, or diarrhea
- Fatigue, when in combination with other symptoms
- Nasal congestion or runny nose (not due to other known causes, such as 
  allergies) when in combination with other symptoms

## EXPOSURE: My child was exposed to someone who tested positive and feels fine

If your child was in contact for 15 minutes or more in a 24 hour period less
than 6 feet from someone known to have COVID-19, or your child had direct
contact with someone known to have COVID-19, then your child will need to
quarantine and possibly get a test.

**Do not get the test until 4 days have passed from the exposure.**

The CDC continues to recommend a quarantine for 14 days; during that time
call us if there are any symptoms.

If your child is unable to quarantine for 14 days, your child can:
- Stop the quarantine after 10 days with no symptoms during that time;
continue to monitor carefully for symptoms through Day 14
- Stop the quarantine after 7 days if there are no symptoms and a negative
test on Day 5 after the exposure; continue to monitor carefully for symptoms
through Day 14

[Click here to view a chart describing how to quarantine. →](https://files.rothrotterlaster.com/quarantine.pdf)

## TESTING: How do I get my child tested?

If your child is sick, call the office and we will arrange a drive through
test at Boston Children’s Hospital. If your child is not sick or has been
exposed, you can find a testing site at the following websites:

- <https://memamaps.maps.arcgis.com> — Enter your zip code and filter for 
  "Referral not required". Then click the search spyglass and check each site 
  listed. The instructions for each site will be there. If you are sick, 
  insurance should pay. If you are not sick, there is usually a charge. 
- Another website that shows testing sites that are free for all patients is 
  Stop the Spread. 
- In addition, Brookline residents, students and teachers can get tested at the
  Brookline Department of Public Health: <https://www.mpathy.org/schedule>

## TRAVEL: What are the rules for travel?

If you return from travel for more than 24 hours to a place listed by the
state as high-risk, before you can leave your home you must:
  
- Quarantine for 14 days from your arrival back in Massachusetts.
- OR have a negative test taken no longer than 72 hours before arrival in 
  Massachusetts
- OR have a negative test after arrival in Massachusetts

Please see the Mass Department of Public Health quarantine requirements page
for more details.

### What does quarantine mean?

The person stays separate and masked even at home for 14 days.

[Click here to view a chart describing how to quarantine. →](https://files.rothrotterlaster.com/quarantine.pdf)

### What does isolation mean?

The sick person stays completely away in a separate room from anyone who is
not sick. All family members are masked.
`;

const Index = () => (
  <Container title="COVID-19 Guidelines">
    <p className="text-sm uppercase text-gray-600 mb-6">
      Last updated on 2020-12-21
    </p>
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  </Container>
);

export default Index;
