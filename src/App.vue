<template>
      <el-container id="app">
         <el-header class="header" v-if=logged_in>
            <div id="nav">
                <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="use">사용</el-menu-item>
                    <el-menu-item index="datapage">남은휴가 찾아보기</el-menu-item>
                    <el-menu-item index="datapage2">신규휴가 등록하기</el-menu-item>
                    <el-menu-item index="sidepage">권한 설정</el-menu-item>
                </el-menu>
            </div>
         </el-header>
        <router-view/>
      </el-container>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import PublicBus from "./PublicBus";

    @Component({

    })
    export default class Home extends Vue {
        private  logged_in : boolean=false;
        public activePage:string ="home";


        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }

        public created() {
            PublicBus.getInstance().$on("test", ()=>{
                    this.logged_in = true;
                // this.logged_in = true;
            })

            this.$router.replace("/sidepage/sidepage4");
        }

    }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}

.el-main {
    color: #333;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}
ul {
    display:table;
    margin-left: auto;
    margin-right: auto;
}
.title{
    font-size:48pt;
    margin-bottom: -20px;
}

</style>
