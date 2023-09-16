<template>

<header>
            <div class="anh"><img src="https://www.sieuthimaytinhlangson.com/uploads/logo_banner/logonew.png" alt=""></div>
            <div class="search">
                <input type="text" placeholder="Tìm kiếm...">
                <button type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
    
            <div class="hotline">
    
                <i style="color: #ef233c;border-radius: 100%;border: 1px solid #ef233c;font-size: 15px;line-height: 26px;width: 25px;height: 25px;text-align: center;"
                    class="fa-solid fa-phone"></i>
                <span>Hotline:</span>
                <a href="#">08 888 03 999</a>
            </div>
    
    
        </header>
</template>

<script>


export default {
    name: 'TheHeader',
    props: {
      msg: String
    },
    
   
    
    

}

</script>