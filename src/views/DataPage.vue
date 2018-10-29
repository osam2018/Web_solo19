<template>
    <el-main class="data-page">
        <ul v-for="(item) in list">
            <li>{{item.holiday}} : {{item.day}}일 : </li>
        </ul>
    </el-main>

</template>

<script lang="ts">
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