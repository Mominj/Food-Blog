<template>
   <div class="header">
       <div class="logo">
           <a href="#"><img src="../assets/basil_logo.png" alt=""></a>
       </div>
       <div class="other">
                <div class="search-box">
                    <input type="text" placeholder="Search.." name="search">
                   <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                
                <a href="#" class="btn">Sign In</a>
       </div>
   </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        
    }
}
</script>



<style scoped>
 .header{
     position: relative;
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 3% 10%;
     height: 120px;

 }
 .logo{
     width: auto;
     height: 70px;
 }
 .logo img{
     width: auto;
     height: 100%;
     object-fit: cover;
     display: block;
 }
 .other{
     display: flex;
     justify-content: last baseline;
 }
 .search-box{
 margin-right: 10px;
 }
 .other .search-box input[type=text] {
  padding: 9px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;

  border-radius: 3px 0 0  3px;
}

/* Style the submit button */
.other  .search-box button {
  float: left;
  width: 20%;
  padding: 9px;
  background: #03a855;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  border-radius: 0 3px 3px  0;
}

.other button:hover {
  background: rgb(5, 146, 5);
}



 .other a{
    background: #ce5f52 ;
    color: white;
    font-size: 17px;
    border-left: none;
    cursor: pointer;
    padding: 9px;
    text-decoration: none;
    border-radius: 3px;
 }
 .other a:hover{
    background: #e26557;
    
 }

</style>
