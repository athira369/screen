import CheckBalanceCard from "./CheckBalanceCard";
import PayoutForm from "./PayoutForm";
import PayoutList from "./PayoutList";


const PayOut = () => {
    const schedules = [
      { id: 1, icon: "https://via.placeholder.com/32", title: "All Dealers", schedule: "Monthly" },
      { id: 2, icon: "https://via.placeholder.com/32", title: "All Franchisee", schedule: "Monthly" },
      { id: 3, icon: "https://via.placeholder.com/32", title: "All Service Providers", schedule: "Weekly" },
      { id: 4, icon: "https://via.placeholder.com/32", title: "Thomas", schedule: "Feb 14" },
      { id: 5, icon: "https://via.placeholder.com/32", title: "Banu", schedule: "Feb 15" },
    ];
  
    const handleEdit = (id) => {
      console.log("Edit item with id:", id);
    };
  
    const handleDelete = (id) => {
      console.log("Delete item with id:", id);
    };
  
    const handleSave = () => {
      console.log("Form submitted!");
    };
  
    return (
      <div className="flex min-h-screen">
        <div className="w-1/4 bg-purple-800 text-white">
          {/* Sidebar can go here */}
        </div>
        <div className="w-3/4 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Payout Schedule</h1>
          <PayoutList schedules={schedules} onEdit={handleEdit} onDelete={handleDelete} />
          <CheckBalanceCard
            name="Lasso Keynes"
            accountNumber="4551 6567 8886 7775"
            balance="121,000"
          />
          <PayoutForm onSave={handleSave} onDelete={() => console.log("Delete form data")} />
        </div>
      </div>
    );
  };
  
  export default PayOut;