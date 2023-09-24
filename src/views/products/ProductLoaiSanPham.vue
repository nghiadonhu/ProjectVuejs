<template>
  <h2 class="display-4">Quản lý Loại SP</h2>
    <ProductAdmin :message="messageFromParent"/>
    
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

  
  </template>
  <script>
  import ProductAdmin from "@/components/ProductAdmin.vue";
  import 'bootstrap/dist/css/bootstrap.css';

  export default {
    name:'ProductLoaiSP',
    data() {
        return {
            
            products:[],
            messageFromParent: "Dữ liệu từ Component Cha"
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
    components:{
        ProductAdmin
    }
    
  }
    </script> 
  
    