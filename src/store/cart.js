// src/store/cart.js
import { state } from 'vuex';
const state = {
    cartItems: [], // Danh sách các sản phẩm trong giỏ hàng
  };
  
  const mutations = {
    addToCart(state, product) {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++; // Tăng số lượng nếu sản phẩm đã tồn tại
      } else {
        state.cartItems.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào giỏ hàng
      }
    },
  };
  
  const actions = {
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  