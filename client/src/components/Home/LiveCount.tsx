import BallotIcon from "../../assets/img/ballot-box.png";

const LiveCount = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-6">
      <div className="bg-votecount px-6 md:px-12 py-4 flex md:flex-col justify-around items-center gap-1 rounded">
        <img className="h-24 w-auto" src={BallotIcon} alt="BallotIcon" />
        <div className="flex flex-col justify-center items-center text-black text-center">
          <h2 className="text-5xl font-bold">1.000</h2>
          <h2 className="text-gray-900 text-sm font-medium">
            Total Vote Count
          </h2>
        </div>
      </div>
      <div className="grow bg-dark-card px-6 py-4 shadow-dark-card rounded">
        <h4 className="flex items-center text-white font-semibold text-xl mb-3"><span className="text-xs text-red-500 mr-2"><i className="fa-solid fa-circle animate-pulse"></i></span>Live Count</h4>
        <div>
          <div className="flex justify-between items-center gap-2 mb-2">
            <div className="bg-neutral-800 text-[#55d9c6] text-lg w-14 h-14 flex justify-center items-center rounded-full">
              1
            </div>
            <div className="grow flex flex-col justify-between h-14">
              <p className="text-sm">Calon Ketua & Wakil Ketua 1</p>
              <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-neutral-800 font-sans text-xs font-medium">
                <div className="flex items-center justify-center w-[75%] h-full overflow-hidden text-white break-all bg-[#55d9c6] rounded-full">
                </div>
              </div>
              <p className="text-xs">750 votes</p>
            </div>
            <p className="text-sm">
              75%
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="bg-neutral-800 text-[#ef82ef] text-lg w-14 h-14 flex justify-center items-center rounded-full">
              2
            </div>
            <div className="grow flex flex-col justify-between h-14">
              <p className="text-sm">Calon Ketua & Wakil Ketua 1</p>
              <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-neutral-800 font-sans text-xs font-medium">
                <div className="flex items-center justify-center w-[25%] h-full overflow-hidden text-white break-all bg-[#ef82ef] rounded-full">
                </div>
              </div>
              <p className="text-xs">250 votes</p>
            </div>
            <p className="text-sm">
              25%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCount;
