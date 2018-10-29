<template>
    <el-container class="home">
        <el-main>
            <h1 class="title">휴가도우미</h1>
            <h5>여러 업무체계를 하나로.</h5> <HelloWorld />
            <div v-if="!logged_in2">
                <div>군번</div>
                <el-input placeholder="ID" class="idButton" v-model="inputID"></el-input>
                <div>비밀번호</div>
                <el-input placeholder="ID" class="pwButton" v-model="inputPW"></el-input>
                <el-button @click="logIn">로그인</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import PublicBus from "@/PublicBus";

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {
        private logged_in2 : boolean = false;
        logIn(){
           PublicBus.getInstance().$emit("test");
           this.logged_in2 = true;
           alert("로그인되었습니다.")
        }

        data(){
            return {
                inputID : '',
                inputPW : ''
            }
        }

    }
</script>

<style scoped>
    .idButton{
        width : 150px;
        margin-left : 20px
    }
    .pwButton {
        width: 150px;
        margin-left : 20px
    }

    div{
        float:left
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
         margin-bottom: 0;
         }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>