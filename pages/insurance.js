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

## January 2021 Updates

As you are likely aware, the Affordable Care Act limits patient cost share and
results in no copayment or deductible for an annual well visit. But, in
conjunction with the ACA, changes were made to the federal medical billing
guidelines as of January 1, 2021 which mandated new medical billing regulations.
The current billing guidelines state that **if a medical problem that is outside
of normal growth or development is discussed or managed at an annual check up,
we are required to document and charge for this in addition to the usual charge
for the well visit itself.**

While well visits generally do not involve copayments or deductible charges,
with this new federal guideline you may be charged a copayment or deductible
when a separate medical problem is discussed or managed during a routine
checkup.

For example, if your child is found to have an ear infection during the routine
checkup, there must be a separate billing charge for the diagnosis and
management of the ear infection in addition to the usual charge for the check
up. Or, if your child has asthma and we review your child’s asthma status and
review or refill your child’s medications for asthma management, there may be an
additional charge associated with that visit.

We do not choose how to bill in this way for each visit; we are mandated by
federal law to follow the new billing guidelines. And, we do not determine the
amount of your copayment or your deductible. That is determined by your
insurance company, not by our office.

Please feel free to ask us about these changes or contact our billing department
if you have any questions about a bill you received from our office. We can be
reached at 617-232-2811.
`;

const Insurance = () => (
  <Container title="Insurance">
    <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
  </Container>
);

export default Insurance;
