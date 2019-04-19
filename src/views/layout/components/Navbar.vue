<template>
  <el-menu class="navbar" :class="{active: !getSidebar.opened}" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="getSidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'

@Component({
  components: {
    Breadcrumb,
    Hamburger
  }
})
export default class Navbar extends Vue {
  @Getter('getSidebar') public getSidebar!:any
  
  toggleSideBar() {
    this.$store.dispatch('ToggleSideBar')
  }
  logout() {
    this.$store.dispatch('LogOut').then(() => {
      location.reload() // 为了重新实例化vue-router对象 避免bug
    })
  }
}
</script>

<style lang="stylus" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  padding-left: 180px;
  transition: all 0.3s;
  &.active {
    padding-left: 30px;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
}
</style>

