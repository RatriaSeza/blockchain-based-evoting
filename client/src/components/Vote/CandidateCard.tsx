import React from 'react';
import Button from '../Button'
import { CandidateType } from './CandidateType';
import { ToastContainer } from "react-toastify";
import { ToastError } from "../../components/Toast";

const CandidateCard: React.FC<CandidateType> = ({ 
  candidateNumber, 
  chiefName,
  chiefMajor,
  chiefClassOf,
  viceName,
  viceMajor,
  viceClassOf,
  isLogin
  }) => {  

  const handleVoteClick = () => {
    if (!isLogin) {
      ToastError({ message: "You must login to vote!.", position: "bottom-right", duration: 1400 });
    } else {
      // TODO: Add vote function
    }
  }

  return (
    <div className="bg-dark-card shadow-inner shadow-neutral-800 rounded-xl w-full md:w-96">
      <div className='bg-neutral-900 rounded-t-xl'>
        <img className='w-full h-60 object-cover rounded-t-xl' src={`${import.meta.env.VITE_API_URL}/api/candidate/image/${candidateNumber}`} alt={`Candidates ${candidateNumber} image`} />
      </div>
      <div className='px-4 py-4 rounded-t-xl'>
        <div className='mb-2'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='mb-2'>
                <p className='text-base font-semibold leading-4 '>{chiefName}</p>
                <p className='text-xs font-light'>{chiefMajor} ({chiefClassOf})</p>
              </div>
              <div>
                <p className='text-base font-semibold leading-4'>{viceName}</p>
                <p className='text-xs font-light'>{viceMajor} ({viceClassOf})</p>
              </div>
            </div>
            <p className='text-6xl font-semibold mr-2'>
              {candidateNumber}
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Button label='Vote' customClass='py-2 px-8' onClick={handleVoteClick}/>
        </div>
      </div>
      <ToastContainer  
        theme="dark"
      />
    </div>
  );
}

export default CandidateCard;