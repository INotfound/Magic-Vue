<template>
  <div id="app">
    <nav>
      <div>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <i class="fas fa-bars fa-1x"></i>
        </label>
        <label class="logo">XiaoBaiJun</label>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">文章</a></li>
          <li><a href="#">登录</a></li>
        </ul>
      </div>
    </nav>
    <div><router-view/></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    created(){
    },
    methods:{
    }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

body{
  font-family: montserrat;
  background: #F7F8FA;
}


label.logo{
  color: white;
  font-size: 35px;
  line-height: 60px;
  font-weight: bold;
}

nav{
  z-index:999;
  height: 60px;
  width: 100%;
  position: fixed;
  background: #4AB1EC; 
  box-shadow: 0 -2px 5px #000;
}

nav div{
  width: 1240px;
  margin: 0 auto;
}

nav div ul{
  float: right;
}

nav div ul li{
  margin: 0 5px;
  line-height: 60px;
  display: inline-block;
}

nav div ul li a{
  color: white;
  font-size: 18px;
  padding: 20px 20px;
  border-radius: 3px;
  text-transform: uppercase;
}

a.active,a:hover{
  background: #ffffff2f;
  transition: .5s;
}

.checkbtn{
  float: right;
  display: none;
  color: white;
  cursor: pointer;
  font-size: 30px;
  line-height: 60px;
  margin-right: 20px;
}
#check{
  display: none;
}

/* @media (max-width: 952px){

  nav ul li a{
    font-size: 16px;
  }
} */

@media (max-width: 1245px){
  nav div{
    width: 100%;
  }
}

@media (max-width: 1205px){
  .checkbtn{
    display: block;
  }
  
  label.logo{
    font-size: 30px;
    padding-left: 50px;
  }

  nav div{
    width: 100%;
  }

  nav div ul{
    width: 30%;
    right: -100%;
    height: 100vh;  
    position: fixed;
    text-align: center;
    transition: all .5s;
    background: #0082e6;
  }
  
  nav div ul li{
    display: block;
  }
  
  nav div ul li a{
    font-size: 20px;
  }
  
  a:hover,a.active{
    background: none;
    color: #4AB1EC;
  }
  
  #check:checked ~ ul{
    right: 0;
  }
}

@media (max-width: 400px){
  label.logo{
    font-size: 24px;
    padding-left: 25px;
  }

  nav div ul{
    margin-right: 0px;
  }
  
  nav div ul li{
    display: block;
  }
}


</style>