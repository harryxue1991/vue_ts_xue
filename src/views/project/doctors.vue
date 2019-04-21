<template>
    <div class="app-container">
        <MsTable
            :data="list" 
            :columns="columns"
            @changeSize="changeSize"
            @changePage="changePage"
            :count = "count"
            :currentPage = "currentPage"
            :size = "size"
        ></MsTable>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Common from '@/common-mixins/common.ts'

@Component({
    mixins: [Common]
})
export default class Doctors extends Vue {
    columns = [
        {label: '创建时间', prop: "created_at"},
        {label: '姓名', prop: "truename"},
        {label: '状态', prop: "type_text"},
        // {label: '操作', prop: "", 
        //     render: (h, scope) => {
        //         const items =  [
        //             { label: "通过", func: { func: "adopt", uuid: scope }, show: true },
        //             { label: "不通过", func: { func: "notThrough", uuid: scope }, show: true },
        //         ];
        //         return h('ms-handle', {
        //             props: { items },
        //             on: { 
        //                 adopt: this.adopt,
        //                 notThrough: this.notThrough
        //             }
        //         })
        //     }
        // },
    ];
    getFunc() {
        return 'project_get_doctors'
    }
}
</script>