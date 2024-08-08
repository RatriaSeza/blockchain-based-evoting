import React from 'react';
import Button from '../Button'
import { CandidateType } from './CandidateType';

const CandidateCard: React.FC<CandidateType> = ({ candidate }) => {
  return (
    <div className="bg-dark-card shadow-inner shadow-neutral-800 rounded-xl w-full md:w-96">
      <div className='bg-neutral-900 rounded-t-xl'>
        <img className='w-full h-60 object-cover rounded-t-xl' src={candidate.candidateImage} alt={`Candidates ${candidate.candidateNumber} image`} />
      </div>
      <div className='px-4 py-4 rounded-t-xl'>
        <div className='mb-2'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='mb-2'>
                <p className='text-base font-semibold leading-4 '>{candidate.chiefName}</p>
                <p className='text-xs font-light'>{candidate.chiefMajor} ({candidate.chiefClassOf})</p>
              </div>
              <div>
                <p className='text-base font-semibold leading-4'>{candidate.viceName}</p>
                <p className='text-xs font-light'>{candidate.viceMajor} ({candidate.viceClassOf})</p>
              </div>
            </div>
            <p className='text-6xl font-semibold mr-2'>
              {candidate.candidateNumber}
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