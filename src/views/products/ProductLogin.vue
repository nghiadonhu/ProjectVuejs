<template>
      <ProductTK/>
      <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="login-wrap p-0">
                        <h3 class="mb-4 text-center">Have an account?</h3>
                        <form @submit.prevent="save()" class="signin-form">
                            <div class="form-group">
                                <input type="text"
                                v-model="product.username"
                                @blur="validate()"
                                class="form-control" placeholder="Username" required>
                                <div style="float:left" v-if="errors.username">{{ errors.username }}</div>
                            </div>
                            <div class="form-group">
                                <input id="password-field"
                                 type="password" class="form-control" placeholder="Password"
                                 v-model="product.password"
                                 @blur="validate()"
                                    required>
                                <div style="float:left" v-if="errors.password">{{ errors.password }}</div>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>

                            
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
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
export default {
    name: 'ProductLogin',
    props: {
      msg: String
    },
    data() {
        return {
            errors: {
                username: '',
                password: '',
            },

            product: {
                username: '',
                password: '',
            }
        }
    },
    methods: {

        validate() {
            this.errors = {
                username: '',
                password: '',
            }
            if (!this.product.username) {
                this.errors.password = 'Vui lòng nhập username';
            }
            if (!this.product.password) {
                this.errors.password = 'Vui lòng nhập password1';
            } 
            else if (this.isCheckPassword(this.product.password)===false) {
                this.errors.password = 'Vui lòng nhập mật khẩu dưới 10 kí tự';
            }

        },
        isCheckPassword(password) {
            // Kiểm tra độ dài của mật khẩu
            if (password.length > 10) {
                return false; // Mật khẩu quá dài
            }
            return true; // Mật khẩu hợp lệ
        },
        save() {
            this.validate()
            console.log(this.errors)
            console.log(this.product)
        }
    },
    components:{
        ProductTK
    }
    

}

</script>