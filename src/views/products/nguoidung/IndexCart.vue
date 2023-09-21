<template>
  <div>
    <TheHeader />
    <TheNav />
    <p v-if="cartEmpty" style="font-size: 30px;margin: 30px;text-align: center;">Giỏ hàng không có sản phẩm</p>

    <div class="content" v-else>
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
                <td><button @click="showDelete(item.product.id)">Xóa</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Tổng cộng: {{ tongtien }} đ</p>
        <p>Tổng số sản phẩm: {{ tongsoluong }}</p>
        <button @click="showDeleteConfirm">Xóa tất cả giỏ hàng</button>

        <button style="background-color: blue;">Thanh toán</button>

      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';


export default {
  name: 'IndexCart',
  data() {
    return {
      cartEmpty: false,
    };
  },
  components: {
    TheHeader,
    TheNav,
    TheFooter,
  },
  computed: {
    // cartItems() {
    //   const items = this.$store.state.cartItems;
    //   console.log('Dữ liệu cartItems:', items);
    //   return items;
    // },
    ...mapState(['cartItems']),
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
      this.$store.commit('XoaCart', productId);

      // Kiểm tra nếu giỏ hàng trống sau khi xóa sản phẩm
      const cartIsEmpty = this.$store.state.cartItems.length === 0;

      // Cập nhật this.cartEmpty
      this.cartEmpty = cartIsEmpty;
    },


    showDelete(productId) {
      Modal.confirm({
        title: 'Xóa 1 sản phẩm',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Bạn có muốn xóa sản phẩm này không?',
        okText: 'Có',
        okType: 'danger',
        cancelText: 'Không',
        onOk: () => {
          this.XoaCart(productId);
        },
        onCancel: () => {
          console.log('Không xóa sản phẩm');
        },
      });
    },



    showDeleteConfirm() {
      Modal.confirm({
        title: 'Xóa tất cả giỏ hàng',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Bạn có muốn xóa tất cả giỏ hàng không?',
        okText: 'Có',
        okType: 'danger',
        cancelText: 'Không',
        onOk: () => {
          this.clearCart();
        },
        onCancel: () => {
          console.log('Không xóa giỏ hàng');
        },
      });
    },
    //dispatch
    clearCart() {
      this.$store.commit('clearCart');
      this.cartEmpty = true;
    },

    updateCart(productId, newQuantity) {
      this.$store.commit('updateCart', { productId, quantity: newQuantity });


    },
  },
};
</script>

