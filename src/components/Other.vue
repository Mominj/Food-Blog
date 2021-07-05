<template>
  <div class="the-card">
      <h1>A Cooking Companion</h1>
      <div class="img-section">
           <slot></slot>
      </div>
      <p>With Basil & Cooked, you  view them in full-screen mode for an easy cooking companion in the kitchen.
         Better yet, share with friends & family so they can cook along!</p>
  </div>
</template>

<script>
export default {
    name:'Other',

}
</script>

<style >
.the-card{
    position: relative;
    width: 30%;
    max-height: 750px;
    margin-right: 30px;
}
.the-card .img-section{
    position: relative;
     height: 230px;
     width: 100%;
     margin-bottom: 30px;
    
}
.the-card .img-section img{
   width: 100%;
   height: 100%;
   object-fit: cover;
    border-radius: 5px;
    
}
.the-card h1{
    margin: 20px;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
}
.the-card p{
    font-size: 22px;
    font-weight: 400;
     opacity: .6;

}



@media only screen and (max-width: 960px) {
  .the-card{
    position: relative;
    width: 100%;
    max-height: 750px;
    margin-right: 30px;
}
 
}






</style>