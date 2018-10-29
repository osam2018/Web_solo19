<template>
    <div class="line">
        <div class="block">
        <p>출발일</p>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="출발일">
        </el-date-picker>
        </div>
        <div class="block">
            <p>복귀일</p>
            <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="복귀일">
            </el-date-picker>
        </div>
        <el-button @click="used">사용</el-button>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({

    })
    export default class DataPage extends Vue {
        private date : number =0;
        used(){
            alert("휴가 요청이 전송되었습니다.")
        }
        data() {
            return {
                pickerOptions1: {
                    disabledDate(time:any) {
                        return time.getTime() > Date.now();
                    }
                },
                value1: '',
                value2: '',
            };
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
    .block{
        display:block
    }
    .line{
        display:inline
    }
</style>