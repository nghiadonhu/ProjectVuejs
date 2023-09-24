<template>
    <div>
        <TheHeader />
        <TheNav />

        <section class="main">
            <div class="row">
                <div class="col-8 col-s-12 padding-form">
                    <div class="title">THÔNG TIN THANH TOÁN</div>
                    <div class=note>(<span>*</span>) Bắt buộc</div>
                    <form @submit.prevent="save()">
                        <div class="row">
                            <div class="col-12 col-s-12">
                                <label for="txt_hoten">Họ tên: <span>*</span></label><br>
                                <input type="text" v-model="product.HoTen" @blur="validate()"
                                    v-bind:class="{ 'is-invalid': errors.HoTen }" id="txt_hoten">

                            </div>

                        </div>
                        <div v-if="errors.HoTen">{{ errors.HoTen }}</div>
                        <div class="row">
                            <div class="col-12 col-s-12">
                                <label for="txt_sdt">Số điện thoại: <span>*</span></label><br>
                                <input type="text" id="txt_sdt" v-model="product.Sdt" @blur="validate()"
                                    v-bind:class="{ 'is-invalid': errors.Sdt }">
                            </div>
                        </div>
                        <div v-if="errors.Sdt">{{ errors.Sdt }}</div>
                        <div class="row">
                            <div class="col-12 col-s-12">
                                <label for="txt_diachi">Địa chỉ: <span>*</span></label><br>
                                <textarea id="txt_diachi" @blur="validate()" v-bind:class="{ 'is-invalid': errors.DiaChi }"
                                    v-model="product.DiaChi" cols="135" rows="1"></textarea>
                            </div>
                        </div>
                        <div v-if="errors.DiaChi">{{ errors.DiaChi }}</div>
                        <div class="row">
                            <div class="col-12 col-s-12">
                                <label for="txt_email">Email: <span>*</span></label><br>
                                <input type="text" v-model="product.email" @blur="validate()"
                                    v-bind:class="{ 'is-invalid': errors.email }" id="txt_email">

                            </div>

                        </div>
                        <div v-if="errors.email">{{ errors.email }}</div>
                        <div class="row">
                            <div class="col-12 col-s-12">
                                <label for="txt_ghichu">Ghi chú:</label><br>
                                <textarea id="txt_ghichu" v-model="product.GhiChu" cols="135" rows="1"></textarea>
                            </div>
                        </div>
                        <div class="row pay">
                            <div class="col-12 col-s-12" style="text-align: left;">
                                <button type="submit">ĐẶT HÀNG</button>
                            </div>
                        </div>
                        <div class="row pay">
                            <form action="#" method="POST">
                                <div class="payments">
                                    <input type="radio" id="tienmat" name="payments" value="tm" class="radio-payments">
                                    <label for="tienmat" class="label-payments">Thanh toán tiền mặt khi nhận hàng (tiền mặt
                                        /
                                        quẹt thẻ ATM, Visa, Master)</label>
                                </div>
                                <div class="payments">
                                    <input type="radio" id="chuyenkhoan" name="payments" value="ck" class="radio-payments">
                                    <label for="chuyenkhoan" class="label-payments">Thanh toán qua chuyển khoản qua tài
                                        khoản
                                        ngân hàng (khuyên dùng)</label>
                                    <input type="text" id="stk" placeholder="Nhập số tài khoản ngân hàng..."
                                        style="margin-top: 10px;">
                                </div>
                            </form>
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
                    <div class="row trace">
                        <div class="col-6 col-s-12" style="text-align: left;">
                            <label>Tổng tiền:</label>
                        </div>
                        <div class="col-6 col-s-12" style="text-align: right;">
                            <label id="tt">{{ tongtien }}</label>đ
                        </div>
                    </div>
                    <!-- <div class="row pay">
                        <div class="col-12 col-s-12" style="text-align: left;">
                            <button type="submit">ĐẶT HÀNG</button>
                        </div>
                    </div> -->
                    <!-- <div class="row pay">
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
                    </div> -->
                </div>
            </div>

        </section>

        <TheFooter />
    </div>
</template>
<script>

import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
import { mapState } from 'vuex';
import { message } from 'ant-design-vue';


export default {
    name: 'CheckOut',
    data() {
        return {

            errors: {
                HoTen: '',
                Sdt: '',
                DiaChi: '',
                email: '',

            },

            product: {
                HoTen: '',
                Sdt: '',
                DiaChi: '',
                email: '',
                products: [],
            }
        };
    },
    components: {
        TheHeader,
        TheNav,
        TheFooter,
    },
    computed: {
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
    created() {

        this.CreatCheckOut();
    },
    methods: {
        validate() {
            let check = true
            this.errors = {
                HoTen: '',
                Sdt: '',
                DiaChi: '',
                email: ''
            }
            if (!this.product.HoTen) {
                this.errors.HoTen = 'Vui lòng nhập họ tên';
                check = false
            }
            if (!this.product.Sdt) {
                this.errors.Sdt = 'Vui lòng nhập số điện thoại';
                check = false
            } else if (!this.isNumber(this.product.Sdt)) {
                this.errors.Sdt = 'Vui lòng nhập số';
                check = false
            }
            if (!this.product.DiaChi) {
                this.errors.DiaChi = 'Vui lòng nhập địa chỉ';
                check = false
            }
            if (!this.product.email) {
                this.errors.email = 'Vui lòng nhập email';
                check = false
            }
            return check

        },

        CreatCheckOut() {
            this.cartItems.forEach((cartItem) => {
                const product = {
                    name: cartItem.product.name,
                    price: cartItem.product.price,
                    description: cartItem.product.description
                };
                this.product.products.push(product);
            });
        },

        isNumber(value) {
            return /^\d*$/.test(value);
        },
        save() {
            if (!this.validate()) {

                return;
            }
            this.$request.post('http://localhost:8000/api/DonHang', this.product).then(res => {
                console.log(res.data)
                this.clearCart();
                message.success("Thanh toán thành công");
                const taoTK = {
                    username: this.product.email, // Sử dụng email làm tên người dùng
                    password: this.product.email, // Sử dụng email làm mật khẩu
                    name: "User"
                    // Các thông tin khách hàng khác nếu cần
                };

                this.$request.post('http://localhost:8000/api/Users', taoTK).then(res => {
                    console.log(res.data);
                    // Chuyển hướng hoặc thực hiện các tác vụ khác sau khi tạo tài khoản
                }).catch(error => {
                    console.error('Lỗi khi tạo tài khoản khách hàng', error);
                    // Xử lý lỗi khi tạo tài khoản
                });
                this.$router.push({ name: 'IndexNgDung' })
            })
        },
        clearCart() {
            this.$store.commit('clearCart');
            this.cartEmpty = true;
        },

    },


};
</script>
  
  