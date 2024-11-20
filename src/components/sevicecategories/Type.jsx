import React from 'react';
import TypeList from './TypeList';

const Type = () => {
  const types = ['Daily work', 'One Time Lead'];

  const handleEdit = (type) => {
    console.log(`Edit clicked for: ${type}`);
    // Add logic to handle edit
  };

  const handleAddNew = () => {
    console.log('Add New clicked');
    // Add logic to handle adding a new type
  };

  return (
    <section className=" w-[100%] flex-1 p-6 flex-col h-[50%]">
         
      <TypeList types={types} onEdit={handleEdit} onAddNew={handleAddNew} />
    
    </section>
  );
};

export default Type;
