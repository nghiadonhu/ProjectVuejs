<template>
    <div class="product-list">
     <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="display-4">Product Management</h2>
    <p> <router-link to="/products/create">Add new</router-link></p>
  </div>

  <div class="container">
    <div class="card-deck mb-3 text-center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
            <th scope="col">Sửa</th>
            <th scope="col">Xóa</th>
            <th scope="col">Xem</th>
          </tr>
        </thead>
        <tbody >
          <tr :key="index" v-for="(product,index) in products">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.decscription }}</td>
          
            <td>
              <router-link :to="{name :'productedit',params:{id:product.id}}">
              <button class='btn btn-warning fa fa-pencil'> Sửa</button>
            </router-link>
            </td>
         
            <td> 
             
              <button class='btn btn-danger fa fa-trash' onclick="return confirm('Bạn có muốn xóa không?')"  @click="onDelete(product.id)" >Xóa</button>
            </td>
            <td><a href="" class='btn btn-success fa fa-pencil'>Xem</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'ProductForm',
  data() {
      return {
          
          products:[]
      }
  },
  created(){
    console.log('OK');
    this.getAll()
  },
  // chạy đầu tiên trong toàn bộ compo lừn
  // mỗi lần created tạo ra 1 method
  methods: {
    getAll() {
    this.$request.get('http://localhost:8000/api/products').then(res=>{
      console.log(res.data)
      this.products=res.data
    })
    },
    onDelete(id){
      this.$request.delete(`http://localhost:8000/api/products/${id}`).then(res=>{
      console.log(res.data)
      this.getAll()
    })
    }
  },
}
  </script> 

  