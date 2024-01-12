export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((t_amount, item) => item.price + t_amount, 0);
  //intial amaount is 0

const reducer = (state, action) => {
  console.log("This is Action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
        user:null
      };

    case "REMOVE_FROM_BASKET":
      console.log("remove")
      // Find the index of the item to be removed in the current basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // Create a new array `newBasket` as a copy of the current basket
      let newBasket = [...state.basket];

       // Check if the item to be removed exists in the basket
      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log(index);
        // If it exists, remove the item from the `newBasket` using splice
      } else {
        // If the item doesn't exist in the basket, log a warning
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      // Return a new state object with the updated basket
      return{
        ...state,
        // ...state spreads the properties of the existing state object into the new object being created. This means that all properties of the current state are included in the new object
        basket:newBasket
      }

      case "SET_USER":
        return {
        ...state,
        user:action.user
        };

    default:
      return state;
  }
};

export default reducer;
