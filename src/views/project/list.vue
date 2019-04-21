<template>
    <div class="app-container">

        <ms-table
            :data="list" 
            :columns="columns"
            @changeSize="changeSize"
            @changePage="changePage"
            :count = "count"
            :currentPage = "currentPage"
            :size = "size"
        ></ms-table>
    </div>
</template>



<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import { mixins } from 'vue-class-component';
import common from '@/common-mixins/common.ts'

@Component({
    mixins: [common]
})
export default class List extends Vue {
    columns = [
        {label: '创建时间', prop: "created_at"},
        {label: '名字', prop: "name"},
        {label: '状态', prop: "status_text"},
        {label: '操作', prop: "", 
            render: (h: any, scope: any) => {
                const items =  [
                    { label: "通过", func: { func: "adopt", uuid: scope }, show: true },
                    { label: "不通过", func: { func: "notThrough", uuid: scope }, show: true },
                ];
                return h('MsHandle', {
                    props: { items },
                    on: { 
                        // adopt: this.adopt,
                        // notThrough: this.notThrough
                    }
                })
            }
        },
    ]

    getFunc() {
        return 'project_get_list'
    }

}