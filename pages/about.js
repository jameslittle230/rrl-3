import Container from "../components/container";
import Spacer from "../components/spacer";

const Profile = (props) => (
  <div className="border-gray-300 border-2 border-solid rounded-xl p-4 my-4">
    <div className="flex space-x-4">
      <div className="w-52 flex-shrink-0">
        <img
          className="rounded"
          src={props.imageUrl}
          alt={`Picture of ${props.name}`}
        />
      </div>
      <div>
        <p className="font-bold text-2xl mb-3">{props.name}</p>
        <p className="prose">{props.children}</p>
      </div>
    </div>
  </div>
);

const StaffProfile = (props) => (
  <div className="border-gray-200 border-2 shadow border-solid rounded-xl p-2">
    <div>
      <p className="font-bold leading-tight">{props.name}</p>
      <p className="text-sm text-gray-700">Since {props.since}</p>
      <img
        className="rounded mt-2"
        src={props.imageUrl}
        alt={`Picture of ${props.name}`}
      />
    </div>
  </div>
);

export default () => (
  <Container>
    <div className="prose">
      <h1>About the office</h1>
      <p>Welcome to the office of Drs. Roth, Rotter, and Laster.</p>
      <p>
        To reach your child's pediatrician please call our office at
        617-232-2811. Our staff will make an appointment for you or ensure your
        child’s pediatrician calls you back as soon as possible.
      </p>
    </div>
    <Profile
      name="Sally S. Roth, MD"
      imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
    >
      Dr. Roth is a graduate of Smith College and Case Western Reserve Medical
      School. She trained at Yale New Haven Hospital, completed a fellowship in
      Ambulatory Pediatrics and was on the Pediatric Faculty at the University
      of Florida. She is Board Certified in Pediatrics.
    </Profile>

    <Profile
      name="Sari J. Rotter, MD"
      imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
    >
      Dr. Rotter began her career on staff at Boston Children's Hospital prior
      to entering private practice. She is a graduate of Simmons College,
      University of Wisconsin School of Medicine and Public Health, trained at
      Boston Medical Center and Boston Children's Hospital and completed a
      fellowship at Boston Children's in Developmental Pediatrics. She is Board
      Certified in General Pediatrics.
    </Profile>

    <Profile
      name="Susan B. Laster, MD"
      imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
    >
      Dr. Laster began her career working for 2 years at MGH Revere Healthcare
      Center and subsequently joined Drs Roth and Rotter. She is a graduate of
      Harvard College, Boston University School of Medicine, and trained at
      Massachusetts General Hospital where she also spent a year as Chief
      Resident of the MGH Pediatric Service. She is Board Certified and
      continues to maintain her Board Certification. She is also on the Board of
      Directors of the Pediatric Physicians Organization of Children’s Hospital.
    </Profile>

    <div className="prose mt-7 mb-3">
      <h2>Our Office Staff</h2>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <StaffProfile
        name="Linda Diaz"
        since="1991"
        imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
      />
      <StaffProfile
        name="Lin Kenney"
        since="1991"
        imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
      />
      <StaffProfile
        name="Melissa Moroney-Barzey"
        since="1991"
        imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
      />
      <StaffProfile
        name="Courtney Ferretti"
        since="1991"
        imageUrl="https://rothrotterlaster.com/static/d58522f1c6383d2943b955f774575da3/7a6cf/roth.jpg"
      />
    </div>
  </Container>
);
