<template>
    <div>
        <el-card class="left-top d-cf-column pl-20 pb-20">
            <div class="pb-10 l-b">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
            </div>
            <mavon-editor :tabSize="4" :codeStyle="atom-one-dark" v-model="content" style="top: 80px;height: 650px;"></mavon-editor>
            <div class="pt-20 d-rf">
                <el-button type="danger" round>发布文章</el-button>
                <el-button type="primary" round>返回</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            content: ""
        }
    },
    created() {
    },
    methods:{
    }
}
</script>

<style>
</style>