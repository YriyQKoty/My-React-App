import React from 'react';

function CategorySelector({ categories, onChange, totalCount }) {

  return (
    <div>
      <label htmlFor="category-select">Category: </label>
      <select id="category-select" onChange={(e) => onChange(e.target.value)}>
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