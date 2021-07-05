<template>
    <carousel :items-to-show="3" >
            <slide  v-for="value in mes" :key="value.name" >
                <div class="card">
                    <div class="card-img">
                    <img :src="value.picture" alt="">
                 </div>
                 <div class="card-text">
                     <h2>{{ value.text }}</h2>
                     <p></p>
                    <h1>{{ value.name }}</h1>
                 </div>
                </div>
                
      
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
  </carousel>



</template>

<script>
import image1 from "../assets/card1.jpg";
import image2 from "../assets/card2.jpg";
import image3 from "../assets/card3.jpg";
import image4 from "../assets/card4.jpg";
import image5 from "../assets/card5.jpg";
import image6 from "../assets/bg.jpg";
import image7 from "../assets/card7.jpg";




import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide , Pagination, Navigation } from 'vue3-carousel';

export default {
data(){
    return {
     mes:[
        {  
            name: "By Junstin S.",
            picture: image1,
            text: "In publishing graphic"
        },  
         {  
            name: "By Junstin",
            picture: image2,
            text: "In publishing  graphic"
        },  
         {  
            name: "By Junsti",
            picture: image3,
            text: "In publishing  graphic"
        },
         {  
            name: "By Junsti ros",
            picture: image4,
            text: "In publishing  graphic"
        },
         {  
            name: "By Junsti karl",
            picture: image5,
            text: "In publishing  graphic"
        },
        {  
            name: "By Junsti kar",
            picture: image6,
            text: "In publishing  graphic"
        },
         {  
            name: "By Junsti kar ",
            picture: image7,
            text: "In publishing  graphic"
        },
        

     ]
    } 
  },
   components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>

<style scoped>

.card{
 margin-top:30px ;
    position: relative;
    width: 85%;
    height: 420px;
    background: white;
    margin-right: 3%;
    border-radius: 10px;
    transition: .4s all ease;
    overflow: hidden;
    opacity: 1.4;
}
.card .card-img{
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 8px;
}
.card .card-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
     border-radius: 8px;
}
.card-text{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
}
.card-text h2{
   color: black;
   font-size: 25px;
   margin-bottom: 10px;
   
}
 .card-text p {
    margin-top: 15px;
    width: 60px;
    content:' ';
    display:block;
    text-align: center;
    height: 6px;
    width: 50px;
    border-radius:4px;
    box-shadow:inset 0 1px 1px rgba(0, 0, 0, .05);
    transition: .3s;
    background-color: #d0d0d0;
} 
.card:hover  .card-text p{
    width: 100px;
    background-color:rgb(9, 255, 0);
}
.card:hover{
transform: scaleY(1.07);
}
.card-text h1{
   color: black;
   font-size: 32px;
   margin-top: 10px;
}
</style>

