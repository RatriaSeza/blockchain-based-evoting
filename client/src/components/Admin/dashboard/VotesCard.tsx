import { UserGroupIcon } from "@heroicons/react/24/solid";

type VotesCardProps = {
  count: number;
  description: string;
}

export const VotesCard: React.FC<VotesCardProps> = ({ count, description }) => {
  return (
    <div className="card h-full flex-1">
      <div className="card-body p-4 md:p-6 md:gap-4 lg:gap-8">
        <div className="md:hidden fle">
          <h4 className="flex items-center justify-center text-gray-500 text-3xl font-semibold"><span className="text-xl mr-2"></span>{count}</h4>
          <p className="flex justify-center items-center text-gray-400 text-xs font-normal"><UserGroupIcon className="size-4 mr-1" />{description}</p>
        </div>
        <div className="hidden md:flex md:gap-4 lg:gap-5">
          <div className="bg-gray-200 w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center rounded-md text-xl text-gray-700">
            <span>
              <UserGroupIcon className="size-6" />
            </span>
          </div>
          <div>
            <h4 className="text-gray-500 text-4xl lg:text-4xl font-semibold">{count}</h4>
            <p className="text-gray-400 text-sm font-normal text-nowrap">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
