<template>
    <div>
        <div class="content-left" >
            <el-card class="left-top d-cf-column pl-20 pb-20">
                <div class="pb-10 l-b">
                    <h3>小白君</h3>
                    <div class="d-f" style="color:#748594">
                        <div class="tip-time">
                            <span class="el-icon-time"></span>
                            <span class="ml-5">创建时间</span>
                        </div>
                        <div class="ml-20">
                            <span class="el-icon-view"></span>
                            <span class="ml-5">已阅读</span>
                        </div>
                    </div>
                </div>
                <article v-html="html" ></article>
                <!-- <mavon-editor></mavon-editor> -->
            </el-card>
        </div>
        <div class="content-right">
            <el-aside style="z-index: 999; position: fixed;">
                <avatar />
            </el-aside>
        </div>
    </div>
</template>

<script>
import avatar from "../components/avatar.vue"
export default {
    components:{
        avatar,
    },
    data() {
        return {
            html:""
        }
    },
    created() {
        this.html = this.$MarkDown.render('# 小白君真的很帅!');
        console.log(this.html)
    },
    methods:{
    }
}
</script>

<style>
</style>