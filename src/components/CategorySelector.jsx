import React, { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';

function CategorySelector({ totalCount }) {
  const {categories, handleCategoryChange} = useContext(CategoriesContext)
  return (
    <div>
      <label htmlFor="category-select">Category: </label>
      <select id="category-select" onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
             {category}
          </option>
         
        ))}
      </select>
      <div> Count: {totalCount}

      </div>
    </div>
  );
}

export default CategorySelector;