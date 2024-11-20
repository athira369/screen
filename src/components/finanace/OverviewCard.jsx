import React from "react";

const OverviewCard = ({ title, value, change, color }) => {
  return (
    <div className="shadow p-4 rounded bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <p className={`text-lg ${color}`}>{change}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
