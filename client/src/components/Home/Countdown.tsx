import { useState, useEffect } from "react";
import axios from "axios";
import { CountdownSkeleton } from "./CountdownSkeleton";
import { ClockIcon } from "@heroicons/react/24/solid";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() =>  {
    const getTimes = async () => {
      try {
        const startTimeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/masters/start-time`);
        const endTimeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/masters/end-time`);
        const currentTime = new Date().getTime();
        const startTime =  new Date(startTimeResponse.data.value).getTime();
        const endTime = new Date(endTimeResponse.data.value).getTime();
        
        if (currentTime < startTime) {
          setStatus("Election Start In:");
          const diff = Math.floor((startTime - currentTime) / 1000);
          setTime({
            days: Math.floor(diff / 86400),
            hours: Math.floor((diff % 86400) / 3600),
            minutes: Math.floor((diff % 3600) / 60),
            seconds: diff % 60,
          });
        } else if (currentTime >= startTime && currentTime < endTime) {
          setStatus("Election End In:");
          const diff = Math.floor((endTime - currentTime) / 1000);
          setTime({
            days: Math.floor(diff / 86400),
            hours: Math.floor((diff % 86400) / 3600),
            minutes: Math.floor((diff % 3600) / 60),
            seconds: diff % 60,
          });
        } else {
          setStatus("Election is Ended");
          setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
        setLoading(false);
      } catch (error: unknown) {
        console.error(error);
        setLoading(false);
      }
    }

    getTimes();
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(countdown);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="relative flex md:block justify-between items-center gap-4 px-6 md:px-12 py-4 md:py-8 rounded bg-countdown">
      <div className="flex flex-col justify-between gap-1">
        <h4 className="font-medium md:font-semibold grid items-center text-neutral-200">{loading ? 'Loading...' : status}</h4>
        {loading ? (
          <CountdownSkeleton />
        ) : (
          <div className="text-black flex gap-1 md:max-w-xs md:mx-auto">
            {time.days > 0 && (
              <div className="flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
                <span className="text-2xl md:text-4xl">
                  {String(time.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] md:text-xs">Days</span>
              </div>
            )}
            {time.days > 0 && <span className="text-5xl self-center text-center text-gray-100">:</span>}
            <div className="flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
              <span className="text-2xl md:text-4xl">
                {String(time.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs">Hours</span>
            </div>
            <span className="text-5xl self-center text-center text-gray-100">:</span>
            <div className="flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
              <span className="text-2xl md:text-4xl">
                {String(time.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs">Minutes</span>
            </div>
            <span className="text-5xl self-center text-center text-gray-100">:</span>
            <div className="flex flex-col items-center bg-neutral-200 font-semibold px-2 py-2 rounded">
              <span className="text-2xl md:text-4xl">
                {String(time.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs">Seconds</span>
            </div>
          </div>
        )}    
      </div>
      <span className="text-2xl absolute top-3 md:top-8 right-4 md:right-12 animate-pulse">
        <ClockIcon className="size-6" />
      </span>
    </div>
  );
};

export default Countdown;
