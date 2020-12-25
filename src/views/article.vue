<template>
    <div class="content">
        <div class="center">
            <div style="width:65%">
                <div class="title">
                    <h3>全部</h3>
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
        articlelist
    },
    data() {
        return {
            articleListInfo: [
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
        console.log("小白君超帅")
    },
    methods:{
    }
}
</script>

<style>
</style>