import { Link } from "./Link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 mt-6">
      <div className="container max-w-screen-lg mx-auto p-8 text-gray-300 text-sm flex flex-col-reverse gap-x-4 sm:flex-row justify-between">
        <div className="text">
          <p>
            Website Design © {year}{" "}
            <Link href="https://jameslittle.me">
              James Little
            </Link>
          </p>
          <p>
            Content © {year}{" "}
            Sally Roth, Sari Rotter, Susan Laster, Magdalena Ivanova
          </p>
          <p>Photos by Sari Rotter &amp; Bill Gardner</p>
        </div>
        <div>
          <img
            className="inline mb-8 max-w-[350px] sm:w-64 flex-grow-0 ring ring-gray-200"
            src="/images/ppoc.jpg"
            alt="Drs. Roth, Rotter, Laster and Ivanova are preferred Boston Children's Hospital Community of Care members."
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
