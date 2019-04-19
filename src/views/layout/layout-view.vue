<template>
    <keep-alive :include="includeList">
        <router-view></router-view>
    </keep-alive>    
</template>

<script>
export default {
    name: 'layout-view',
    computed: {
        includeList() {
            return this.$store.getters.includeList
        }
    }
}
</script>