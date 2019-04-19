<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Route } from "vue-router";
import SidebarItem from './SidebarItem.vue'
import { Member } from '@/store/modules/sidebar'

@Component({
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  @Getter('getSidebar') public getSidebar!:Member
  get routes() {
    const routers: any = this.$router;
    return routers.options.routes
  }
  get isCollapse() {
    return !this.getSidebar.opened
  }
}
</script>
