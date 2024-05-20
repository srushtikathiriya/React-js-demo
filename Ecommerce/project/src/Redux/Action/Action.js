export const ADD = (item) => {
    return{
        type:"ADD_TO_CART",
        payload:item
}
}

export const REMOVE = (id) => {
    return{
        type:"REMOVE_TO_CART",
        payload:id
}
}

export const WISHLIST_ADD = (item) => {
    return{
        type:"ADD_TO_WISHLIST",
        payload:item
}
}

export const WISHLIST_REMOVE = (id) => {
    return{
        type:"REMOVE_TO_WISHLIST",
        payload:id
}
}



// export const Cart_Incr = (item) => {
//     return{
//         type:"INCREACE_CART_COUNT",
//         payload:item
// }
// }

// export const Cart_Dec = (id) => {
//     return{
//         type:"DECREASE_CART_COUNT",
//         payload:id
// }
// }

export const UPDATE_QUANTITY = (id , quantity) => {
    return {
        type : "UPDATE_QUANTITY",
        payload : {id , quantity}
    }
}