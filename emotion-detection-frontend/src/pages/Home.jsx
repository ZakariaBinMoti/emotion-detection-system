

const Home = () => {


  return (
    <div className="min-h-[90svh]">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-semibold">
          <span className="text-red-600">Automated</span> Emotion Detection
        </h1>
        <p className="text-gray-600 mt-2">With some simple steps</p>
      </header>

      {/* Main Section */}
      <main className="mt-4 mx-5">
        <div className="w-full max-w-5xl grid grid-cols-2 gap-4 bg-white shadow-lg rounded-lg lg:p-8 p-5 lg:mx-auto">
          <div>
            <div className="bg-[#006b41] text-white p-2 rounded-t-lg flex justify-between">
              <span>Type your Text</span>
            </div>
            <div className="h-64 bg-white border border-gray-200 rounded-b-lg overflow-y-scroll">
              <textarea
                className="text-gray-600 h-full w-full p-4"
                name="text"
                id="text"
                cols=""
                rows=""
                placeholder="Type your text here"
              ></textarea>
            </div>
          </div>

          <div>
            <div className="bg-[#006b41] text-white p-2 rounded-t-lg flex justify-between">
              <span>Emotions</span>
            </div>
            <div className="h-64 bg-white border border-gray-200 rounded-b-lg p-4 overflow-y-scroll">
              <p className="text-gray-400">
                Your emotion text will appear here.
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <button className="mx-auto px-5 py-2 bg-[#006b41] text-white rounded-full hover:bg-green-600 transition duration-300">
              Detect🥳
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
