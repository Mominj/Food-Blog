<template>
<div class="recepi">
    <div class="recepi-heading">
      <h1>Top Rated Recipes</h1>
      <p>The Homepage Recipes widget allows you to add some recipes to your homepage.</p>
        <a href="#">View All Recepies</a>
    </div>
    <div class="cardd">
        <div class="recepi-card" v-for="(recepi,index) in Recepi" :key="index">
             <div class="recepi-card-img">
                 <img :src="recepi.picture" alt="">
            </div>
            <div class="recepi-card-text">
             <div class="span">
                 <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
             </div>
             <h1>{{recepi.heading}}</h1>
             <h2>{{recepi.name}}</h2>
             <div class="line"></div>
             <p>{{recepi.description}}</p>
            </div>
       </div>
    </div>
</div>
  
</template>

<script>
import image1 from "../assets/card7.jpg";
import image2 from "../assets/card8.jpg";
import image3 from "../assets/card3.jpg";
import image4 from "../assets/card9.jpg";
import image5 from "../assets/card10.jpg";
import image6 from "../assets/card11.jpg";
import image7 from "../assets/card12.jpg";
export default {
    name: 'AllRecepi',
    data(){
        return{
            Recepi:[
               {  
            name: "By Junstin S.",
            picture: image1,
            heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
          },  
          {  
            name: "By Junstin",
            picture: image2,
             heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
         },  
          {  
            name: "By Junsti",
            picture: image3,
             heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
         },
         {  
            name: "By Junsti ros",
            picture: image4,
            heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
        },
         {  
            name: "By Junsti karl",
            picture: image5,
             heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
        },
        {  
            name: "By Junsti kar",
            picture: image6,
             heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
        },
         {  
            name: "By Junsti kar ",
            picture: image7,
             heading: "Simple Roast Chicken",
            description: "If possible, use flat no-cook lasagna noodles: They look and taste more like homemade than the curly kind."
        },
        
    ],
  }
}

}
</script>

<style scoped>
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
.recepi{
    width: 100%;
    height: auto;
    background: #E7EBF0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.recepi-heading{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.recepi-heading h1{
    font-size: 2.5rem;
    color: #31373A;
    margin: 0 0 1rem;;
}
.recepi-heading p{
    font-size: 1.5rem;
    color: #777879;
    margin: 0 0 1rem;;
}
.recepi-heading a{
    text-decoration:none;
    font-size: 1.5rem;
    color:white;
    margin: 1rem 0 1.5rem;
    padding: 10px 20px;
    background: #03a855;
    font-weight: 700;
   border-radius: 3px;
}
.recepi-heading a:hover{
    background: #0bca6a;
}
.cardd{
    width: 100%;
    position: relative;
    padding: 2% 6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.cardd .recepi-card{
    position: relative;
    width: 31%;
    height: 600px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: white;
    border-radius: 5px;
}
.cardd .recepi-card-img{
    width: 100%;
    height: 250px;
    overflow: hidden;
}
.cardd .recepi-card-img img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
}
.recepi-card-text{
    padding: 10px 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.checked {
  color: orange;
}
span{
    padding: 5px;
    margin-bottom: 10px;
}
.recepi-card-text h1{
    font-size: 28px;
    margin-bottom: 4px;
    color: #31373A;
}
.recepi-card-text h2{
    font-size: 24px;
    margin-bottom: 1px;
    color: #1f2020;
}
.recepi-card-text .line{
    width: 50px;
    height: 5px;
    background-color: #cbcecf;
    margin: 15px 0;
    border-radius: 3px;
    transition: .4s;
}
.recepi-card:hover .line{
     width: 100px;
     background-color: #03a855; 
}
.recepi-card:hover{
   transform: scaleY(1.04);
}



@media only screen and (max-width: 1315px) {

 .cardd .recepi-card{
    position: relative;
    width: 46%;
    height: 500px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: white;
    border-radius: 5px;
  }
}
@media only screen and (max-width: 800px) {

 .cardd .recepi-card{
    position: relative;
    width: 96%;
 }
}
</style>