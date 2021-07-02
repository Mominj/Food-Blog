<template>
<div v-for="value in mes" :key="value.name" class="card">
    <div class="card-img">
        <img :src="value.picture" alt="">
    </div>
    <div class="card-text">
        <h1>{{ value.name }}</h1>
        <h1>{{ value.text }}</h1>
    </div>
</div>

</template>

<script>
export default {
data(){
    return {
     mes:[
        {  
            name: "By Junstin S.",
            picture: "~/assets/card1.jpg",
            text: "In publishing and graphic design"
        },  
         {  
            name: "By Junstin",
            picture: "~/assets/card2.jpg",
            text: "In publishing and graphic design"
        },  
         {  
            name: "By Junsti",
            picture: "~/assets/card3.jpg",
            text: "In publishing and graphic design"
        }  
     ]
    }
   
}
}
</script>

<style scoped>
.card{
    width: 400px;
    height: 450px;
    background: white;
    margin-right: 20px;
}
.card .card-img{
    width: 400px;
    height: 250px;
}
.card .card-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}



</style>