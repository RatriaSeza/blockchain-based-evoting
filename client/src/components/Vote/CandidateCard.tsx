import React from 'react';
import Button from '../Button'
import { Candidate } from './CandidateType';

const CandidateCard: React.FC<Candidate> = ({ chiefName, viceName, candidateImage, candidateNumber, chiefMajor, viceMajor, chiefClassOf, viceClassOf }) => {
  return (
    <div className="bg-dark-card shadow-inner shadow-neutral-800 rounded-xl w-96">
      <div className='bg-neutral-900 rounded-t-xl'>
        <img className='w-full h-60 object-cover rounded-t-xl' src={candidateImage} alt={`Candidates ${candidateNumber} image`} />
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
          <Button label='Vote' customClass='py-2 px-8' />
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;