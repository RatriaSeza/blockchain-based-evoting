import axios from "axios";
import { useEffect, useState } from "react";

export const CountdownCard = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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
      } catch (error: unknown) {
        console.error(error);
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
    <div className="card">
      <div className="card-body p-4 md:p-6">
        <h4 className="text-center text-gray-500 text-2xl md:text-3xl lg:text-base font-semibold">{status}</h4>
        <div className={`flex items-center justify-evenly ${time.days > 0 ? 'md:gap-2 lg:gap-4' : 'md:gap-4 lg:gap-8'} `}>
          {time.days > 0 && <div className="text-center ">
            <p className={`text-[#5284B4] ${time.days > 0 ? 'text-xl md:text-2xl' : 'text-3xl md:text-5xl'} font-semibold`}>{time.days}</p>
            <p className={`text-gray-500 ${time.days > 0 ? 'text-xs' : 'text-xs md:text-sm'}`}>Days</p>
          </div>}
          <div className="text-center ">
            <p className={`text-[#5284B4] ${time.days > 0 ? 'text-xl md:text-2xl' : 'text-3xl md:text-5xl'} font-semibold`}>{time.hours}</p>
            <p className={`text-gray-500 ${time.days > 0 ? 'text-xs' : 'text-xs md:text-sm'}`}>Hours</p>
          </div>
          <div className="text-center ">
            <p className={`text-[#5284B4] ${time.days > 0 ? 'text-xl md:text-2xl' : 'text-3xl md:text-5xl'} font-semibold`}>{time.minutes}</p>
            <p className={`text-gray-500 ${time.days > 0 ? 'text-xs' : 'text-xs md:text-sm'}`}>Minutes</p>
          </div>
          <div className="text-center ">
            <p className={`text-[#5284B4] ${time.days > 0 ? 'text-xl md:text-2xl' : 'text-3xl md:text-5xl'} font-semibold`}>{time.seconds}</p>
            <p className={`text-gray-500 ${time.days > 0 ? 'text-xs' : 'text-xs md:text-sm'}`}>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}