import Nav from "../components/Nav";
import Countdown from "../components/Home/Countdown";
import LiveCount from "../components/Home/LiveCount";

const Home = () => {
  return (
    <div className="bg-[#111111] text-white">
      <div className="px-6 py-4">
        <div className="mb-24">
          <div>
            <p className="text-base leading-4 mb-6">
              Hi, <br />
              <span className="text-xl font-bold">Satria Reza Ramadhan</span>
            </p>
            <div className="mb-6">
              <Countdown />
            </div>
            <div className="mb-6">
              <LiveCount />
            </div>
          </div>
        </div>
        <Nav active="home" />
      </div>
    </div>
  );
};

export default Home;
