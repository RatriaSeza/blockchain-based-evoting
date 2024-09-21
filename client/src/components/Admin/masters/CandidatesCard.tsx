import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { CandidatesTable } from "./CandidatesTable";

import { Dialog, DialogHeader, DialogFooter, DialogBody, Button } from "@material-tailwind/react";

type CandidatesCardProps = {
  onCloseClick: () => void;
};

export const CandidatesCard: React.FC<CandidatesCardProps> = ({
  onCloseClick,
}) => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <h6 className="text-lg text-gray-500 font-semibold">Candidates</h6>
        <button
          onClick={onCloseClick}
          className="flex items-center p-2 h-fit text-gray-500 border rounded shadow hover:bg-gray-100 active:bg-gray-50"
        >
          <XMarkIcon className="size-5" />
        </button>
      </div>

      <div className="flex justify-end mx-6">
        <button 
          onClick={() => setOpenAddModal(!openAddModal)}
          className="flex items-center gap-1 px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
          <PlusIcon className="size-4" />
          <p>Add</p>
        </button>
      </div>

      <CandidatesTable />

      <Dialog open={openAddModal}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenAddModal(!openAddModal)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => setOpenAddModal(!openAddModal)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
