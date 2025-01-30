import { useState, useEffect } from "react";

export default function CountdownTimer() {
  // Set a fixed sale end date
  const saleEndDate = new Date("2025-06-30T23:59:59"); // Set your desired future date & time

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = saleEndDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border border-red-500 p-4 mt-4 rounded text-center text-lg ">
      ⏳ HURRY UP! SALE ENDS IN:
      <br />
      <b className="text-red-600">
        {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Mins : {timeLeft.seconds} Secs
      </b>
    </div>
  );
}
