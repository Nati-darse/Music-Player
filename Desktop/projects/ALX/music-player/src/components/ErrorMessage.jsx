import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message, type = "error" }) => {
  const bgColor = {
    error: "bg-red-500/90",
    warning: "bg-yellow-500/90",
    info: "bg-blue-500/90"
  };

  return (
    <div className={`${bgColor[type]} text-white p-3 rounded-lg mb-4 flex items-start gap-3 shadow-lg`}>
      <AlertCircle className="flex-shrink-0 w-5 h-5 mt-0.5" />
      <div>
        <p className="font-medium">{type === "error" ? "Error" : type === "warning" ? "Warning" : "Notice"}</p>
        <p className="text-sm opacity-90">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;