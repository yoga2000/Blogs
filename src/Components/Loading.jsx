import React from "react";

const Loading = () => {
  return (
    <div className="flex  z-50 bg-slate-950 h-screen items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    </div>
  );
};

export default Loading;
