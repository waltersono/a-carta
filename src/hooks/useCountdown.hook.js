import { useEffect, useState } from "react";

const getCurrentTime = (minute, second) => {
  const currentMinute = minute < 10 ? `0${minute}` : minute;

  const currentSecond = second < 10 ? `0${second}` : second;

  return [currentMinute, currentSecond];
};

const useCountdown = (minutes) => {
  const [minute, setMinute] = useState(minutes);

  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second === 0) {
        if (minute === 0) {
          clearInterval(interval);
        } else {
          setMinute((currentMinute) => currentMinute - 1);
          setSecond(59);
        }
      } else {
        setSecond((currentSecond) => currentSecond - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second]);

  return getCurrentTime(minute, second);
};

export default useCountdown;
