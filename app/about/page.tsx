import { Metadata } from "next";
import { Profile } from "./components/Profile";
import { StaffGrid } from "./components/StaffGrid";
import { StaffProfile } from "./components/StaffProfile";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <div className="prose">
        <h1>About the Office</h1>
        <p>Welcome to the office of Drs. Roth, Rotter, Laster and Ivanova.</p>
      </div>

      <Profile name="Sally S. Roth, MD" imageUrl="/images/roth.jpg">
        Dr. Roth is a graduate of Smith College and Case Western Reserve Medical
        School. She trained at Yale New Haven Hospital, completed a fellowship
        in Ambulatory Pediatrics and was on the Pediatric Faculty at the
        University of Florida. She is Board Certified in Pediatrics.
      </Profile>

      <Profile name="Sari J. Rotter, MD" imageUrl="/images/rotter.jpg">
        Dr. Rotter began her career on staff at Boston Children's Hospital prior
        to entering private practice. She is a graduate of Simmons College,
        University of Wisconsin School of Medicine and Public Health, trained at
        Boston Medical Center and Boston Children's Hospital and completed a
        fellowship at Boston Children's in Developmental Pediatrics. She is
        Board Certified in General Pediatrics.
      </Profile>

      <Profile name="Susan B. Laster, MD" imageUrl="/images/laster.jpg">
        Dr. Laster began her career working for 2 years at MGH Revere Healthcare
        Center and subsequently joined Drs Roth and Rotter. She is a graduate of
        Harvard College, Boston University School of Medicine, and trained at
        Massachusetts General Hospital where she also spent a year as Chief
        Resident of the MGH Pediatric Service. She is Board Certified and
        continues to maintain her Board Certification. She is also on the Board
        of Directors of the Pediatric Physicians Organization of Children’s
        Hospital.
      </Profile>

      <Profile name="Magdalena D. Ivanova, MD" imageUrl="/images/ivanova.jpg">
        Dr. Ivanova is a board-certified pediatrician who joined Drs. Roth,
        Rotter, & Laster in 2023. She received her Bachelor of Arts degree in
        Biology from the University of Chicago and her medical degree from
        Harvard Medical School. She completed her residency training with the
        Boston Combined Residency Program at Boston Children’s Hospital and
        Boston Medical Center. In her free time, she enjoys exploring the
        outdoors, gardening, and spending time with her family and cat Zara.
      </Profile>

      <div className="prose">
        <h2 className="mt-12 mb-4">Our Office Staff</h2>
      </div>

      <StaffGrid>
        <StaffProfile
          name="Linda Diaz"
          since="1991"
          imageUrl="/images/linda.jpg"
        />
        <StaffProfile
          name="Melissa Moroney-Barzey"
          since="1999"
          imageUrl="/images/melissa.jpg"
        />
        <StaffProfile
          name="India May"
          since="2024"
          imageUrl="/images/india.jpg"
        />
        <StaffProfile
          name="Da Hae Choi"
          since="2024"
          imageUrl="/images/da-hae.jpg"
        />


      </StaffGrid>
    </>
  );
}
