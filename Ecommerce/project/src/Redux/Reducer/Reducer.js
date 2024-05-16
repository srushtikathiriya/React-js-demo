const initial_state={
    carts : [],
    wishlist:[],
}
export const cartreducer = (state=initial_state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
        case "REMOVE_TO_CART":
                const data = state.carts.filter((el)=>el.id !== action.payload);
                console.log(data,"=====");
            return {
                ...state,
                carts:data,
            };

        default:
            return state;
    }
}

export const wishlistreducer = (state=initial_state,action) =>{
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlist:[...state.wishlist,action.payload]
            }
        case "REMOVE_TO_WISHLIST":
                const wishlists = state.wishlist.filter((el)=>el.id !== action.payload);
                // console.log(data,"=====");
            return {
                ...state,
                wishlist:wishlists,
            };

        default:
            return state;
    }
}