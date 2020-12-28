<template>
    <div>
        <div style="margin-top: 10px" height="150" v-for="(item,i) in articleInfo"  :key="i">
            <div class="card">
                <img
                    alt
                    :src="item.imgUrl"
                    height="180" width="200"    
                    class="image"
                />
                <div>

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
    border-radius: 10px;
    transition: all 0.5s;
    border: 1px rgb(0, 0, 0);
    background-color:#FFFFFF;
    box-shadow:0px 0px 4px rgba(0, 0, 0, 0.1);
}
.card:hover{
    box-shadow:0px 0px 20px rgba(0, 0, 0, 0.15);
}

.image{
    padding: 0%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}



/* .time {
  color: #748594;
} */


/* .article-title {
  color: #555;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
} */
</style>