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
  
    <div class="other">
        <div class="other-txt">
            <h1>Create your own recipe community.</h1>
            <p>With the included Cooked Pro plugin (a $50 value), you can create your very own recipe community, complete with user profiles, ratings, favorites, recipe
                 submissions, timers, and so much more.</p>
        </div>
        <div class="other-card">
            <Other>
                <img src="../assets/slot1.jpg" alt="">
            </Other>
            <Other>
                 <img src="../assets/slot2.jpg" alt="">
            </Other>
            <Other>
                 <img src="../assets/slot3.jpg" alt="">
            </Other>
        </div>
    </div>
    <div>
        <AllRecepi></AllRecepi>
    </div>

</template>

<script>
import Card from './Card.vue';
import Other from './Other.vue';
import AllRecepi from './AllRecepi.vue';

export default {
 name:'Slider',
 components:{
     Card,
     Other,
     AllRecepi
 }
}


</script>

<style scoped>
.other .other-card{
    display: flex;
    padding: 4% 10%;
   
}
.other{
    position: relative;
    background: white;
    width: 100%;
    height: 130vh;
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 960px) {
    .other .other-card{
    display: flex;
    padding: 4% 10%; 
    flex-direction: column;
  }
  .other{
    height: 250vh;
}
 
}
.other .other-txt{
    position: relative;
    background: #03a855;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    padding: 2% 20%;
    text-align: center;
    justify-content: center;
    color: white;
}
.other .other-txt h1{
   font-size: 42px;
   font-weight: 700;
   margin-bottom: 20px;
}
.other .other-txt p{
   font-size: 22px;
   font-weight: 500;
 
}

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
   padding: 0 10%;
}






@media only screen and (max-width: 600px) {
.other .other-txt{

    padding: 2% 10%;
    text-align: center;
    justify-content: center;
    color: white;
}
.other .other-txt h1{
   font-size: 35px;
   font-weight: 700;
   margin-bottom: 15px;
}
.other .other-txt p{
   font-size: 22px;
   font-weight: 500;

}
}

</style>