<template>
    <div class="content">
        <div class="center">
            <div style="width:65%">
                <div class="title">
                    <h3>最新发布</h3>
                </div>
                <articlelist :articleInfo="articleListInfo" />
            </div>
            <div style="width:24%">
                <div style="position: fixed;">
                    <avatar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatar from "../components/avatar.vue"
import articlelist from "../components/articlelist.vue"
export default {
    components:{
        avatar,
        articlelist,
    },
    data() {
        return {
            articleListInfo:[
                {id:1,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"},
                {id:2,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"},
                {id:3,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"},
                {id:4,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"},
                {id:5,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"},
                {id:6,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png"}
            ],
        }
    },
    created() {
        console.log("小白君真帅")
    },
    methods:{
        getMinInfo(){
            //const Min = 6;
        }
    }
}
</script>

<style>
.content{
    display: flex;
    padding-top: 60px;
    align-items: center;
    justify-content: center;
}
.center{
    width: 60%;
    display: flex;
    justify-content: space-between;
}
.title{
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.title h3{
    font-size: 15px;
    margin-top: 0px;
    padding-top: 5px;
    margin-left: 10px;
    margin-bottom: 0px;
    padding-bottom:5px;
    color: rgb(92, 88, 88);
}
</style>