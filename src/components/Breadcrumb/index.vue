<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(item,index)  in levelList">
        <el-breadcrumb-item :key="item.path" v-if="item.meta.title">
          <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
          <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component
export default class hamburger extends Vue {
  @Prop({ default: false }) isActive!: Boolean;
  @Prop({ default: null }) toggleClick!: Function;

  @Watch("$route")
  routeChange(val: Route, oldVal: Route) {
    this.getBreadcrumb()
  }
  levelList: any = null
  
  created() {
    this.getBreadcrumb()
  }
  getBreadcrumb() {
    let matched = this.$route.matched.filter(item => item.name)
    const first = matched[0]
    this.levelList = matched
  }
}
</script>

<style lang="stylus" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
