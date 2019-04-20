<template>
  <div class="app-wrapper" :class="classObj">
    <Topbar></Topbar>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <navbar></navbar>
    <div class="main-container">
        <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { Navbar, Sidebar, AppMain, Topbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'

@Component({
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Topbar
  },
  mixins: [ResizeMixin],
})
export default class layout extends Vue {

  @Getter('getSidebar') public sidebar!:any
  @Getter('getDevice') public device!:any

  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === 'mobile'
    }
  }

  handleClickOutside() {
    this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
  }
  
}
</script>

<style lang="stylus" scoped>
  // @import "src/styles/mixin.lstyl";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
