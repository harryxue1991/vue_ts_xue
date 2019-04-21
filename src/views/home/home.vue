<template>
    <div class="app-container">
        <div>后台管理系统home</div>
        <div class="name" @click="handleClick">
            {{name}}
            {{age}}岁
        </div>
    </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Home extends Vue {
    name = '薛辛超';
    age = '18'

    handleClick() {
        console.log("哈哈哈")
    }
}
</script>

<style scoped lang="stylus">
    .name 
        font-size 32px
        line-height 50px
        height 50px
        color yellow
        background-color pink
        width 200px
        text-align center
        border-radius 10px
        margin-top 20px    
        cursor pointer
</style>



