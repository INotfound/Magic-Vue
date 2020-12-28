<template>
  <div id="app">
    <nav class="box">
      <div>
        <ul>
          <li>
            <a>
              <img loading="lazy" style="width: 45px; height: 45px;" src="./assets/logo.png"/>
              <router-link to="/">小白君的Blog</router-link>
            </a>
          </li>
        </ul>
        <ul>
          <li><a><router-link to="/">首页</router-link></a></li>
          <li><a><router-link to="/article">文章</router-link></a></li>
          <li v-if="isLogin"><a><router-link to="/console/editor">写文章</router-link></a></li>
          <li><a><router-link to="/login">登录</router-link></a></li>
        </ul>
      </div>
    </nav>
    <div><router-view/></div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isLogin: false,
            activeIndex: "/",
            loginData:{
                userName:'',
                userPasswd:''
            }
        }
    },
    created() {
      const token = localStorage.getItem("MTOKEN")
      if(token){
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    },
    methods: {
      onLogin() {
        if(Object.keys(this.loginData.userName).length == 0){
          this.$notify.error({
            title: '错误',
            message: '请输入账号!!!',
            position: 'bottom-right'
          });
          return;
        }else if(Object.keys(this.loginData.userPasswd).length == 0){
          this.$notify.error({
            title: '错误',
            message: '请输入密码!!!',
            position: 'bottom-right'
          });
          return;
        }
        this.loginData.userPasswd = this.$Md5.hash(this.loginData.userPasswd)
        this.$Http({
            url:'https://172.81.206.73/login',
            method:'post',
            data: this.loginData,
        }).then(res=>{
            console.log(res)
            if(res.data.Code === 410){
              this.$notify.error({
                title: '错误',
                message: '账号或密码错误!!!',
                position: 'bottom-right'
              });
            }
            if(res.data.Code === 200){
              this.$notify.success({
                title: '错误',
                message: '账号或密码错误!!!',
                position: 'bottom-right'
              });
              this.router.push('index')
            }
        })
      }
    }
}
</script>

<style>
  .box{
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    align-items: center;
    background: #4AB1EC;
    justify-content: center;
    box-shadow: 0 -2px 5px #000;
  }
  .box div{
    width: 65%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
  }
  .box ul{
    display: flex;
    list-style: none;
    flex-direction: row;
  }
  .box ul li a{
    display: flex;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    text-decoration: none;
  }
  .box ul li:hover{
    color:#FFFFFF;
    background: #3B8EBD;
  }

  .pt-80{
    padding-top: 80px;
  }
  .pl-280{
    padding-left: 280px;
  }
  .pr-280{
    padding-right: 280px;
  }
</style>