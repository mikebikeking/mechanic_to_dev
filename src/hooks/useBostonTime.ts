import { useState, useEffect } from 'react';

export function useBostonTime() {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
