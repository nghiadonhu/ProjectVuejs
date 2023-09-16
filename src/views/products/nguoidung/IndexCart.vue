<template>
  <div>
    <TheHeader />
    <TheNav />
    <div class="content">
      <!-- Hiển thị giỏ hàng -->
      <div class="carts">
        <h2>Giỏ hàng</h2>
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
              <td>{{ item.quantity }}</td>
              <td>{{ item.product.price }} đ</td>
              <td>{{ item.quantity * item.product.price }} đ</td>
              <td><button @click="XoaCart(item.product.id)">Xóa</button></td>
            </tr>
          </tbody>
        </table>
        <p>Tổng cộng: {{ tongtien }} đ</p>
        <p>Tổng số sản phẩm: {{ tongtien }}</p>
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
  },
};
</script>

