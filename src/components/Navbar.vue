
<template>
 <nav>
  <div class="navigation">
       <ul >
           
            <li> <router-link to="/">Home</router-link> </li>
            <li> <router-link to="/about">About</router-link> </li>
            <li> <router-link to="/browser">Browser Reciped</router-link> </li>
            <li> <router-link to="/submit">Submit Recipe</router-link> </li>
             <li> <router-link to="/blog">Blog</router-link> </li>
            <li> <router-link to="/shop">Shop</router-link> </li>
            <li> <router-link to="/profile">Profile</router-link> </li>
            <li> <router-link to="/purchase">Purchase</router-link> </li>
          
       </ul>
   </div>

   <div class="social-icon">
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
      
 },


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
    padding: 0 10%;
    background-color:  #06bd62; 
    font-family: 'Roboto', sans-serif;
}


    
nav .navigation ul li{
    list-style-type: none;
    display: inline-block;
    
}
nav .navigation ul li a{
    padding: 19px 17px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: .5s;
    font-weight: 600;
}
nav .navigation ul li a:hover{
    background-color: #1ae07d;
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
</style>