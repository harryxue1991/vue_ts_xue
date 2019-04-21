<template>
    <div>
        <el-table 
            :header-cell-style="{
                backgroundColor:'#00ccff',
                color: '#ffffff'
            }"
            :data="data" 
            v-loading="loading" 
            element-loading-text="拼命加载中" 
            border 
            fit
            stripe
            @selection-change="handleSelectionChange"
            highlight-current-row>
             <el-table-column
                v-if="selection"
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column 
                :prop="item.prop"
                :label="item.label"
                :sortable="item.sortable"
                :width="item.width"
                :min-width="item.minWidth"
                align="center"
                v-for="(item, index) in columns"
                :key="index">
                <template slot-scope="scope">
                    <MsRender v-if="item.render" :scope="scope" :render="item.render"></MsRender>
                    <span v-else>
                        {{scope.row[item.prop]}}
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="p_page">
            <el-pagination
                @size-change="changeSize"
                @current-change="changePage"
                :current-page="currentPage"
                :page-sizes="[10, 40, 100]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'

@Component
export default class MsTable extends Vue {
    @Prop({ default: [] }) columns!: Array<any>;
    @Prop({ default: [] }) data!: Array<any>;
    @Prop({ default: true }) border!: boolean;
    @Prop({ default: true }) stripe!: boolean;
    @Prop({ default: true }) fit!: boolean;
    @Prop({ default: true }) 'highlight-current-row'!: boolean;
    @Prop({ default: false }) selection!: boolean;
    @Prop({ default: 0 }) count!: Number;
    @Prop({ default: 1 }) currentPage!: Number;
    @Prop({ default: 10 }) size!: Number;

    @Getter('getLoading') public loading!:boolean

    autoHeight = '';
    tableHeight = 0;


    handleSelectionChange(val: any):void {
        this.$emit('handleSelectionChange', val)
    };
    changeSize(val: number):void {
        this.$emit('changeSize', val)
    };
    changePage(val: number):void {
        this.$emit('changePage', val)
    }
    
    @Watch('data')
    onChangeValue(newVal: Array<any>, oldVal: Array<any>){
        this.data = newVal
    }
    
}
</script>
