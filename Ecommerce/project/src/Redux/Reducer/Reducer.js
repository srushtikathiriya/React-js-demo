const initial_state={
    carts : [],
    wishlist:[],
    quantities: [],
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
            // case "INCREASE_CART_COUNT" : {
            //     let updatedCartList = state.carts.map(item => {
            //         if (item.id === action.payload.id) {
            //             return {
            //                 ...item,
            //                 quantity: item.quantity + 1
            //             };
            //         }
            //         return item;
            //     })
            //     return {
            //         ...state,
            //         carts: updatedCartList
            //     };
            // }
            // case "DECREASE_CART_COUNT" : {
            //     let updatedCartList = state.carts ;
            //     if(action.payload.quantity !== 1){
            //         updatedCartList = state.carts.map(item => {
            //             if (item.id === action.payload.id) {
            //                 return {
            //                     ...item,
            //                     quantity: item.quantity - 1
            //                 };
            //             }
            //             return item;
            //         });
            //     }
            //     return {
            //         ...state,
            //         carts: updatedCartList
            //     };
    
            // }

            case "UPDATE_QUANTITY":
                return {
                    ...state,
                    quantities: {
                        ...state.quantities,
                        [action.payload.id]: action.payload.quantity
                    }
                }
    

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