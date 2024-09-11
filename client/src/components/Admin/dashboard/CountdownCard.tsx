export const CountdownCard = () => {
  return (
    <div className="card">
      <div className="card-body p-4 md:p-6 flex items-center justify-evenly md:gap-4 lg:gap-8">
        <div className="text-center ">
          <p className="text-sky-700 text-5xl font-semibold">10</p>
          <p className="text-gray-500 text-sm">Hours</p>
        </div>
        <div className="text-center ">
          <p className="text-sky-700 text-5xl font-semibold">10</p>
          <p className="text-gray-500 text-sm">Minutes</p>
        </div>
        <div className="text-center ">
          <p className="text-sky-700 text-5xl font-semibold">10</p>
          <p className="text-gray-500 text-sm">Seconds</p>
        </div>
      </div>
    </div>
  )
}