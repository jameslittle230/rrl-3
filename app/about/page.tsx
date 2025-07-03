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
        <h1 className="mb-8">About the Office</h1>
      </div>

      <Profile name="Sally S. Roth, MD" imageUrl="/images/roth.jpg">
        Dr. Roth is a graduate of Smith College and Case Western Reserve Medical
        School. She trained at Yale New Haven Hospital, completed a fellowship
        in Ambulatory Pediatrics and was on the Pediatric Faculty at the
        University of Florida. She is Board Certified in Pediatrics.
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

      <Profile name="Cara S. Guenther, MD" imageUrl="/images/guenther.jpg">
        Dr. Guenther is a board-certified pediatrician who joined Drs. Roth and Laster in the summer of 2025. She is a graduate of Harvard University, Boston University School of Medicine, and the Boston Combined Residency Program at Boston Children’s Hospital and Boston Medical Center. After residency, Dr. Guenther completed two years of pediatric pulmonary fellowship at Boston Children’s Hospital before pursuing a career in general pediatrics.
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
          name="Shanna Jones"
          since="2025"
          imageUrl="/images/profile.png"
        />
      </StaffGrid>
    </>
  );
}
