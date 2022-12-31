
export const initialState = {
  basket: [{
    id:"455",
    title:"dsfdff",
    price:"23",
    rating:"sff",
    image:""
  },
  {
    id:"33324",
    title:"32434",
    price:"34",
    rating:"32234",
    image:""
  }
  ],
  user: null
};

// Selector
// export const getBasketTotal = (basket) => 
//   basket?.reduce((amount, item) => item.price + amount, 0);

  const reducer = (state, action) => {
  console.log(">>>>> ",action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case 'EMPTY_BASKET':
      return {

        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;