<template>
    <el-main >
        <h4>남은 휴가 찾아보기</h4>
        <el-main class="data-page">
            <ul v-for="(item) in list">
                <li>{{item.holiday}} : {{item.day}}일 : </li>
            </ul>
        </el-main>
    </el-main>

</template>
<script lang="ts">
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import { Component, Vue } from 'vue-property-decorator';

    @Component({

    })
    export default class DataPage extends Vue {
        public $http:any;
        private list:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/data1.json");
            console.log("select :", result);
            this.list = result.data.list;
            console.log("select :", this.list);
        }

    }
</script>


<style scoped>
    .about{
        line-height: 30px;
    }
</style>