<template>
    <div class="sidebar">
        <div class="avatar">
            <img class="img-avatar-background" src="../assets/about.jpg">
            <div class="image" ><img class="img-avatar" src="../assets/avatar.jpg" alt ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created() {
    },
    methods:{
    }
}
</script>

<style>


.avatar{
    border-radius: 10px;
    box-shadow:0px 0px 4px rgba(0, 0, 0, 0.15);
    background-color: white; 
}
.image{
    display:flex;
    padding-bottom: 10px;
    justify-content: center;
}

.img-avatar{
    width: 90px;
    height: 90px;
    border-radius :50%;
    margin-top: -15%;
    vertical-align: middle;
    border: rgba(255,255,255,.4) 4px solid;
}

.img-avatar-background{
    width: 100%;
    height: 80px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
</style>