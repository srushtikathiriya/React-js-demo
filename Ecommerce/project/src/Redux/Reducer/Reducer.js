const initial_state={
    carts : []
}
export const cartreducer = (state=initial_state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
            case "REMOVE_FROM_CART":
                const data = state.carts.filter((el)=>el.value.id !== action.payload);
                console.log(data,"================================");
            return {
                ...state,
                carts:data
            }
            default:
                return state;
    }
}