import React from "react";

const CheckBalanceCard = ({ name, accountNumber, balance }) => {
  return (
    <div className="bg-gray-100 shadow p-4 rounded flex items-center justify-between mb-4">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{accountNumber}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${balance}</p>
      </div>
    </div>
  );
};

export default CheckBalanceCard;
