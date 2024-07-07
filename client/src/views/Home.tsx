import Nav from "../components/Nav";
import TimeIllustration from "../assets/img/time-illustration.svg";

const Home = () => {
  return (
    <div className="bg-[#111111] text-white">
      <div className="px-6 py-4">
        <div className="">
          <div>
            <p className="text-base leading-4">
              Hi, <br />
              <span className="text-xl font-bold">Satria Reza Ramadhan</span>
            </p>
            {/* <div className="mt-6 rounded bg-[#212121] h-80 shadow-card-sm">
              Time Remaining
            </div> */}
            <div className="flex justify-between items-center gap-4 mt-6 px-6 py-4 rounded shadow-countdown bg-countdown">
              <div className="flex flex-col justify-between gap-3">
                <h4 className="font-medium">Time Remaining</h4>
                <div className="text-black flex justify-betwee items-center">
                  <div className="bg-gray-100 text-6xl rounded">
                    <h2>10</h2>
                  </div>
                  <div className="h-fit text-6xl">
                    <h4>:</h4>
                  </div>
                  <div className="bg-gray-100 text-6xl rounded">10</div>
                  <span className="text-6xl">:</span>
                  <div className="bg-gray-100 text-6xl rounded">10</div>
                </div>
              </div>
              <img
                className="min-w-16"
                src={TimeIllustration}
                alt="Time Illustration"
              />
            </div>
          </div>
        </div>
        <Nav active="home" />
      </div>
    </div>
  );
};

export default Home;
