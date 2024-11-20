import React from 'react';
import CategoryCard from './CategoryCard';
import AddCategoryButton from './AddCategoryButton';

const CategoriesGrid = ({ categories }) => {
  return (
    <section className="flex-1 px-6 py-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
        <AddCategoryButton />
      </div>
    </section>
  );
};

export default CategoriesGrid;
