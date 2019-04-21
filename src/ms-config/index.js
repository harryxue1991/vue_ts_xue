// 公共
import Vue from 'vue'
import MsTable from '../components/ms-table/index.js'
import MsRender from '../components/ms-render/index.js'
import MsHandle from '../components/ms-handle/index.js'
import Test from '@/components/Test.vue'

let components = [
  MsTable,
  MsRender,
  MsHandle,
  Test,
]

components.map(component => {
  Vue.component(component.name, component)
})

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
