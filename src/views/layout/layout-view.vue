<template>
    <keep-alive :include="includeList">
        <router-view></router-view>
    </keep-alive>    
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class';

@Component
export default class layoutView extends Vue {
    @Getter('includeList') public includeList!:Array<any>
}
</script>
