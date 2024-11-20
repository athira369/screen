// CollarSection.jsx
import InputField from "./InputField";
const CollarSection = ({ types, onDelete, onAdd }) => (
    <div className="space-y-2">
      {types.map((type) => (
        <div key={type} className="flex items-center space-x-4">
          <span className="w-1/4">{type}</span>
          <InputField placeholder="Lead Quantity" className="w-1/3" />
          <InputField placeholder="Rate" className="w-1/3" />
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => onDelete(type)}
          >
            <i>🗑️</i>
          </button>
        </div>
      ))}
      <button
        className="text-blue-600 hover:text-blue-800"
        onClick={onAdd}
      >
        + Add new
      </button>
    </div>
  );
  
  export default CollarSection;
  