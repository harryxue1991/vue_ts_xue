<template>
    <section class="app-main">
        <el-scrollbar>
            <transition name="fade" mode="out-in">
                <keep-alive :include="[]">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </el-scrollbar>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'

@Component
export default class AppMain extends Vue {
    get includeList() {
        return []
        // return this.$store.getters.includeList
    }
}
</script>
