<template>
    <div class="content">
        <main>
            <div>
            </div>
            <div>
                <mavon-editor :toolbars="toolbars" :tabSize="4" :codeStyle="atom-one-dark" v-model="content" style="height: 650px;"></mavon-editor>
            </div>
            <button class="btn-commit" type="button" @click="commit">Click Me!</button>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            content: "",
            toolbars: {
                bold: true,
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: false, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: false, // 帮助
                undo: true, // 上一步
                redo: true, // 下一步
                trash: false, // 清空
                save: false, // 保存（触发events中的save事件）
                navigation: true, // 导航目录
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                subfield: true, // 单双栏模式
                preview: true, // 预览
            }
        }
    },
    created() {
    },
    methods:{
        commit(){
            // 标题 简要 正文 图片
            var abort = this.$MarkDown.parse(this.content,[])[1].content;
            abort = abort.replace(/&emsp;/g,"  ");
            abort = abort.replace(/&nbsp;/g,"  ");
            abort = abort.replace(/&ensp;/g,"  ");
            abort = abort.replace(/&#8194;/g,"  ");
            abort = abort.replace(/&#8195;/g,"  ");
            abort = abort.replace(/&#160;/g,"  ");
            console.log(abort)
        }
    }
}
</script>

<style>

.content{
    height: 100%;
    display: flex;
    padding-top: 80px;
    justify-content: center;
}

.content main{
    flex-direction: column;
    justify-content: space-around;
}

.content main .btn-commit{
    margin-top: 50px;
}

</style>