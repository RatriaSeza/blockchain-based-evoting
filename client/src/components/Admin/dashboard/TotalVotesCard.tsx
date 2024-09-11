export const TotalVotesCard = () => {
  return (
    <div className="card">
      <div className="card-body h-full p-4 md:p-6 flex items-center justify-between md:justify-normal md:gap-4 lg:gap-8">
        <div className="bg-gray-200 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center rounded-md text-xl text-gray-700">
          <span>
            <i className="fa-solid fa-users"></i>
          </span>
        </div>
        <div>
          <h4 className="text-gray-500 text-3xl md:text-4xl font-semibold">1.000</h4>
          <p className="text-gray-400 text-sm font-normal text-nowrap">Total Votes</p>
        </div>
      </div>
    </div>
  );
};
