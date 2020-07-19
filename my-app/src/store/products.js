let initialState = [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'PRODUCT':
            state = initialState;
            let products = state.filter(product => product.category === payload);
            return { products };
        case 'CART':
            return state;
        case 'GET':
            return state;
        case 'PUT':
            return state;
        case 'POST':
            // state = initialState;
            let addCart = state.products.map(product =>{
                if(product.name === payload.name){
                    product.inStock--;
                }
                return product;
            });
            
            return { products: addCart };
        case 'DELETE':
            let deleteCart = state.products.map(product =>{
                if(product.name === payload.name){
                     product.inStock++;
                }
                return product;
            });
            
            return { products: deleteCart };
        default:
            let product = state.filter(product => product.category === state[0].category);
            return { products: product };
    }
}

export const productBaseCategory = (name) => {

    return {
        type: 'PRODUCT',
        payload: name
    }
}