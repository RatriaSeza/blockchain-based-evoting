import React, { useState } from 'react';
import Button from '../Button'
import { CandidateType } from './CandidateType';
import { ToastContainer } from "react-toastify";
import { ToastError, ToastSuccess } from "../../components/Toast";
import axios from 'axios';

const CandidateCard: React.FC<CandidateType> = ({ 
  _id,
  candidateNumber, 
  chiefName,
  chiefMajor,
  chiefClassOf,
  viceName,
  viceMajor,
  viceClassOf,
  isLogin
  }) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleVoteClick = async () => {
    setIsLoading(true);
    if (!isLogin) {
      ToastError({ message: "You must login to vote!", position: "bottom-right", duration: 1400 });
      setIsLoading(false);
    } else {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/vote`, {
          candidateId: _id,
          voterId: user.voter._id
        }, {
          withCredentials: true
        });
        
        if (response.status === 200) {
          ToastSuccess({ message: response.data.message, position: "bottom-right", duration: 1400 });
        } else {
          ToastError({ message: response.data.message, position: "bottom-right", duration: 1400 });
        }
      } catch (error: unknown) {
        console.error(error);

        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data?.message || "Vote failed!";
          ToastError({ message: errorMessage, position: "bottom-right", duration: 1400 });
        } else {
          ToastError({ message: "An unexpected error occurred.", position: "bottom-right", duration: 1400 });
        }
      } finally {
        setIsLoading(false);
      }
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
          <Button label={ isLoading ? <span><i className="fa-solid fa-spinner animate-spin mr-2"></i> Processing</span> : 'Vote'} customClass='py-2 px-8' onClick={handleVoteClick}/>
        </div>
      </div>
      <ToastContainer  
        theme="dark"
      />
    </div>
  );
}

export default CandidateCard;