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
        articlelist,
    },
    data() {
        return {
            articleListInfo:[]
        }
    },
    created() {
        console.log("小白君真帅")
        this.getArticleList();
    },

    methods:{
        getArticleList(){
            var that = this
            this.$Http.get('/getArticleList')
            .then(function (response) {
                console.log(response.data.Obj);
                that.articleListInfo = response.data.Obj;
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