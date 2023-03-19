
export const categories = [
    'Tank',
    'Ammo',
    'MLRS & Artillery',
    'APC & IFV',
    'Other'
];

export const initialState = {
    products: [
        {
            id: 1,
            image: 'https://via.placeholder.com/250',
            title: 'GMRLS',
            category: categories[Math.floor(Math.random() * categories.length)],
            description: 'Goooood morning VIETNAAAM.',
            price: 9.99
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/250',
            title: 'M1 Abrams',
            category: categories[Math.floor(Math.random() * categories.length)],
            description: 'I ain`t a senator son, no',
            price: 19.99
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/250',
            title: 'HIMARS',
            category: categories[Math.floor(Math.random() * categories.length)],
            description: 'I love the smell of napalm in the morning.',
            price: 29.99
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/250',
            title: 'M113',
            category: categories[Math.floor(Math.random() * categories.length)],
            description: 'Who called democracy??',
            price: 39.99
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/250',
            title: 'HIMARS',
            category: categories[Math.floor(Math.random() * categories.length)],
            description: 'I love the smell of napalm in the morning.',
            price: 29.99
        },
    ],
};




const productReducer = (state = initialState, action) => {
    console.log('before reducer: ', state);
    switch (action.type) {
        case 'ADD_PRODUCT':
            state.products = [...state.products, action]
        case 'DELETE_PRODUCT':

            const index = state.products.indexOf(action);

            state.products.splice(index, 1);
        default:
            console.log("e");
    }
    console.log('after reducer: ', state);
    return state;
};


export const selectProducts = () => initialState.products;


export default productReducer;