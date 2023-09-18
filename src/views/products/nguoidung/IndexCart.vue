<template>
  <div>
    <TheHeader />
    <TheNav />
    <div class="content">
      <!-- Hiển thị giỏ hàng -->
      <div class="carts">
        <h2>Giỏ hàng</h2>
        <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng cộng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td>{{ item.product.name }}</td>
              <td>
                <input type="number" v-model="item.quantity" @change="updateCart(item.product.id, item.quantity)"
                  min="1" max="99" />
              </td>
              <td>{{ item.product.price }} đ</td>
              <td>{{ item.quantity * item.product.price }} đ</td>
              <td><button @click="XoaCart(item.product.id)">Xóa</button></td>
            </tr>
          </tbody>
        </table>
      </div>
        <p>Tổng cộng: {{ tongtien }} đ</p>
        <p>Tổng số sản phẩm: {{ tongtien }}</p>
        <button @click="checkxoacart">Xóa tất cả giỏ hàng</button>

      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>

import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: 'IndexCart',
  components: {
    TheHeader,
    TheNav,
    TheFooter,
  },
  computed: {
    cartItems() {
      const items = this.$store.state.cartItems;
      console.log('Dữ liệu cartItems:', items);
      return items;
    },
    tongtien() {
      const price = this.$store.getters.tongtien;
      console.log('Tổng giá', price);
      return price;
    },
    tongsoluong() {
      const items = this.$store.getters.tongsoluong;
      console.log('Tổng số sản phẩm', items);
      return items;
    },
  },
  methods: {

    XoaCart(productId) {
      console.log('ok', productId);
      this.$store.commit('XoaCart', productId);
    },
    checkxoacart() {
      const checkxoa = window.confirm("Bạn có muốn xóa tất cả giỏ hàng không?");

      if (checkxoa) {

        this.clearCart();
      }
    },
    //dispatch
    clearCart() {
      this.$store.commit('clearCart');
    },

    updateCart(productId, newQuantity) {
      this.$store.commit('updateCart', { productId, quantity: newQuantity });


    },
  },
};
</script>

