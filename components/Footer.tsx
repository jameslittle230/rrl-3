import { Link } from "./Link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 mt-6 -mb-3">
      <div className="container max-w-screen-lg mx-auto py-8 px-4 text-gray-300 text-sm flex flex-col-reverse sm:items-end gap-4 sm:flex-row justify-between">
        <div className="text">
          <p>
            Website Design &copy; {year}{" "}
            <Link href="https://jameslittle.me">James Little</Link>
          </p>
          <p>Content &copy; {year} Washington Square Pediatrics</p>
        </div>
        <div className="flex flex-col sm:items-center gap-4 sm:flex-row">
          <img
            className="inline max-w-[85px]"
            src="/images/pmch.png"
            width={133}
            height={121}
            loading="lazy"
            alt="Drs. Roth, Laster, Guenther, and Fernandez-Ledon are recognized by the NCQA as a patient-centered medical home."
            title="Drs. Roth, Laster, Guenther, and Fernandez-Ledon are recognized by the NCQA as a patient-centered medical home."
          />
          <img
            className="inline max-w-[350px] w-full sm:w-64"
            src="/images/ppoc.jpg"
            width={524}
            height={138}
            loading="lazy"
            alt="Drs. Roth, Laster, Guenther, and Fernandez-Ledon are preferred Boston Children's Hospital Community of Care members."
            title="Drs. Roth, Laster, Guenther, and Fernandez-Ledon are preferred Boston Children's Hospital Community of Care members."
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
