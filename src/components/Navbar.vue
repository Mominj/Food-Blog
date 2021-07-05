
<template>
 <nav>
       <ul v-show="!Mobile" class="navigation">
            <li> <router-link to="/">Home</router-link> </li>
            <li> <router-link to="/about">About</router-link> </li>
            <li> <router-link to="/browser">Browser Reciped</router-link> </li>
            <li> <router-link to="/submit">Submit Recipe</router-link> </li>
             <li> <router-link to="/blog">Blog</router-link> </li>
            <li> <router-link to="/shop">Shop</router-link> </li>
            <li> <router-link to="/profile">Profile</router-link> </li>
            <li> <router-link to="/purchase">Purchase</router-link> </li>  
       </ul>
       <div class="icon">
           <i @click="toggleMobileNav" v-show="Mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
       </div>

       <transition name="mobile-nav">
            <ul v-show="!mobileNav" class="dropdown-nav">
            <li> <router-link to="/">Home</router-link> </li>
            <li> <router-link to="/about">About</router-link> </li>
            <li> <router-link to="/browser">Browser Reciped</router-link> </li>
            <li> <router-link to="/submit">Submit Recipe</router-link> </li>
             <li> <router-link to="/blog">Blog</router-link> </li>
            <li> <router-link to="/shop">Shop</router-link> </li>
            <li> <router-link to="/profile">Profile</router-link> </li>
            <li> <router-link to="/purchase">Purchase</router-link> </li>  
       </ul>
       </transition>
  

   <div class="social-icon" v-show="sicon">
       <ul>
           <li><a href="#"> <i class="fab fa-facebook"></i>  </a></li>
             <li><a href="#"> <i class="fab fa-twitter-square"></i> </a></li>
            <li><a href="#"> <i class="fab fa-instagram"></i> </a></li>
            <li><a href="#"> <i class="fab fa-linkedin"></i> </a></li>

       </ul>
   </div>
 </nav>
   
</template>

<script>

export default {
 name: 'Navigation',
  data(){
      return{
          scrollPosition:null,
          Mobile:null,
          mobileNav:null,
          WindowWidth:null,
          sicon:true,
      }
 },
 created(){
     window.addEventListener("resize",this.checkScreen);
     this.checkScreen();
 },
 methods:{
     toggleMobileNav(){
         this.mobileNav = !this.mobileNav
     },
     checkScreen(){
         this.WindowWidth = window.innerWidth;
         if(this.WindowWidth <=1200){
             this.sicon = false;
        
             if(this.WindowWidth <=1000){
                  this.Mobile = true;
                  this.sicon = true;
             }
             return;
         }
         else{
              this.Mobile = false;
              this.mobileNav = true;
              this.sicon=true;
             return;
         }
     }
 }


}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

nav{ 
    position: relative;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    background-color:  #06bd62; 
    font-family: 'Roboto', sans-serif;
}
nav .navigation  li{
    list-style-type: none;
    display: inline-block;
    
}
nav .navigation  li a{
    padding: 19px 17px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: .5s;
    font-weight: 600;
}
nav .navigation  li a:hover{
    background-color: #1ae07d;
}



nav .dropdown-nav{
   position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 250px;
    height: 350px;
    z-index: 1232324;
    top: 55px;
    left: 0;  
}
nav .dropdown-nav li{
 list-style-type: none;
 margin-bottom: 15px;
 margin-left: 50px;
}
nav .dropdown-nav  li a{
    text-decoration: none;
    color: black;
    font-size: 24px;
   
}
.dropdown-nav  li a:hover{
    background-color: #b9c0bd;
}





.social-icon ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
}

.social-icon ul li a{
   padding: 10px 15px;
   text-decoration: none;
  color: white;
}
.social-icon ul li a i{
   text-decoration: none;;
    align-items: center;
    padding: 30px 0;
}
.social-icon ul li a :hover{
  color: rgb(127, 131, 134);
}

.icon  i{
        cursor: pointer;
        font-size:24px;
        transition:.8s ease all;
}
.icon-active{
    transform: rotate(180deg);
}
.dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
}
</style>