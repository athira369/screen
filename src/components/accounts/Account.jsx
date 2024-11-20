import React from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import ExpenseTable from "./ExpenseTable.jsx";

const Account = () => {
  const expenseData = [
    { key: "1", slNo: "1", date: "xx/xx/xxxx", invoiceNo: "4954545", description: "Paid cash", dr: "0", cr: "4954545" },
    { key: "2", slNo: "2", date: "xx/xx/xxxx", invoiceNo: "4943434", description: "Paid cash", dr: "0", cr: "4943434" },
    { key: "3", slNo: "3", date: "xx/xx/xxxx", invoiceNo: "4434389", description: "Paid", dr: "0", cr: "4434389" },
    { key: "4", slNo: "4", date: "xx/xx/xxxx", invoiceNo: "4434349", description: "Description", dr: "0", cr: "4434349" },
  ];

  const handleAddExpense = () => {
    console.log("Expense added!");
  };

  return (
    <div className="flex min-h-screen">
     
      <div className="flex-grow bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable data={expenseData} />
      </div>
    </div>
  );
};

export default Account;
