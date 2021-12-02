export function getProducts(state) {
    return state.products;
}

export function getProductsCount(state) {
    return state.products.length;
}

export function getProductsMoreThan200(state) {
    return state.products.filter(({ price }) => price > 200);
}

export function getProduct(state) {
    return (productId) => {
        return state.products.find(({ id }) => id === productId)
    }
}
