<template>
    <section class="app-main">
        <!-- <el-scrollbar>
            <transition name="fade" mode="out-in"> -->
                <keep-alive :include="includeList">
                    <router-view></router-view>
                </keep-alive>
            <!-- </transition>
        </el-scrollbar> -->
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        // key() {
        //     return this.$route.meta.keepalive
        // },
        includeList() {
            return this.$store.getters.includeList
        }
    }
}
</script>
