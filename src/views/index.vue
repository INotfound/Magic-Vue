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
            articleListInfo:[{"Id":93564,"Title":"asdasd","About":"![B99.jpg](1)","Views":0,"CreateTime":"2021-01-13"},{"Id":93563,"Title":"asdasd","About":"![B99.jpg](1)","Views":0,"CreateTime":"2021-01-13"},{"Id":93562,"Title":"编写测试","About":"收藏","Views":0,"CreateTime":"2021-01-12"},{"Id":93561,"Title":"asdasd","About":"&lt;/xml&gt;","Views":0,"CreateTime":"2021-01-11"},{"Id":93560,"Title":"耗油根","About":"&lt;/xml&gt;","Views":0,"CreateTime":"2021-01-09"},{"Id":93559,"Title":"1111","About":"1123123123","Views":0,"CreateTime":"2021-01-09"}]
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
                that.articleListInfo = that.articleListInfo.concat(that.articleListInfo);
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