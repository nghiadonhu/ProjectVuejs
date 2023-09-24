<template>
    <p style="text-align: center;font-size: 50px; text-transform: uppercase;"> đăng ký</p>
    <ProductTK :errors="errors" />
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
                <form @submit.prevent="save()" class="signin-form">
                    <div style="margin-bottom: 27px;" class="form-group">
                        <input type="text" v-model="product.username" @blur="validate()" class="form-control"
                            v-bind:class="{ 'is-invalid': errors.username }" placeholder="username" required>

                    </div>
                    <div style="float:left" v-if="errors.username">{{ errors.username }}</div>
                    <div class="form-group">
                        <input id="password-field" type="password" class="form-control" placeholder="Password"
                            v-model="product.password" @blur="validate()" v-bind:class="{ 'is-invalid': errors.password }"
                            required>

                        <span toggle="#password-field" class="fa fa-fw field-icon toggle-password"></span>
                    </div>
                    <div style="float:left" v-if="errors.password">{{ errors.password }}</div>

                    <div class="form-group">
                        <input id="confirm-password-field" type="password" class="form-control"
                            placeholder="Nhập lại Password " v-model="product.password2" @blur="validate()"
                            v-bind:class="{ 'is-invalid': errors.password2 }" required>

                        <span toggle="#password-field" class="fa fa-fw field-icon toggle-password"></span>
                    </div>
                    <div style="float:left" v-if="errors.password2">{{ errors.password2 }}</div>

                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary submit px-3">Đăng ký</button>
                    </div>
                    <div class="form-group d-md-flex">
                        <div class="w-50">
                            <label class="checkbox-wrap checkbox-primary">Remember Me
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="w-50 text-md-right">
                            <a href="#" style="color: #fff">Forgot Password</a>
                        </div>
                    </div>
                </form>
                <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                <div class="social d-flex text-center">
                    <a href="#" class="px-2 py-2 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span>
                        Facebook</a>
                    <a href="#" class="px-2 py-2 ml-md-1 rounded"><span class="ion-logo-twitter mr-2"></span>
                        Twitter</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductTK from "@/components/ProductTK.vue";
import { message } from 'ant-design-vue';
export default {
    name: 'ProductDangKy',
    data() {
        return {
            errors: {
                username: '',
                password: '',
                password2: '',
            },

            product: {
                username: '',
                password: '',
                password2: '',
            }
        }
    },
    methods: {

        validate() {
            this.errors = {
                username: '',
                password: '',
                password2: '',
            }
            // if (!this.product.username) {
            //     this.errors.username = 'Vui lòng nhập username';
            // }
            // if (this.product.password !== this.product.password2) {
            //  this.errors.password2 = "Mật khẩu khổng giống nhau";
            // }
            // else if (!this.product.password) {
            //     this.errors.password = 'Vui lòng nhập password';
            // } else if (this.isCheckPassword(this.product.password)===true) {
            //     this.errors.password = 'Mật khẩu ko đúng định dạng';
            // }
            if (!this.product.username) {
                this.errors.username = 'Vui lòng nhập username';
            }
            if (this.product.password !== this.product.password2) {
                this.errors.password2 = "Mật khẩu không giống nhau";
            }
            if (!this.product.password) {
                this.errors.password = 'Vui lòng nhập password';
            } else if (this.isCheckPassword(this.product.password) === true) {
                this.errors.password = 'Mật khẩu không đúng định dạng';
            }

            // Trả về true nếu không có lỗi, ngược lại trả về false
            return Object.values(this.errors).every(error => error === '');

        },
        isCheckPassword(password) {
            // Độ dài tối thiểu
            if (password.length < 3) {
                return true; // Mật khẩu quá ngắn
            }

            if (password.length > 12) {
                return true; // Mật khẩu quá dài
            }
            // Kiểm tra ký tự đặc biệt (ví dụ: !@#$%^&*)
            if (/[@#$%^&* ]/.test(password)) {
                return true; // Không có ký tự đặc biệt
            }

            return false; // Mật khẩu hợp lệ
        },
        save() {
            // this.validate()
            // console.log(this.errors)
            // console.log(this.product)

            if (!this.validate()) {

                return;
            }

            this.$request.post('http://localhost:8000/api/Users', this.product).then(res => {
                console.log(res.data)
                message.success("Đăng ký thành công");
                this.$router.push({ name: 'productlist' })
            })
        }
    },
    components: {
        ProductTK
    }

}
</script>