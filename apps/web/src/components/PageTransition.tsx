import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export default function PageTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <div key={pageKey} className="page-transition-layer">
      {children}
    </div>
  );
}
