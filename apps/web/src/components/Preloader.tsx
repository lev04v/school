import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Smooth 1200ms load duration with fluid fade
    const timer = setTimeout(() => {
      setHidden(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
        onComplete?.();
      }, 650);
      return () => clearTimeout(removeTimer);
    }, 1200);

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
      <div className="preloader-crest">
        <div className="preloader-logo">
          <span>HA</span>
        </div>
      </div>
      <p className="preloader-title">Horizon Academy</p>
      <p className="preloader-sub">Senior Secondary CBSE School · Estd. 1998</p>
      <div className="preloader-bar" />
    </div>
  );
}
