export const RecentVotes = () => {
  return (
    <div className="card grow">
      <div className="card-body">
        <h4 className="text-gray-500 font-semibold mb-3">Recent Votes</h4>
        <div className="grid grid-cols-1 divide-y overflow-y-auto">
        {Array.from({ length: 5 }).map(() => (
          <div className="flex justify-between items-center py-3">
            <div>
              <p className="text-gray-500 font-semibold text-sm">Voter's name</p>
              <p className="text-gray-400 text-xs">Major (class of)</p>
            </div>
            <p className="text-sky-500 text-xs">times ago</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
