<template>
    <div class="ms-handel-btn">
        <template v-for="(item,index) in items">
            <el-button 
                size="small" 
                :type="type" 
                :key="index"
                @click="handleClick(item.func)" 
                v-if="item.show"
                :style="{'color': item.color?item.color:''}"
            >
                <span v-text="item.label"></span>
            </el-button>
        </template>    
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    name: 'ms-handle'
})
export default class MsHandle extends Vue {
    @Prop({ default: [] }) items!: Array<any>;
    @Prop({ default: 'text' }) type!: string;

    handleClick(item: any) {
        this.$emit(item.func, item.uuid);
    }
}
</script>

<style scoped lang="stylus">
    .ms-handel-btn {
        /deep/ .el-button--small, .el-button--small.is-round {
            padding: 0
        }
    }
</style>