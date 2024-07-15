import Nav from "../components/Nav";
import Button from "../components/Button";
import Countdown from "../components/Home/Countdown";
import LiveCount from "../components/Home/LiveCount";

const Home = () => {
  return (
    <div className="bg-[#111111] min-h-dvh text-white">
      <Nav active="home" />
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-8 md:mt-20 md:container md:mx-auto">
          <div className="md:max-w-5xl mx-auto">
            <p className="text-base leading-4 mb-6">
              Hi, <br />
              <span className="text-xl font-bold flex">
                Satria Reza Ramadhan
                <img className="w-6 h-6 ml-2" alt="GIF" src="https://camo.githubusercontent.com/0c732027af8a28d138e3698181f7be7c9b97d443b4beb9c7ce8ec4cffc6b4767/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"/>
              </span>
            </p>
            <div className="flex justify-center mb-6">
              <a href="/vote">
                <Button label="Vote Now!"/>
              </a>
            </div>
            <div className="mb-6">
              <Countdown />
            </div>
            <div className="mb-6">
              <LiveCount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
