<template>
    <div>
      <TheHeader />
      <TheNav />

      <section class="main">
        <div class="row">
            <div class="col-8 col-s-12 padding-form">
                <div class="title">THÔNG TIN THANH TOÁN</div>
                <div class=note>(<span>*</span>) Bắt buộc</div>
                <form action="#" onsubmit="return DatHang()" method="post">
                    <div class="row">
                        <div class="col-12 col-s-12">
                            <label for="txt_hoten">Họ tên: <span>*</span></label><br>
                            <input type="text" id="txt_hoten">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-s-12">
                            <label for="txt_sdt">Số điện thoại: <span>*</span></label><br>
                            <input type="text" id="txt_sdt">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-s-12">
                            <label for="txt_email">Email:</label><br>
                            <input type="text" id="txt_email">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-s-12">
                            <label for="txt_diachi">Địa chỉ: <span>*</span></label><br>
                            <textarea id="txt_diachi" cols="135" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-s-12">
                            <label for="txt_ghichu">Ghi chú:</label><br>
                            <textarea id="txt_ghichu" cols="135" rows="1"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-4 col-s-12 padding-form">
                <div class="title">ĐƠN HÀNG</div>
                <div class="row pay" style="border-bottom: 3px solid #dbdbdb;">
                    <div class="col-6 col-s-12" style="text-align: left;">
                        <label>Sản phẩm</label>
                    </div>
                    <div class="col-6 col-s-12" style="text-align: right;padding-left:350px ;">
                        <label>Tổng</label>
                    </div>
                </div>
                <div id="spham"></div>
                <div v-for="(item, index) in cartItems" :key="index" class="row pay">
                    <div class="col-6 col-s-12" style="text-align: left;">
                        <label>{{ item.product.name }}</label>
                    </div>
                    <div class="col-6 col-s-12" style="text-align: right;padding-left:310px ;">
                        <label>{{ item.product.price }}</label>
                    </div>
                </div>
                <!-- <div class="row pay">
                    <div class="col-6 col-s-12" style="text-align: left;">
                        <label>Sản phẩm 1 * 1</label>
                    </div>
                    <div class="col-6 col-s-12" style="text-align: right;padding-left:310px ;">
                        <label>700,000đ</label>
                    </div>
                </div> -->
                <div class="row trace">
                    <div class="col-6 col-s-12" style="text-align: left;">
                        <label>Tổng tiền:</label>
                    </div>
                    <div class="col-6 col-s-12" style="text-align: right;">
                        <label id="tt">{{ tongtien }}</label>đ
                    </div>
                </div>
                <div class="row pay">
                    <div class="col-12 col-s-12" style="text-align: left;">
                        <button onclick="DatHang()">ĐẶT HÀNG</button>
                    </div>
                </div>
                <div class="row pay">
                    <form action="#" method="POST">
                        <div class="payments">
                            <input type="radio" id="tienmat" name="payments" value="tm" class="radio-payments">
                            <label for="tienmat" class="label-payments">Thanh toán tiền mặt khi nhận hàng (tiền mặt /
                                quẹt thẻ ATM, Visa, Master)</label>
                        </div>
                        <div class="payments">
                            <input type="radio" id="chuyenkhoan" name="payments" value="ck" class="radio-payments">
                            <label for="chuyenkhoan" class="label-payments">Thanh toán qua chuyển khoản qua tài khoản
                                ngân hàng (khuyên dùng)</label>
                            <input type="text" id="stk" placeholder="Nhập số tài khoản ngân hàng..."
                                style="margin-top: 10px;">
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    </section>
        <!-- <div class="content" >
       
  
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
  
        </div> -->
      <!-- </div> -->
      <TheFooter />
    </div>
  </template>
  <script>

  import TheHeader from "@/components/TheHeader.vue";
  import TheNav from "@/components/TheNav.vue";
  import TheFooter from "@/components/TheFooter.vue";
  import { mapState } from 'vuex';
  
  
  export default {
    name: 'CheckOut',
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

    


    
    
   

    
  },
    
  };
  </script>
  
  