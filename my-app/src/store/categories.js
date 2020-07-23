let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],

    activeCategory: ''

};


export default (state = initialState, action) => {
    let { type, payload } = action;



    switch (type) {
        case 'PRODUCT':
            state = initialState;
            let activeCategory = state.categories.filter(cat => cat.name === payload)[0]['displayName'];
            return { categories: state.categories, activeCategory };
        case 'CART':
            state = initialState;
            let activeCategoryCart = state.categories.filter(cat => cat.name === payload.category);
            return { categories: state.categories, activeCategory: activeCategoryCart[0]['displayName'] };
        case 'GET':
            return state;
        case 'PUT':
            return state;
        case 'POST':
            return state;
        case 'DELETE':
            return state;
        default:
            let active = state.categories.filter(cat => cat.name === state.categories[0].name);

            return { categories: state.categories, activeCategory: active[0]['displayName'] };
    }
}

export const productBaseCategory = (name) => {

    return {
        type: 'PRODUCT',
        payload: name
    }
}



