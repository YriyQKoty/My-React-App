import React, { createContext, useState, useEffect } from 'react';

export const CategoriesContext = createContext({
    selectedCategory: '',
    categories: []
});

export const CategoriesProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        'Tank',
        'Ammo',
        'MLRS & Artillery',
        'APC & IFV',
        'Other'
      ];

    useEffect(() => { //using effect to apply default value for category
        setSelectedCategory(""); //setting default state for selected category
    }, []);


    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }


    return (
        <CategoriesContext.Provider value={{ categories, selectedCategory, handleCategoryChange }}>
            {children}
        </CategoriesContext.Provider>
    );
};
