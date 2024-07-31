export const CandidateSkeleton = () => {
  return (
    <div className="relative bg-dark-card shadow-inner shadow-neutral-800 rounded-xl w-full md:w-96 shiny overflow-hidden">
      <div className='bg-neutral-900 rounded-t-xl'>
        <div className="flex justify-center items-center w-full h-60 object-cover rounded-t-xl bg-neutral-900">
          <svg className="w-10 h-10 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>
      </div>
      <div className='px-4 py-4 rounded-t-xl'>
        <div className='mb-2'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='mb-3'>
                <div className="h-3 rounded-full bg-gray-700 w-40 mb-1"></div>
                <div className="h-2 rounded-full bg-gray-700 w-20 mb-2.5"></div>
              </div>
              <div>
                <div className="h-3 rounded-full bg-gray-700 w-40 mb-1"></div>
                <div className="h-2 rounded-full bg-gray-700 w-20 mb-2.5"></div>
              </div>
            </div>
            <p className='text-6xl font-semibold mr-2'>
              <div className="w-8 h-14 rounded-xl bg-gray-700 mb-2.5"></div>
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
        <button disabled={true} 
            className="bg-gray-700 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-5 px-14 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 shadow-none hover:shadow-none"
            type="button">
            &nbsp;
          </button>
        </div>
      </div>
    </div>
  );
};
