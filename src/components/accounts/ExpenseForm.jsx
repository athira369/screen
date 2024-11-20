import React from "react";
import { Input, Button } from "antd";

const ExpenseForm = ({ onAddExpense }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data logic here
    onAddExpense();
  };

  return (
    <form className="bg-white shadow p-4 rounded mb-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-6 gap-4">
        <Input placeholder="Invoice No" className="col-span-1" />
        <Input placeholder="Date" className="col-span-1" />
        <Input placeholder="Description / Remarks" className="col-span-2" />
        <Input placeholder="DR" className="col-span-1" />
        <Input placeholder="CR" className="col-span-1" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button type="dashed" className="mr-4">
          Add Invoice
        </Button>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
