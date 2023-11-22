import React from "react";

export const Tailwind = () => {
  return (
    <div className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          className="h-12 w-12 bg-white rounded-xl shadow-md items-center space-x-4"
          alt=""
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">
          Something as small as
        </div>
        <p className="text-slate-500">there’s no reason to use anything</p>
        <button className="btn bg-white-smoke  rounded-xl">Success</button>
      </div>
    </div>
  );
};
