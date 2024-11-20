// DailyWorkForm.jsx
import InputField from "./InputField";
import SelectField from "./SelectField";
import CollarSection from "./CollarSection";
import ActionButtons from "./ActionButtons";

const DailyWorkForm = () => {
  const collarTypes = ["Blue-collar", "White-collar", "Grey-collar"];

  const handleDelete = (type) => {
    console.log(`${type} deleted`);
  };

  const handleAdd = () => {
    console.log("New collar type added");
  };

  return (
    <div className=" bg-white p-6 shadow rounded-lg ml-6">
      <h2 className="text-lg font-semibold mb-4">Daily Work</h2>
      <div className="space-y-4">
        <InputField placeholder="Daily work" />
        <InputField placeholder="Details" />
        <SelectField options={["Currency", "USD", "EUR"]} />
      </div>

      <h3 className="mt-6 mb-4 font-semibold">Collar</h3>
      <CollarSection types={collarTypes} onDelete={handleDelete} onAdd={handleAdd} />

      <ActionButtons />
    </div>
  );
};

export default DailyWorkForm;
