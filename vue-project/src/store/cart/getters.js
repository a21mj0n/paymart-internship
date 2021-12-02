export function getProductsGetter(state) {
    return state.products;
}

export function getProductsCount(state) {
    return state.products.length;
}

export function getProductsMoreThan200(state) {
    return state.products.filter(({ id }) => id > 0);
}

export function getProduct(state) {
    return (productId) => {
        return state.products.find(({ age }) => age === productId)
    }
}