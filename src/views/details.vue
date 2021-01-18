<template>
    <div class="content">
        <main>
            <div>
                <div class="articles">
                    <h1 style="margin-top: 20px;margin-left: 25px;font-size: 24px;color: #FFFFFF95;">{{title}}</h1>
                    <div class="articles-reading">
                        <div>
                            <i class="iconfont icon-bilibili-line"/>
                            <span style="margin-left: 3px;font-size:15px;">{{views}} 次围观</span>
                        </div>
                        <div  style="margin-left: 20px">
                            <i class="iconfont icon-riqi"/>
                            <span style="margin-left: 3px;font-size:15px;">日期 {{createTime}}</span>
                        </div>

                    </div>
                    <article style="color: #FFFFFF90;" v-html="html"></article>
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
export default {
    components:{
        sidebar,
    },
    data() {
        return {
            html:"",
            title:"",
            views:"",
            createTime:""
        }
    },
    created() {

        var that = this
        this.$Http.get('/getDetails',{
            params: {
                Id: this.$route.query.Id
            }
        }).then(function(response){
            console.log(response.data);
            if(response.data.Code == 0)
                return;
            that.title = response.data.Title;
            that.views = response.data.Views;
            that.createTime = response.data.CreateTime;
            that.html = that.$MarkDown.render(response.data.Content);
        }).catch(function(error){
            console.log(error);
        });
        
        // console.log(this.$MarkDown.parseInline("# 小白君真的很帅!  \n\n\n# 你好呀",[])[0])
        // console.log(this.$MarkDown.parseInline("# 小白君真的很帅!  \n\n\n# 你好呀",[])[1].content)
    },
    methods:{
    }
}
</script>

<style>
main{
    width: 1240px;
    margin: auto auto 60px;
}

.content{
    height: 100%;
    display: flex;
    padding-top: 80px;
    justify-content: center;
}

.articles{
    float: left;
    width: 900px;
    border-radius: 10px;
    background: rgba(248,248,248, 0.5);
}

.articles-reading{
    display: flex;
    color: #748594;
    margin-top: 5px;
    margin-left: 25px;
    border-bottom: 1px solid #eee;
}

.articles article{
    margin: 25px;
}

.sidebars{
    float: right;
    width: 300px;
    display: block;
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