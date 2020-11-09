<template>
    <div class="radius5 shadow" style="background-color: white;">
        <div>
            <div><img class="img-avatar-background" src="../assets/about.jpg"></div>
            <div class="text-c pb-10"><img class="img-avatar" src="../assets/avatar.jpg" alt ></div>
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
.img-avatar{
    width: 90px;
    height: 90px;
    border-radius :50%;
    margin: -50px 0px 0px;
    vertical-align: middle;
    border: rgba(255,255,255,.4) 4px solid;
}
.img-avatar-background{
    height: 100px; 
    width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
</style>