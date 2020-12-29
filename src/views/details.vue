<template>
    <div class="content">
        <main>
            <div>
                <div class="articles">
                    <article v-html="html"></article>
                    <!-- <mavon-editor></mavon-editor> -->
                </div>
                <div class="sidebars">
                    <sidebar />
                </div>
            </div>
        </main>
    </div>
    <!-- <div>
        <div class="content-left" >
            <div class="d-cf-column pl-20 pb-20">
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
                <mavon-editor></mavon-editor>
            </div>
        </div>
        <div class="content-right">
            <sidebar />

        </div>
    </div> -->
</template>

<script>
import sidebar from "../components/sidebar.vue"
export default {
    components:{
        sidebar,
    },
    data() {
        return {
            html:""
        }
    },
    created() {
        this.html = this.$MarkDown.render("# 小白君真的很帅! \
        \n\n\
```c++ \n\
int main()\n\
{\n\
    printf(\"hello world!\");\n\
}\n\
```");
        console.log(this.html)
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

</style>