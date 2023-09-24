<template>
<div class="product-form">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-5">Product Infomation</h3>
            <router-link to="/products">Back</router-link>
        </div>
        <div class="container">
            <div class="product-form">
                <form @submit.prevent="save()">
                
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="product.name" @blur="validate()"
                                v-bind:class="{ 'is-invalid': errors.name }" />
                           
                            <div style="float:left" v-if="errors.name">{{ errors.name }}</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Product price</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="product.price" @blur="validate()"
                                v-bind:class="{ 'is-invalid': errors.price }" />
                            <div style="float:left" v-if="errors.price">{{ errors.price }}</div>
                        </div>

                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Product description</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" rows="3" v-model="product.decscription" @blur="validate()"
                                v-bind:class="{ 'is-invalid': errors.decscription }"></textarea>
                            <div style="float:left" v-if="errors.decscription">{{ errors.decscription }}</div>
                        </div>

                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                        <div class="col-sm-9">
                            <button type="submit" class="btn btn-primary">Save</button> &nbsp;
                            <button type="reset" class="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  export default {
    name: 'ProductAll',
    props: {
      msg: String
    },
    data() {
        return {
            errors: {
                name: '',
                price: '',
                decscription: '',
            },

            product: {
                name: '',
                price: '',
                decscription: '',
            }
        }
    },
    created() {
        let id = this.$route.params.id
        console.log(id)
        if (id) {
            this.getbyid(id)
        }
    },
    methods: {
        validate() {
            let check = true
            this.errors = {
                name: '',
                price: '',
                decscription: '',
            }
            if (!this.product.name) {
                this.errors.name = 'Vui lòng nhập name';
                check = false
            }
            if (!this.product.price) {
                this.errors.price = 'Vui lòng nhập price';
                check = false
            } else if (!this.isNumber(this.product.price)) {
                this.errors.price = 'Vui lòng nhập số';
                check = false
            }
            if (!this.product.decscription) {
                this.errors.decscription = 'Vui lòng nhập decscription';
                check = false
            }
            return check

        },
       
        isNumber(value) {
            return /^\d*$/.test(value);
        },
        save() {
            if(this.product.id){
                this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res => {
                console.log(res.data)
                this.$router.push({ name: 'productlist' })
            })
                return;
            }

            if (this.validate()) {
                console.log(this.product)
            }

            this.$request.post('http://localhost:8000/api/products', this.product).then(res => {
                console.log(res.data)
                this.$router.push({ name: 'productlist' })
            })
        },
        getbyid(id) {
        this.$request.get(`http://localhost:8000/api/products/${id}`).then(res => {
            this.product = res.data
        })
    }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  