<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>

  </div>

  <router-view></router-view>
</template>




<script>

import  Header from './components/Header.vue';
import  Navigation from './components/Navbar.vue';


export default {
  name: "App",
  data(){

  },
  components:{
    Header,
    Navigation,
   
  },



}
</script>








<style>


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}





</style>
