import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ToastContainer } from "react-toastify";

type MastersCardProps = {
  onCloseClick: () => void;
};

export const MastersCard: React.FC<MastersCardProps> = ({
  onCloseClick,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <h6 className="text-lg text-gray-500 font-semibold">Masters</h6>
        <button
          onClick={onCloseClick}
          className="flex items-center p-2 h-fit text-gray-500 border rounded shadow hover:bg-gray-100 active:bg-gray-50"
        >
          <XMarkIcon className="size-5" />
        </button>
      </div>

      <div className="flex justify-end mx-6">
        <button 
          // onClick={() => setOpenAddModal(!openAddModal)}
          className="flex items-center gap-1 px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
          <PlusIcon className="size-4" />
          <p>Add</p>
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};
