import { Link } from "./Link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 mt-6 -mb-3">
      <div className="container max-w-screen-lg mx-auto py-8 px-4 text-gray-300 text-sm flex flex-col-reverse sm:items-end gap-4 sm:flex-row justify-between">
        <div className="text">
          <p>Website Design &copy; {year} <Link href="https://jameslittle.me">James Little</Link></p>
          <p>Content &copy; {year} Washington Square Pediatrics</p>
        </div>
        <div>
          <img
            className="inline max-w-[350px] w-full sm:w-64 flex-grow-0 ring ring-gray-200"
            src="/images/ppoc.jpg"
            alt="Drs. Roth and Laster are preferred Boston Children's Hospital Community of Care members."
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
