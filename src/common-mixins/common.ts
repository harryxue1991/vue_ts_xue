import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component
export default class Common extends Vue {
    @Action('load_change') public load_change!:any

    currentPage = 1;
    size = 10;
    count = 0;
    list = [];
    submitData:any = {};

    // increaseCreated:any = false;
    // getFunc:any = undefined;

    created() {
        if(this.increaseCreated) {
            this.increaseCreated()
        }
        this.getList(this.submitData)
    }

    resetpage() {
        this.currentPage = 1;
    };
    searchList() {
        this.currentPage = 1;
        this.getList(this.submitData)
    };
    handleSizeChange(val:number) {
        this.size = val
        this.getList(this.submitData)
    };
    handleCurrentChange(val:number) {
        this.currentPage = val
        this.getList(this.submitData)
    };
    changeSize(val:number) {
        this.size = val
        this.getList(this.submitData)
    };
    changePage(val:number) {
        this.currentPage = val
        this.getList(this.submitData)
    };
    
    async getList(val: any) {
        for (let k in this.submitData) {
            this.submitData[k] = val[k]
        }
        Object.assign(this.submitData, {
            page: this.currentPage,
            per: this.size,
        })
        if(this.increaseSearch) {
            this.increaseSearch()
        }
        this.load_change(true);
        let func:string = this.getFunc();
        try {
            const res = await this.$api[func](this.submitData)
            this.count = res.count
            this.list = res.data
            this.load_change(false)
        }catch {
            this.load_change(false)
        }
    };

}