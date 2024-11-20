// ActionButtons.jsx
const ActionButtons = () => (
    <div className="flex justify-between mt-6">
      <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
        Delete
      </button>
      <div className="space-x-4">
        <button className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100">
          Save as Draft
        </button>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          Save
        </button>
      </div>
    </div>
  );
  
  export default ActionButtons;
  