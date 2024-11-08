import { UserGroupIcon } from "@heroicons/react/24/solid";

type TotalVotesCardProps = {
  totalVotes: number;
}

export const TotalVotesCard: React.FC<TotalVotesCardProps> = ({ totalVotes }) => {
  return (
    <div className="card h-full">
      <div className="card-body p-4 md:p-6 md:gap-4 lg:gap-8">
        <div className="md:hidden">
          <h4 className="flex items-center text-gray-500 text-3xl font-semibold"><span className="text-xl mr-2"><UserGroupIcon className="size-5" /></span> 666</h4>
          <p className="text-gray-400 text-xs font-normal text-center">Total Votes</p>
        </div>
        <div className="hidden md:flex md:gap-4 lg:gap-5">
          <div className="bg-gray-200 w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center rounded-md text-xl text-gray-700">
            <span>
              <UserGroupIcon className="size-6" />
            </span>
          </div>
          <div>
            <h4 className="text-gray-500 text-4xl lg:text-4xl font-semibold">{totalVotes}</h4>
            <p className="text-gray-400 text-sm font-normal text-nowrap">Total Votes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
