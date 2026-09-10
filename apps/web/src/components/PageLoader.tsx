import React, { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  targetPageName?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading,
  targetPageName,
}) => {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setFadingOut(false);
    } else {
      setFadingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setFadingOut(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  const displayTitle = targetPageName
    ? `Loading ${targetPageName}...`
    : "Horizon Academy";

  return (
    <div
      className={`page-route-loader ${fadingOut ? "loader-fade-out" : "loader-active"}`}
      aria-hidden={!isLoading}
      role="status"
      aria-live="polite"
    >
      <div className="route-loader-backdrop" />
      <div className="route-loader-content">
        {/* Regal Botanical School Crest */}
        <div className="route-loader-crest">
          <div className="route-loader-crest-ring">
            <svg
              className="route-loader-leaf"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D6A76F"
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="route-loader-monogram">HA</span>
          </div>
        </div>

        {/* School Name & Current Nav Destination */}
        <h3 className="route-loader-school-name">Horizon Academy</h3>
        <p className="route-loader-page-target">{displayTitle}</p>
        <span className="route-loader-sub-tag">CBSE Affiliated 10+2 (Code: 71204)</span>

        {/* Animated Regal Gold Shimmer Progress Bar */}
        <div className="route-loader-progress-track">
          <div className="route-loader-progress-bar" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
