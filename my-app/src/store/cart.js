let initialState = {
    cartProduct: [],
    cart: 0,
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'CART':
            let cartProduct = [...state.cartProduct,payload];
            return { cartProduct, cart: cartProduct.length };
        default:


            return state;
    }
}

export const addToCart = (product) => {
    return {
        type: 'CART',
        payload: product
    }
}