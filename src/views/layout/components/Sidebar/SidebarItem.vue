<template>
  <div class="menu-wrapper">
    <template v-for="item in myRoutes">
      <router-link 
        v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" 
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children">
          <!-- 这里无限嵌套 -->
          <sidebar-item 
            v-if="child.children&&child.children.length>0" 
            :is-nest="true" 
            class="nest-menu" 
            :routes="[child]" 
            :key="child.path">
          </sidebar-item>
          <!-- 这里无限嵌套 -->
          <router-link :to="item.path+'/'+child.path" :key="child.name">
          <!-- <div v-else  @click="linkTo(item.path+'/'+child.path)" > -->
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          <!-- </div> -->

          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'
import sidebar from './index.vue'

@Component
export default class SidebarItem extends Vue {
  
  @Prop({default: false}) isNest!: boolean;
  @Prop({default: []}) routes!: Array<any>;

  get myRoutes() {
    return this.deal(this.routes, this.predicate)
  }

  private predicate(meta: any) {
    if(!meta.hidden) {
      return true
    }else{
      return false
    }
  }
  /**
   * 递归过滤节点，生成新的树结构
   * @param {Node[]} nodes 要过滤的节点
   * @param {node => boolean} predicate 过滤条件，符合条件的节点保留
   * @return 过滤后的节点
   */
  deal(nodes: Array<any>, predicate: Function):any {
      // 如果已经没有节点了，结束递归
      if (!(nodes && nodes.length)) {
          return [];
      }
      const newChildren = [];
      for (const node of nodes) {
          if (predicate(node.meta)) {
              // 如果节点符合条件，直接加入新的节点集
            newChildren.push(node);
            node.children = this.deal(node.children, predicate);
          }else{
            // 如果当前节点不符合条件，递归过滤子节点，
            // 把符合条件的子节点提升上来，并入新节点集
            newChildren.push(...this.deal(node.children, predicate));
          }
      }
      return newChildren;
  }

  hasOneShowingChildren(children: Array<any>) {
    const showingChildren = children.filter(item => {
      return !item.hidden
    })
    if (showingChildren.length === 1) {
      return true
    }
    return false
  }
}
</script>
