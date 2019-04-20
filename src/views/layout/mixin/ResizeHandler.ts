import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { Route } from "vue-router";

const { body } = document
const WIDTH = 1024
const RATIO = 3
@Component
export default class ResizeMixin extends Vue {

  @Action('CloseSideBar') public CloseSideBar!:any;
  @Action('ToggleDevice') public ToggleDevice!:any;
  @Getter('getSidebar') public sidebar!:any
  @Getter('getDevice') public device!:any

  @Watch("$route")
  routeChange(val: Route, oldVal: Route) {
    if (this.device === 'mobile' && this.sidebar.opened) {
      this.CloseSideBar({ withoutAnimation: false })
    }
  }
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  }
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.ToggleDevice('mobile')
      this.CloseSideBar({ withoutAnimation: true })
    }
  }

  isMobile() {
    const rect = body.getBoundingClientRect()
    return rect.width - RATIO < WIDTH
  }
  resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile()
      this.ToggleDevice(isMobile?'mobile':'desktop')
      if (isMobile) {
        this.CloseSideBar({ withoutAnimation: true })
      }
    }
  }

}