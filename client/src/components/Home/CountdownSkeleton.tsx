export const CountdownSkeleton = () => {
  return (
    <div className="text-black grid grid-cols-11 gap-1 md:max-w-xs md:mx-auto">
      <div className="col-span-3 flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
        <span className="w-full flex justify-between gap-1">
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
        </span>
        <span className="text-xs">Hours</span>
      </div>
      <span className="text-5xl self-center text-center text-gray-100">
        :
      </span>
      <div className="col-span-3 flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
        <span className="w-full flex justify-between gap-1">
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
        </span>
        <span className="text-xs">Minutes</span>
      </div>
      <span className="text-5xl self-center text-center text-gray-100">
        :
      </span>
      <div className="col-span-3 flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
        <span className="w-full flex justify-between gap-1">
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
          <div className="h-10 rounded-md bg-black w-7 mb-2.5 shiny-dark overflow-hidden"></div>
        </span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  );
};
