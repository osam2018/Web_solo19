<template>
    <el-main >
        <h4>신규휴가 등록하기</h4>
        <p>출발일</p>
        <p>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="출발일"
                    @click="onClick1">
            </el-date-picker>
        </p>
        <p>복귀일</p>
        <p>
            <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="복귀일">
            </el-date-picker>
        </p>
        <h4>휴가 종류</h4>
        <p>
            연가 <el-input-number v-model="num1" @change="handleChange" :min="0" :max="15"></el-input-number>
        </p>
        <p>
            포상휴가 <el-input-number v-model="num2" @change="handleChange" :min="0" :max="15"></el-input-number>
        </p>
        <p>
            위로휴가 <el-input-number v-model="num3" @change="handleChange" :min="0" :max="15"></el-input-number>
        </p>
        <p>
            청원휴가 <el-input-number v-model="num4" @change="handleChange" :min="0" :max="15"></el-input-number>
        </p>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue{
        public num1:number=0;
        public num2:number=0;
        public num3:number=0;
        public num4:number=0;
        handleChange(value:any){
            let day1:number=value.getDate();
            console.log(day1);
        }
        onClick1(value:any){
            console.log(value)
        }
        data() {
            return {
                value1: '',
                value2: '',
            };
        }
    };
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>