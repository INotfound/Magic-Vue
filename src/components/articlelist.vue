<template>
    <div>
        <router-link
            tag="div"
            class="hover mt-10"
            :to="{path:'article/details',query:{id:item.id}}"
            v-for="(item,i) in articleInfo"
            :key="i">
                <el-card shadow="hover">
                    <div class="d-lf">
                        <img
                            :src="item.imgUrl"
                            alt
                        />
                        <div class="m-20">
                            <div class="article-title" >
                                <span style="overflow-wrap: break-word;">{{item.title}}</span>
                            </div>
                            <div class="mt-10">
                                <span style="overflow-wrap: break-word;">{{item.summary}}</span>
                            </div>
                            <div class="time mt-40 d-f">
                                <div>
                                    <span class="el-icon-time"></span>
                                    <span class="ml-5">{{item.createTime}}</span>
                                </div>
                                <div class="ml-20">
                                    <span class="el-icon-view"></span>
                                    <span class="ml-5">{{item.browse}} 已阅读</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-card>
        </router-link>
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
.time {
  color: #748594;
}
.article-title {
  font-size: 20px;
  color: #555;
  font-weight: bold;
}
</style>