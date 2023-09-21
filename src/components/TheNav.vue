<template>
     <nav>
            <ul class="menu">
                <!-- <div onclick="toggleMenu()" class="chucnang">
                    <i style="color: white;padding-left: 12px;" class="fa-solid fa-bars"></i>
                </div>
                -->
                <!-- background-color: #dd3333; -->
                <li class="dropdown">
                    <i style="color: white;padding-left: 12px;" class="fa-solid fa-bars"></i>
                    <a href="#">Danh mục sản phẩm</a>
    
                </li>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Sản phẩm</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Hỗ trợ khách hàng</a></li>
                <li><a href="#">Liên hệ</a></li>
    
            
                <li class="cart">
    
                    <span style="padding-left: 15px;color: white;" class="quanlity"> {{ tongsoluong }}</span>
                    <i style="padding-left: 5px;color: white;" class="fa-solid fa-bag-shopping"></i>
    
                </li>
            </ul>
            
        </nav>
</template>
<script>


export default {
    name: 'TheNav',
    props: {
      msg: String
    },
    computed: {
      tongsoluong() {
      const items = this.$store.getters.tongsoluong;
      console.log('Tổng số sản phẩm', items);
      return items;
    
    },
  },
   
    
    

}

</script>