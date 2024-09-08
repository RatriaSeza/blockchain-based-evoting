export const TotalVotesCard = () => {
  return (
    <div className="card">
      <div className="card-body flex items-center justify-evenly md:justify-normal md:gap-4 lg:gap-8">
        <div className="bg-gray-200 h-14 w-14 flex justify-center items-center rounded-md text-xl text-gray-700">
          <span>
            <i className="fa-solid fa-users"></i>
          </span>
        </div>
        <div>
          <h4 className="text-gray-500 text-4xl font-semibold">1.000</h4>
          <p className="text-gray-400 text-sm font-normal">Total Votes</p>
        </div>
      </div>
    </div>
  );
};
