import React from 'react';
import CategorieHeader from './CategorieHeader';
import CategorieStats from './CategorieStats';
import CategoriesGrid from './CategoriesGrid';

const Categories = () => {
  const categories = [
    { id: 1, title: 'Home Services', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'House Keeping', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Accounting', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Doctor', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Cleaning', image: 'https://via.placeholder.com/150' },
  ];

  return (
    
      <main className="flex-1 flex flex-col">
        <CategorieHeader />
        <CategorieStats />
        <CategoriesGrid categories={categories} />
      </main>

  );
};

export default Categories;
