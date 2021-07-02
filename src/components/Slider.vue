<template>
  <div class="slider">
      <div class="slider-text">
         <h1>Welcome to your recipe community.</h1>
         <p>Any page can have this recipe slider at the top. You can choose
            the recipes, <br> add a heading, subheading and more! <span>Learn More</span> </p>
      </div>
      <div class="slider-main">
        <Card></Card>
      </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
 name:'Slider',
 components:{
     Card,
 }
}


</script>

<style scoped>
.slider{
    position: relative;
    background: #1f2827;
    width: 100%;
    height: 120vh;
    background:url(../assets/bg.jpg); 
    background-position: center;
    background-size: cover; 
    opacity: .8;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slider .slider-text{
    position: relative;
    margin-top: 100px;
    margin-bottom: 30px;
}
.slider .slider-text h1{
    font-size: 52px;
    color: whitesmoke;
    font-weight: 900;
    margin-bottom: 30px;
}
.slider .slider-text p{
    font-size: 23px;
    color: white;
}
.slider .slider-text p span{
    font-size: 33px;
    color: white;
    background: #03a855;
  
}
.slider-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
</style>