import React from "react";

const LoadingSpinner = ({ size = "md", text = "Loading music..." }) => {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4"
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-3">
      <div 
        className={`${sizes[size]} border-white border-t-transparent rounded-full animate-spin`}
        style={{ animationDuration: "0.75s" }}
      />
      <p className="text-white/80 text-sm font-medium">{text}</p>
    </div>
  );
};

export default LoadingSpinner;