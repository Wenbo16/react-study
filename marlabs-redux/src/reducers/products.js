
// However, object keys are not protected,
// so the following statement is executed without problem
// Use Object.freeze() to make object immutable

const initialAppState = {
    products : [
        {product : 'Product 1', Price: '10'},
        {product : 'Product 2', Price: '20'},
        {product : 'Product 3', Price: '30'},
        {product : 'Product 4', Price: '40'}
    ]
}

function productReducer(state=initialAppState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default productReducer;