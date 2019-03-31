<template>
  <div class="hello">
    <div class="head">{{msg2}}</div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  
  public msg2 = '我是一只小毛驴';
  public radio = 1;

  public mounted() {
    this.getList();
  }
  public getList() {
    axios.get('/users/bar').then(res => {
      console.log(res.data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.head 
  color red
  background-color yellow 
</style>
