import React from "react";

const Main = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-black p-8 overflow-hidden">
      {children}
    </div>
  );
};

export default Main;