<template>
    <el-main class="use">
        <div class="block">
            <p>휴가 등록하기.</p>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="출발일">
            </el-date-picker>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="복귀일">
            </el-date-picker>
            <el-button @click="used">사용내역 조회</el-button>
        </div>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {
        used(){
            alert("휴가 요청이 전송되었습니다.")
        }
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>