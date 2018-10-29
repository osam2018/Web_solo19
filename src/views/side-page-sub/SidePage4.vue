<template>
    <el-main >
        <h1 class="main">휴가도우미</h1>
        <h3>드디어 통합된 휴가업무</h3>
        <p>
            기존 업무체계 3개를 통합하여 편의성을 크게 높였습니다.
        </p>
        <h4>간편함</h4>
        <p>
            여러 업무체계 및 부대 자체 데이터시트를 이용해 휴가를 계산할 필요가 없어졌습니다.
        </p>
        <h4>효율적</h4>
        <p>
            기존 인사정보체계 응용프로그램을 설치할 필요가 없어졌습니다.<br>
            여러 종류의 휴가를 한꺼번에 붙여 나갈 때에도 일일이 등록하지 않아도 됩니다.
        </p>
        <h4>직관적</h4>
        <p>
            직관적이고 한눈에 보이는 시스템 덕분에 인사실무자의 업무효율이 높아졌습니다.
        </p>
        <el-button @onClick="letsLogin">시작하기</el-button>
        <div v-if="lGin">
            <div>군번</div>
            <el-input placeholder="ID" class="idButton" v-model="inputID"></el-input>
            <div>비밀번호</div>
            <el-input placeholder="ID" class="pwButton" v-model="inputPW"></el-input>
            <el-button @click="logIn">로그인</el-button>
        </div>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {
        private lGin:boolean=false;
        letsLogin(){
            this.lGin=true;
        }


    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
    .main{
        font-size:48px;
        margin-bottom: -5px;
    }
    h4{
        margin-bottom: -5px;
    }
</style>