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
                    <sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "../components/sidebar.vue"
import articlelist from "../components/articlelist.vue"
export default {
    components:{
        sidebar,
        articlelist
    },
    data() {
        return {
            articleListInfo: [
                {id:1,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"},
                {id:2,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"},
                {id:3,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"},
                {id:4,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"},
                {id:5,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"},
                {id:6,title:"小白君真帅",summary:"小白君是真的帅",createTime:"2020-3-31",browse:2400,imgUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"}
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