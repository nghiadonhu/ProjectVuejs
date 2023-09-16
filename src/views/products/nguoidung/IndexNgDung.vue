<template>
    <!-- <IndexUser/> -->
    
            <TheHeader/>
            <TheNav/>
            <div class="container">
                <div class="menuleft">
                    <ul>
                        <li class="dropdown">
                            <a href="#">laptop mới</a>
                            <ul class="submenu">
                                <li><a href="#">CSS Text</a></li>
                                <li><a href="#">CSS Fonts</a></li>
                                <li><a href="#">Icons</a></li>
                            </ul>
                        </li>
                        <li><a href="#" @click="getAllLoai('xWbk1Ck9-ba7uQZZiFxpL')">laptop cũ</a></li>
                        <li><a href="#">linh kiện máy in</a></li>
                        <li><a href="#">linh kiện laptop</a></li>
                        <li><a href="#">linh kiện pc</a></li>
                        <li><a href="#">thiết bị mạng</a></li>
                        <li><a href="#">surface</a></li>
                        <li><a href="#">macbook</a></li>
                        <li><a href="#">máy in</a></li>
                        <li><a href="#">camera</a></li>
                        <li><a href="#">thiết bị ngoại vi</a></li>
                        <li><a href="#">bàn - ghế gaming</a></li>
                    </ul>
                </div>
                <div class="slide">
                    <img id="hinh1" src="https://www.sieuthimaytinhlangson.com/uploads/sliders/1682581936.png" alt="">
                    <div class="dieuhuong">
                        <i class="dieu trai" onclick="prev()">
                          <i class="fa-solid fa-circle-arrow-left"></i> </i>
                                <i class="dieu phai" onclick="next()"> <i class="fa-solid fa-circle-arrow-right"></i> </i>
                    </div>
                    <div class="sanpham">
                        <p>Thiết bị mạng</p>
                    </div>
                    <hr>
        
                    <div class="content">
                        <div class="item" :key="index" v-for="(product,index) in products">
                            <img src="https://www.sieuthimaytinhlangson.com/storage/uploads/products/05032023/RkDAEA7XyhCIP4a.JPG"
                                alt="">
                            <p>{{ product.name }}</p>
                            <div style="float: right;margin-bottom: 10px;">
                                <span>{{ product.price }}</span><br>
                                <span>Sẵn hàng</span>
                            </div>
                            <button @click="addToCart(product)">Thêm vào giỏ hàng</button>
                        </div>
        
                        <!-- <div class="item">
                            <img src="https://www.sieuthimaytinhlangson.com/storage/uploads/products/08032023/8ZHcdTXOwAkGRpn.jpg"
                                alt="">
                            <p>Bộ kích sóng wifi TP-Link TL-WR850RE</p>
                            <div style="float: right;margin-bottom: 10px;">
                                <span>350,000 đ</span><br>
                                <span>Sẵn hàng</span>
                            </div>
                        </div>
        
                        <div class="item">
                            <img src="https://www.sieuthimaytinhlangson.com/storage/uploads/products/08032023/b4j7vS0BKUKwrhQ.jfif"
                                alt="">
                            <p>Bộ phát wifi TP-Link TL-WR940N Wireless N</p>
                            <div style="float: right;margin-bottom: 10px;">
                                <span>750,000 đ</span><br>
                                <span>Sẵn hàng</span>
                            </div>
                        </div>
        
                        <div class="item">
                            <img class="imgvip" 
                                src="https://www.sieuthimaytinhlangson.com/storage/uploads/products/06032023/DhQVYUWk63knD9a.JPG"
                                alt="">
                            <p>TPLink 840N Wi-Fi tốc độ 300Mbps</p>
                            <div style="float: right; margin-bottom: 10px;">
                                <span>350,000 đ</span><br>
                                <span>Sẵn hàng</span>
                            </div>
                        </div> -->
                    </div>
                </div>
        
            </div>
        
            <div class="contentduoi">
                <div class="listcontent">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/logo_banner/1676951970_icon-cs.png.png" alt="   ">
                    <div class="noidung">
                        <p>Giao Hàng Toàn Quốc</p>
                        <span>Nhận hàng từ 1-3 ngày</span>
                    </div>
        
                </div>
        
                <div class="listcontent">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/logo_banner/1676951970_icon-cs-2.png.png" alt="   ">
                    <div class="noidung">
                        <p>DỊCH VỤ CHUYÊN NGHIỆP</p>
                        <span>Tư vấn hỗ trợ tận tình</span>
                    </div>
                </div>
        
                <div class="listcontent">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/logo_banner/1676951970_icon-cs-3.png.png" alt="   ">
                    <div class="noidung">
                        <p>HOTLINE 08 888 03 999</p>
                        <span>Kỹ thuật: 083 84 85 888</span>
                    </div>
                </div>
        
                <div class="listcontent">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/logo_banner/1677836417_1676951970_icon-cs-4.png.png.png"
                        alt="   ">
                    <div class="noidung">
                        <p>BẢO ĐẢM CHẤT LƯỢNG</p>
                        <span>Sản phẩm chính hãng, có VAT</span>
                    </div>
                </div>
        
            </div>
            <div class="panner">
                <div class="pannerimg">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/brands/1676881120_logo.jpg" alt="">
                </div>
        
                <div class="pannerimg">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/brands/1676881168_logo.jpg" alt="">
                </div>
        
                <div class="pannerimg">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/brands/1676881181_logo.jpg" alt="">
                </div>
        
                <div class="pannerimg">
                    <img src="https://www.sieuthimaytinhlangson.com/uploads/brands/1676881202_logo.jpg" alt="">
                </div>
        
            </div>
            <TheFooter/>
          
       
    </template>
    
    <script>
    
    import TheHeader from "@/components/TheHeader.vue";
    import TheNav from "@/components/TheNav.vue";
    import TheFooter from "@/components/TheFooter.vue";
    // import IndexUser from "@/components/IndexUser.vue";
    export default {
        name: 'IndexNgDung',
        props: ['product'],
        data() {
        return {
            
            products:[],
           
        }
    },
    created(){
      console.log('OK');
      this.getAll()
    },
    // chạy đầu tiên trong toàn bộ compo lừn
    // mỗi lần created tạo ra 1 method
    methods: {
        addToCart(product) {
     
      this.$store.commit('numbercart');
      this.$store.commit('addToCart', product);

    },
      getAll() {
      this.$request.get('http://localhost:8000/api/products').then(res=>{
        console.log(res.data)
        this.products=res.data
      })
      },

      getAllLoai(id) {
      this.$request.get(`http://localhost:8000/api/products/${id}`).then(res=>{
        console.log(res.data)
        this.products=res.data
      })
      },
      
    },

    
   
       
        components:{
            TheHeader,
            TheNav,
            TheFooter,
            // IndexUser
    
        }
        
    
    }
    
    </script>