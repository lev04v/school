import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Fast, smooth 750ms initial load duration
    const timer = setTimeout(() => {
      setHidden(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
        onComplete?.();
      }, 450);
      return () => clearTimeout(removeTimer);
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={hidden ? "hidden" : ""}
      aria-hidden={hidden}
      role="progressbar"
      aria-label="Loading Horizon Academy"
    >
      <div className="preloader-backdrop" />
      <div className="preloader-content">
        <div className="preloader-crest">
          <div className="preloader-crest-ring">
            <svg
              className="preloader-leaf"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D6A76F"
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="preloader-monogram">HA</span>
          </div>
        </div>
        <h3 className="preloader-title">Horizon Academy</h3>
        <p className="preloader-sub">Senior Secondary CBSE School · Estd. 1998</p>
        <div className="preloader-bar">
          <div className="preloader-bar-inner" />
        </div>
      </div>
    </div>
  );
}
