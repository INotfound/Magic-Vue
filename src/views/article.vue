<template>
    <div>
        <div class="content-left" >
            <div class="bg-white radius5 shadow">
                <h3 class="pt-5 pb-5 ml-10" style="color: black; margin-top: 0px; margin-bottom: 0px;">所有文章</h3>
            </div>
            <articlelist :articleInfo="articleListInfo" />
            <el-pagination
                class="d-cc mt-10"
                background
                layout="prev, pager, next"
                :hide-on-single-page="true"
                :total="100">
            </el-pagination>
        </div>
        <div class="content-right">
            <el-aside style="z-index: 999;">
                <avatar />
            </el-aside>
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