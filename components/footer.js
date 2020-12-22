export default () => (
  <div className="w-full bg-gray-800 border-t-8 border-solid border-gray-600 mt-6">
    <div className="container max-w-screen-lg mx-auto px-4 py-8 text-gray-300 text-sm flex items-end justify-between">
      <div className="text">
        <p>Website Design © 2020 James Little</p>
        <p>Content © 2020 Sally Roth, Sari Rotter, Susan Laster</p>
        <p>Photos by Sari Rotter &amp; Bill Gardner</p>
        <p className="mt-2">
          <form>
            <input
              className="rounded-l px-4 py-2 bg-white bg-opacity-20  focus:bg-opacity-90 focus:text-black"
              type="text"
              placeholder="Website Feedback"
            />
            <button className="rounded-r px-4 py-2 bg-gray-300 text-black font-bold hover:shadow-lg">
              Send
            </button>
          </form>
        </p>
      </div>
      <div>
        <img
          className="inline w-64 flex-grow-0 ring ring-gray-200"
          src="https://rothrotterlaster.com/static/fc1d97dbc0967de6a3399f42f5af3223/a6173/ppoc.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
);
