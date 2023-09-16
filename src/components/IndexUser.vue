<template>
    <style>
        * {
        margin: 0;
        padding: 0;
        
        font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    }
    body{
        margin: auto;
    }
    
    header .anh img {
        width: auto;
        max-height: 80px;
        margin-left: 10%;
    }
    
    header .hotline {
    
        margin-left: 10%;
    }
    
    header .hotline a {
    
        text-decoration: none;
        font-weight: bold;
        font-family: "SEGOEUIB";
        color: #dd3333;
        margin-left: 4px;
    }
    
    header .search {
    
        margin-left: 20%;
    
    }
    
    header .search input {
    
        width: 17rem;
        height: 1.2rem;
        padding: 7px 10px;
        color: #333;
    
    }
    
    header {
        width: 92rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1f1f1f;
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
    }
    
    header .search button {
    
        border: 0;
        position: absolute;
        background: #ef233c;
        line-height: 35px;
        padding: 0 15px;
        color: white;
        border:1px solid #333;
    }
    
    header .hotline {
        font-size: 24px;
        line-height: 40px;
    }
    
    nav {
        background: #ef233c;
        height: 3.5rem;
    }
    
    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        position: relative;
    }
    
    .menu a {
        padding: 0px 7px;
        text-decoration: none;
        transition: 0.3s;
        color: #fff;
        font-size: 17px;
        line-height: 56px;
        text-transform: uppercase;
    }
    
    .menu a:hover {
    
        color: #faeb31;
    }
    
    .submenu {
        list-style: none;
        position: absolute;
        left: 10px;
        display: none;
    }
    
    .menu li:hover .submenu {
        display: block;
    }
    
    .menu img {
        max-width: 2.95rem;
        height: auto;
    }
    
    .menu .dropdown {
        margin-left: 10%;
        margin-right: 3%;
        width: 15.8%;
        background-color: #dd3333;
        
    }
    
    .menu .cart {
        margin-left: 10%;
        background-color: #dd3333;
        /* padding: 5px 5px 10px 10px; */
        /* height: 43px; */
        border-radius: 20%;
        height: 1.8rem;
        position: absolute;
        top: 15px;;
        right: 200px;
        width: 4rem;
            
    }
    
    .menu .cart span {
    
        line-height: 2 px;
        font-size: 13px;
    
    }
    
    .container {
        width: 91rem;
        height: auto;
        display: flex;
    
    }
    
    .container .menuleft {
        margin-left: 10%;
        margin-top: 1.4%;
        margin-right: 2%;
    }
    
    .container .menuleft ul li a {
    
        text-decoration: none;
        color: #333333;
    }
    
    .container .menuleft ul {
        margin-top: 1%;
        width: 14.3rem;
        list-style: none;
        border: 1px solid #ccc;
    }
    
    .container .menuleft ul li {
    
        width: 12.6rem;
        height: 1.5rem;
        border-top: 1px solid #ccc;
        padding: 14px 14px;
        text-transform: uppercase;
    }
    
    .slide img {
        margin-top: 2.29%;
        width: 59.6rem;
        height: 24.11rem;
    }
    .slide .dieuhuong{
        position: relative;
        color: #ef233c;
       
    }
    
    .slide .dieuhuong .dieu{
         position: absolute;
         
    }
    
    .slide .dieuhuong .trai{
       top: -13rem;
    }
    
    .slide .dieuhuong .phai{
        top: -13rem;
       right: 0;
        
     }
    
    .content {
        display: flex;
        width: 14.8rem;
        margin-top: 1%;
        
    }
    
    .content .item {
        width: 14.8rem;
        border: 1px solid #ccc;
    
    }
    
    .content .item img {
        width: 200px;
        max-height: 13rem;
        margin: 20px 20px 20px 20px;
        object-fit: cover;
    
    }
    
    .slide .sanpham {
        margin-top: 2%;
        display: block;
        text-transform: uppercase;
        background-color: #ef233c;
        color: #fff;
        padding: 10px 10px 10px 10px;
        font-weight: 600;
        border-top-left-radius: 12px;
        width: 13.7rem;
       
    }
    
    .slide hr {
        height: 3px;
        background: #ef233c;
        border: none;
        width: 59.6rem;
       
    }
    
    .content .item p {
        font-weight: 600;
        padding: 2px 10px 10px 10px;
    
    }
    
    .content .item span {
    
        font-weight: 600;
        color: #ef233c;
        padding: 2px 10px 10px 10px;
    
    }
    
    .contentduoi {
        display: flex;
        margin: 5% 10% 10% 5.4%;
        justify-content: space-between;
    }
    
    .contentduoi .listcontent {
        display: flex;
        align-items: center;
        padding-left: 61px;
    }
    
    .contentduoi .listcontent .noidung {
        flex-direction: column;
        margin-left: 20px;
    }
    
    .contentduoi .listcontent .noidung p {
        color: #dd3333;
        font-size: 15.2px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    
    .contentduoi .listcontent .noidung span {
        font-size: 14px;
        font-weight: 400;
    
    }
    
    .panner {
        display: flex;
        background: #2b2d42;
        /* margin-left: 10%;
        margin-right: 6.5%;
        margin-top:-7%; 
        margin-bottom: 4%; */
        margin: -7% 6.5% 4% 10%;
        width: 75.7rem;
    }
    
    .panner .pannerimg {
        /* padding-top:14px; */
        padding: 15px 1px 10px 20px;
        /* height: 100%; */
        align-items: center;
    
    }
    
    footer {
        /* width: 100%; */
        width: 92rem;
        /* width: 94rem; */
        height: auto;
        background: #e1e1e1;
    }
    
    footer .footertop {
        background: #e1e1e1;
        display: flex;
    
    }
    
    footer .footertop .footercontent {
    
        padding-left: 6.4em;
    }
    
    footer .footertop .footercontent .map {
    
        padding-top: 20px;
        padding-left: 33px;
    }
    
    
    
    footer .footertop .footercontent h3 {
        text-transform: uppercase;
        font-weight: 500;
        padding: 20px 0;
        padding-left: 10%;
        white-space: nowrap;
    
    }
    
    footer .footertop .footercontent p {
        margin-bottom: 13px;
    
    }
    
    
    
    
    footer .footertop .footercontent .nd ul li {
        list-style: none;
        margin-bottom: 13px;
        white-space: nowrap;
    }
    
    footer .footertop .footercontent .nd ul li a {
        text-decoration: none;
        color: black;
    
    }
    
    footer .footertop .footercontent .nd {
        padding-left: 10%;
        margin-top: 5%;
    }
    
    footer .footertop .hai {
        margin-left: -8rem;
    }
    
    footer .footerbottom .footercontent {
        background: #1a1c27;
        padding: 20px 0;
        border-top: 10px solid #ef233c;
        display: flex;
        justify-content: center;
    
    }
    
    
    footer .footerbottom .footercontent .menu {
        color: #bfbfbf;
        padding: 0 90px;
        font-size: 15px;
        text-transform: uppercase;
        line-height: 35px;
        flex-wrap: wrap;
        width: 40rem;
        text-align: center;
    
    }
    
    footer .footerbottom .footercontent .menu li {
    
        /* padding: 12px; */
        padding-left: 30px;
    }
    
    footer .footerbottom .footercontent .menu li p {
    
        text-align: center; 
    }
    
    
    
    footer .footerbottom .footercontent .footercontent2 {
        color: #bfbfbf;
        padding: 0 10px;
        font-size: 15px;
        line-height: 35px;
    }
    
    
    footer .footerbottom .footercontent .footercontent1 {
        width: 40rem;
    
    }
    
    footer .footerbottom .footercontent .ndduoi {
        color: #bfbfbf;
        padding: 0 10px;
        font-size: 15px;
        line-height: 35px;
        text-align: center;
    
    }
    
    footer .footerbottom .footercontent .footercontent2 img {
        margin-top: 13px;
        max-height: 80px;
    
    }
    
    footer .footerbottom .footercontent .footercontent1 img {
        max-height: 190px;
        filter: grayscale(100%) brightness(150%)
    }
    nav .menu .chucnang{
        display: none;
    }
    /* tablet */
    @media (min-width: 740px)  and (max-width: 1023px)  {
       
    }
    
    /* mobile */
    @media only screen and (max-width: 740px) {
        
        header{
            display: block;
        }
        header .search {
            position: absolute;
            margin-top: 11.3%;
        
        }
    
        header .search input {
    
            width: 10rem;
            
        
        }
    
       nav .menu li a{
         display: none; 
         background-color: #dd3333;
       }
    
        .menu .cart {
           
            top: 15px;;
            right: -90px;
           
                
        }
        nav{
            width: 27.8rem
        }
       nav .menu{
        display: block;
        /* background-color: yellow; */
        width: 20rem;
        
        
       }
    
    
       /* nav .menu li a{
        color: black;
        display: none; 
       } */
    
       nav .menu .dropdown {
        display: none;
       }
       nav .menu .chucnang {
        display: block;
        line-height: 56px;
       }
       .container .menuleft{
        display: none;
       }
       .slide img {
        margin-top: 2.29%;
        width: 27.8rem;
        height: auto;
        
        }
    
        .slide .dieuhuong .trai{
            top: -7rem;
         }
         
         .slide .dieuhuong .phai{
            top: -7rem;
            right: 13rem;
             
          }
      
    
        .slide img {
            margin-top: 2.29%;
            width: 27.8rem;
            height: auto;
            
            }
    
        .slide hr {
            
            width: 27.8rem;
           
        }
       
        .content {
            display: flex;
            flex-wrap: wrap;
            width: 40.8rem;
            margin-top: 1%;
            
        }
        
        .content .item {
            width: 13.8rem;
            border: 1px solid #ccc;
            flex-wrap: wrap;
        }
        
        .content .item img {
            width: 9rem;
            max-height: 13rem;
            margin: 20px 20px 20px 20px;
            object-fit: cover;
        
        }
    
        .content .item .imgvip {
            width: 10.3rem;
            max-height: 9rem;
        
        }
    
        .contentduoi {
            display: block;
            margin: 5% 10% 10% -13%;
            
        }
        
        .contentduoi .listcontent {
            display: flex;
            
            padding-left: 61px;
        }
    
        .panner {
           
            margin: 0;
            width: 27.7rem;
        }
        
        .panner .pannerimg {
           
            padding: 15px 1px 10px 20px;
            
        
        }
        
        .panner .pannerimg img {
            
            width: 4rem;
            }
        
            footer {
              
                width: 27.7rem;
                
            }
            
            footer .footertop {
              
                display: block;
            
            }
            
            footer .footertop .footercontent {
            
                margin-left: -140px;
            }
            
            
             /* footer .footertop .footercontent h3 {
                text-transform: uppercase;
                font-weight: 500;
                
                padding-left: 10%;
                white-space: nowrap;
            
            }  */
            
             /* footer .footertop .footercontent p {
                margin-bottom: 13px;
            
            }  */
            
            
            
            
            /* footer .footertop .footercontent .nd ul li {
                list-style: none;
                margin-bottom: 13px;
                white-space: nowrap;
            } */
            
            /* footer .footertop .footercontent .nd ul li a {
                text-decoration: none;
                color: black;
            
            } */
            
            /* footer .footertop .footercontent .nd {
                padding-left: 10%;
                margin-top: 5%;
            } */
            
            footer .footertop .hai {
                margin-left: -140px;
            }
    
            footer .footertop .footercontent .map {
    
                /* padding-top: 20px; */
                padding-left: 49px;
                padding-bottom: 30px;
            }
    
              footer .footertop .footercontent hr {
               display: none;
            } 
        
    
            footer .footerbottom .footercontent {
               
                 /* padding: 20px 0;
                border-top: 10px solid #ef233c; */
                display: block;
                /* justify-content: center; */
            
            }
            footer .footerbottom .footercontent .footercontent1 hr {
               
                display: none;
            
            }
            
            footer .footerbottom .footercontent .menu {
                /* color: #bfbfbf;
                padding: 0 90px;
                font-size: 15px;
                text-transform: uppercase;
                line-height: 35px;
                flex-wrap: wrap;
                width: 40rem;
                text-align: center; */
                display: none;
                
            
            }
            
            footer .footerbottom .footercontent .menu li {
            
                /* padding: 12px; */
                padding-left: 30px;
            }
            
            footer .footerbottom .footercontent .menu li p {
            
                text-align: center; 
            }
            
            
            
            footer .footerbottom .footercontent .footercontent2 {
                color: #bfbfbf;
                padding: 0 10px;
                font-size: 15px;
                line-height: 35px;
            }
            
            
            footer .footerbottom .footercontent .footercontent1 {
                width: 40rem;
            
            }
            
            footer .footerbottom .footercontent .ndduoi {
                
                padding: 10px 220px 10px 10px;
                
            
            }
      
    
    }
    </style>
    
   
    
    
</template>

<script>
export default {
    name: 'IndexUser',
    props: {
      msg: String
    },
       

}

</script>