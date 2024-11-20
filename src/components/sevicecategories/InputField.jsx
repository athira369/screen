// InputField.jsx
const InputField = ({ placeholder, type = "text", className = "" }) => (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-3 border rounded-lg bg-[#F4F3FF] ${className}`}
    />
  );
  
  export default InputField;
  