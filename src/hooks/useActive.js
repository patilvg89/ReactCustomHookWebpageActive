import React, { useRef, useEffect, useState } from "react";

export function useActive(time) {
  const [active, setActive] = useState(false);
  const timer = useRef();
  const events = ["keypress", "mousemove", "touchmove", "click", "scroll"];

  useEffect(() => {
    const handleEvent = () => {
      setActive(true);
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        setActive(false);
      }, time);
    };

    events.forEach((events) => {
      document.addEventListener(events, handleEvent);
    });
    return () => {
      events.forEach((events) => {
        document.removeEventListener(events, handleEvent);
      });
    };
  }, [time]);
  return active;
}
