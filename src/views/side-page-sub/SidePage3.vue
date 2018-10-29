<template>
    <el-main >
        <el-radio v-model="radio" label="1">포상휴가</el-radio>
        <el-radio v-model="radio" label="2">보상휴가</el-radio>
        <el-radio v-model="radio" label="3">위로휴가</el-radio>
        <el-radio v-model="radio" label="4">청원휴가</el-radio>
        <h4>근거</h4>
        <p>
            <el-input placeholder="ex)중대장급 표창" v-model="input" class="goHome" :change="test()"></el-input>
        </p>
        <h4>발행일</h4>
        <p>
            <el-date-picker
                    ref="date"
                    v-model="value1"
                    type="date"
                    placeholder="Pick a day">
            </el-date-picker>
        </p>
        <p>
            <el-button @click="dla">입력</el-button>
        </p>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {
        private dateData: any = '';
        public mounted() {


        }

        // private test() {
        //     console.log("변경")
        //     console.log(this.$refs.date.value);
        //     this.dateData = this.$refs.date.value;
        // }
        dla(){
            alert("저장되었습니다.");
        }
        data () {
            return {
                radio: '1',
                input: '',
                value1:''
            };
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
    .goHome{
        width:200px;
    }
</style>