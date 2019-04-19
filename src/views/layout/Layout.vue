<template>
  <div class="app-wrapper">
    <Topbar></Topbar>
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div> -->
    <sidebar class="sidebar-container"></sidebar>
    <!-- <navbar></navbar> -->
    <div class="main-container">
        <app-main></app-main>
    </div>
  <!-- <div class="app-wrapper" :class="classObj"> -->
    

  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Topbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapActions } from 'vuex'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Topbar
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      console.log(this.$store.getSidebar)
      return this.$store.getSidebar.sidebar
    },
    device() {
      return this.$store.sidebar.device
    },
    // classObj() {
    //   return {
    //     hideSidebar: !this.sidebar.opened,
    //     withoutAnimation: this.sidebar.withoutAnimation,
    //     mobile: this.device === 'mobile'
    //   }
    // }
  },
  created() {
    
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  },
}
</script>

<style lang="stylus" scoped>
  // @import "src/styles/mixin.scss";
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
