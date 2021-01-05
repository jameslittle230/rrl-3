import FeedbackForm from "./feedbackForm";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-gray-800 border-t-8 border-solid border-gray-600 mt-6">
      <div className="container max-w-screen-lg mx-auto px-4 py-8 text-gray-300 text-sm flex flex-col-reverse sm:flex-row justify-between">
        <div className="text">
          <p>Website Design © {year} James Little</p>
          <p>Content © {year} Sally Roth, Sari Rotter, Susan Laster</p>
          <p>Photos by Sari Rotter &amp; Bill Gardner</p>
          <div className="mt-2">
            <FeedbackForm />
          </div>
        </div>
        <div>
          <img
            className="inline mb-8 sm:w-64 flex-grow-0 ring ring-gray-200"
            src="https://rothrotterlaster.com/static/fc1d97dbc0967de6a3399f42f5af3223/a6173/ppoc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
