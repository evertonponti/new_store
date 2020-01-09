export function addItemToCart(product) {
    return {
      type: '@cart/ADD_ITEM',
      product,
    };
  }
  
  export function removeItem(id) {
    return {
      type: '@cart/REMOVE_ITEM',
      id,
    };
  }

  export function updateAmount(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT',
      id,
      amount,
    };
  }