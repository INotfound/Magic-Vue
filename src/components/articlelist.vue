<template>
    <div style="justify-content: center;">
        <div class="card" v-for="(item,i) in articleInfo"  :key="i">
            <router-link tag="img"
                alt
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg"
                class="card-image"
                :to="{path:'article/details',query:{Id:item.Id}}"
            />
            <div>
                <div class="article-about">
                    <div>
                        <!-- 标题 -->
                        <router-link tag="div"  class="article-title" :to="{path:'article/details',query:{Id:item.Id}}" >
                            <span style="overflow-wrap: break-word;">{{item.Title}}</span>
                        </router-link>
                        <!-- 详情 -->
                        <router-link tag="div" style="margin-top: 10px;cursor: pointer;" :to="{path:'article/details',query:{Id:item.Id}}">
                            <span style="overflow-wrap: break-word;color: rgba(255, 255, 255, 0.6);">{{item.About}}</span>    
                        </router-link>
                    </div>
                        <!-- 日期阅读量 -->
                    <div class="article-reading">
                        <div>
                            <i class="iconfont icon-bilibili-line"/>
                            <span style="margin-left: 3px;font-size:15px;">{{item.Views}} 次围观</span>
                        </div>
                        <div style="margin-left: 20px">
                            <i class="iconfont icon-riqi"/>
                            <span style="margin-left: 3px;font-size:15px;">日期 {{item.CreateTime}}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        articleInfo: Array
    }
}
</script>

<style>

.card{
    height: 200px;
    display: flex;
    margin-top: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    border: 1px rgb(0, 0, 0);
    background-color:rgba(255, 255, 255, 0.300);
    justify-content:flex-start;
    box-shadow:0px 0px 4px rgba(0, 0, 0, 0.1);
}

.card:hover{
    box-shadow:0px 0px 20px rgba(0, 0, 0, 0.15);
    transform:scale(1.02);
}

.card .card-image{
    padding: 0%;
    height: inherit;
    cursor: pointer;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.article-about{
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.article-title {
    color: rgba(255, 255, 255, 0.65);
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    align-self:flex-start;
}

.article-reading{
    display: flex;
    color: #748594;
    margin-bottom: 20px;
}

@media (max-width: 772px){
    .card{
        height: 35%;        
    }
    .card .card-image{
        width: 35%;
        height: initial;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}

</style>