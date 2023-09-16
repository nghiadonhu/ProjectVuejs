const localStoragePlugin = store => {
    store.watch(
      (state) => state.cartItems,
      (cartItems) => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      },
      { deep: true } 
    );
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      store.commit('setCartItems', JSON.parse(cartItems));
    }
  };
  
export default localStoragePlugin;
  