import { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState({
    hours: 10,
    minutes: 0,
    seconds: 10,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          clearInterval(countdown);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="relative flex justify-between items-center gap-4 px-6 py-4 rounded bg-countdown">
      <div className="flex flex-col justify-between gap-1">
        <h4 className="font-medium grid items-center">Time Remaining</h4>
        <div className="text-black grid grid-cols-11 gap-1">
          <div className="col-span-3 flex flex-col items-center bg-gray-100 font-semibold px-2 py-2 rounded">
            <span className="text-4xl">
              {String(time.hours).padStart(2, "0")}
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <span className="text-5xl self-center text-center text-gray-100">
            :
          </span>
          <div className="col-span-3 flex flex-col items-center bg-gray-100 font-semibold px-2 py-2 rounded">
            <span className="text-4xl">
              {String(time.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <span className="text-5xl self-center text-center text-gray-100">
            :
          </span>
          <div className="col-span-3 flex flex-col items-center bg-gray-100 font-semibold px-2 py-2 rounded">
            <span className="text-4xl">
              {String(time.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
      <span className="text-2xl absolute top-3 right-4 animate-pulse">
        <i className="fa-solid fa-hourglass-end"></i>
      </span>
    </div>
  );
};

export default Countdown;
