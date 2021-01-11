<template>
    <div class="content">
        <main>
            <div style="display: flex;margin-bottom: 10px;">
                <div class="edit">
                    <i class="iconfont icon-biaotizhishi"/>
                    <input type="text" placeholder="请输入标题" v-model="title" />
                </div>
            </div>
            <div style="margin-bottom: 10px;">
                <mavon-editor :toolbars="toolbars" :tabSize="4" :codeStyle="atom-one-dark" v-model="content" style="height: 650px;"></mavon-editor>
            </div>
            <div style="display: flex;justify-content: flex-end;">
                <button class="btn" type="button" @click="commit">发表</button>
            </div>
            
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
            console.log(this.title);
            console.log(this.content);
            if(this.title === "" || this.content === ""){
                alert("请输入标题或正文!");
                return;
            }
            // 标题 简要 正文 图片
            var about = this.$MarkDown.parse(this.content,[])[1].content;
            about = about.replace(/&emsp;/g,"  ");
            about = about.replace(/&nbsp;/g,"  ");
            about = about.replace(/&ensp;/g,"  ");
            about = about.replace(/&#8194;/g,"  ");
            about = about.replace(/&#8195;/g,"  ");
            about = about.replace(/&#160;/g,"  ");
            about = about.replace(/&lt;/g,"<");
            about = about.replace(/&gt;/g,">");

            console.log(about)

            this.router.go(-1);
            var that = this;
            this.$Http.post('/commitEditor',{
                Title:that.title,
                About:about,
                Content:that.content
            }).then(function(response){
                if(response.data.Code === 1){
                    alert("提交成功!");
                }else{
                    alert("提交失败!");
                }
            }).catch(function(error){
                console.log(error);
            });
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
    width: 1240px;
    margin: auto auto 60px;
    flex-direction: column;
    justify-content: space-between;
}

.edit{
    width: 100%;
    height: 24px;
    display: flex;
    border-radius: 5px;
    align-items:center;
    justify-content: center;
    border: 1px solid rgb(155, 155, 155);
}

.edit i{
    width: 5px;
    height: initial;
    margin-left: 2px;
    color: #5F5F5F9A;
}

.edit input{
    width: 100%;
    border: none;
    outline: none;
    height: initial;
    margin-left: 15px;
    background: transparent;
}

.btn{
    width: 120px;
    height: 55px;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    background: none;
    color: #3498DB;
    border: 2.5px solid;
    position: relative;
    border-radius: 10px;
    text-transform: uppercase;
}

.btn::before,.btn::after{
    content: "";
    height: 4px;
    width: 14px;
    position: absolute;
    background: #F7F8FA;
    transition: .095s linear;
    transform: skewX(50deg);
}

.btn::before{
    top: -4px;
    left: 10%;
}

.btn::after{
    right: 10%;
    bottom: -4px;
}

.btn:active{
    transform:scale(0.98);
}

.btn:active::before{
    left: 80%;
}

.btn:active::after{
    right: 80%;
}
</style>