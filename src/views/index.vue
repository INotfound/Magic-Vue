<template>
    <div class="content">
        <main>
            <div>
                <div class="articles">
                    <div class="title">
                        <h3>最新发布</h3>
                    </div>
                    <articlelist :articleInfo="articleListInfo" />

                </div>
                <div class="sidebars">
                    <sidebar />
                </div>
            </div>
        </main>
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
            page: 1,
            articleListInfo:[{"Id":1,"Title":"欢迎来到小白君的博客网站!","About":"这是一篇测试文章","Views":0,"CreateTime":"2021-01-18"},{"Id":1,"Title":"欢迎来到小白君的博客网站!","About":"这是一篇测试文章","Views":0,"CreateTime":"2021-01-18"}]
        }
    },
    created() {
        console.log("小白君真帅")
        this.getArticleList();
    },
    mounted() {
        var that = this
        window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
            if(scrollTop+windowHeight==scrollHeight){
                that.page++;
                that.getArticleList()
            }
        }
    },
    methods:{
        getArticleList(){
            var that = this
            this.$Http.get('/getArticleList',{
                params: {
                    Page: that.page
                    }
            }).then(function (response) {
                console.log(response.data.Obj);
                that.articleListInfo = that.articleListInfo.concat(response.data.Obj);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style>

main{
    width: 1240px;
    margin: auto auto 60px;
}

.content{
    display: flex;
    padding-top: 80px;
    justify-content: center;
}

.articles{
    float: left;
    width: 900px;
}

.sidebars{
    float: right;
    width: 300px;
    display: block;
}

.title{
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.300);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.title h3{
    font-size: 15px;
    margin-top: 0px;
    padding-top: 5px;
    margin-left: 10px;
    margin-bottom: 0px;
    padding-bottom:5px;
    color: #FFFFFF
}


@media (max-width: 1205px){
    .sidebars{
        width: 0%;
        display: none;
    }
    .articles{
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
}

</style>