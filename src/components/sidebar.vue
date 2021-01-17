<!--
 * @Author: your name
 * @Date: 2020-12-28 22:50:11
 * @LastEditTime: 2021-01-17 21:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Magic-Vue\src\components\sidebar.vue
-->
<template>
    <div class="sidebar">
        <div class="avatar">
            <img class="img-avatar-background" src="../assets/about.jpg">
            <div class="image-div" ><img class="img-avatar" src="../assets/avatar.jpg" alt ></div>
        </div>
    </div>
</template>

<script>
export default{
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


.avatar{
    border-radius: 10px;
    box-shadow:0px 0px 4px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.800);
}
.image-div{
    display:flex;
    padding-bottom: 10px;
    justify-content: center;
}

.img-avatar{
    width: 90px;
    height: 90px;
    margin-top: -15%;
    border-radius :50%;
    transition: all 0.5s;
    vertical-align: middle;
    border: rgba(255,255,255,.4) 4px solid;
}

.img-avatar:hover{
    transform: rotate(360deg);
}

.img-avatar-background{
    width: 100%;
    height: 80px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
</style>