import { createStore } from 'vuex';
import localStoragePlugin from './store/localStoragePlugin'; 


export default createStore({
  state: {
    cartsoluong: 0, 
    cartItems: [],
  },
  mutations: {
   
    numbercart(state) {
      state.cartsoluong++;
    },
   
    addToCart(state, product) {
    
      const checkcart = state.cartItems.find(item => item.product.id === product.id);

      if (checkcart) {
        checkcart.quantity++;
        console.log('ok', state.cartItems);
        window.confirm("Sản phẩm đã có trong giỏ hàng");
      } else {
        state.cartItems.push({ product, quantity: 1 });
        console.log('oke', state.cartItems);
        window.confirm("Sản phẩm đã được thêm vào giỏ hàng");
      }
      
    },
    
    setCartItems(state, cartItems) {
      state.cartItems = cartItems;
    },
  
    XoaCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.product.id !== productId);
    },

    updateCart(state, luutru) {
      const { productId, quantity } = luutru;
      const cartItem = state.cartItems.find(item => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
  getters: {
    tongsoluong(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
   
    tongtien(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
    },
  },
  actions: {
    // updateCart({ commit }, payload) {
    //   commit('updateCart', payload);
    // },

    // clearCart({ commit }) {
    //   commit('clearCart');
    // },
  },
  plugins: [localStoragePlugin], 
});




//sửa chữ
// const store = createStore({
//   state: {
//     message: 'Hiep'
//   },
//   mutations: {
//     setMessage(state, newMessage) {
//       state.message = newMessage;
//     }
//   },
//   actions: {
//     changeMessage({ commit }, newMessage) {
//       commit('setMessage', newMessage);
//     }
//   },
//   getters: {
//     getMessage: state => state.message
//   }
// });

// export default store;





