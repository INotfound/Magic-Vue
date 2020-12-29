<template>
    <div style="justify-content: center;">
        <div class="card" v-for="(item,i) in articleInfo"  :key="i">
            <router-link tag="img"
                alt
                :src="item.imgUrl"  
                class="card-image"
                :to="{path:'article/details',query:{id:item.id}}"
            />
            <div>
                <div class="article-about">
                    <div>
                        <!-- 标题 -->
                        <router-link tag="div"  class="article-title" :to="{path:'article/details',query:{id:item.id}}" >
                            <span style="overflow-wrap: break-word;">{{item.title}}</span>
                        </router-link>
                        <!-- 详情 -->
                        <router-link tag="div" style="margin-top: 10px;cursor: pointer;" :to="{path:'article/details',query:{id:item.id}}">
                            <span style="overflow-wrap: break-word;">{{item.summary}}</span>    
                        </router-link>
                    </div>
                        <!-- 日期阅读量 -->
                    <div class="article-reading">
                        <div>
                            <span style="margin-left: 5px">{{item.createTime}}</span>
                        </div>
                        <div style="margin-left: 20px">
                            <span style="margin-left: 5px">{{item.browse}} 已阅读</span>
                        </div>
                    </div>
                </div>

                <!-- <div style="margin: 20px">
                    <router-link tag="div"  class="article-title" :to="{path:'article/details',query:{id:item.id}}" >
                        <span style="overflow-wrap: break-word;">{{item.title}}</span>
                    </router-link>
                    <div style="margin-top: 10px">
                        <span style="overflow-wrap: break-word;">{{item.summary}}</span>
                    </div>
                    <div class="time" style="display: flex;margin-top: 80px">
                        <div>
                            <span style="margin-left: 5px">{{item.createTime}}</span>
                        </div>
                        <div style="margin-left: 20px">
                            <span style="margin-left: 5px">{{item.browse}} 已阅读</span>
                        </div>
                    </div>
                </div> -->
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        articleInfo: Array
    },
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
    background-color:#FFFFFF;
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
    color: #555;
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