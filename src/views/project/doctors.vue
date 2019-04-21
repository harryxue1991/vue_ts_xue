<template>
    <div class="app-container">
        <MsTable
            :data="list" 
            :columns="columns"
            @changeSize="changeSize"
            @changePage="changePage"
        ></MsTable>
    </div>
</template>

<script>
// import { common } from '@/common-mixins/common.js'

export default {
    name: 'list',
    // mixins: [common],
    data() {
        return {
            columns: [
                {label: '创建时间', prop: "created_at"},
                {label: '姓名', prop: "truename"},
                {label: '状态', prop: "type_text"},
                {label: '操作', prop: "", 
                    render: (h, scope) => {
                        const items =  [
                            { label: "通过", func: { func: "adopt", uuid: scope }, show: true },
                            { label: "不通过", func: { func: "notThrough", uuid: scope }, show: true },
                        ];
                        return h('ms-handle', {
                            props: { items },
                            on: { 
                                adopt: this.adopt,
                                notThrough: this.notThrough
                            }
                        })
                    }
                },
            ],
            //搜索条件
            submitData: {
                truename: '',
                type_text: '',
                created_at: [],
            },
            submitKey: [
                {key: 'truename', type: 'string', name: '姓名' },
                {key: 'type_text', type: 'select', name: '状态', option: 
                    [
                        {label: '进行中', value: '1'}, 
                    ] 
                },
                {key: 'created_at', type: 'data', name: '创建时间' },
            ],
        }
    },
    methods: {
        getFunc() {
            return 'project_get_doctors'
        },
    }
}
</script>