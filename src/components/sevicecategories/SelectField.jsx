// SelectField.jsx
const SelectField = ({ options, className = "" }) => (
    <select className={`w-full p-3 border rounded-lg bg-[#F3F4FF] ${className}`}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
  
  export default SelectField;
  