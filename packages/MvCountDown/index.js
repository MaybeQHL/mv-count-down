// src/components/MvCountDown/index.js

// 导入组件，组件必须声明 name
import MvCountDown from './MvCountDown.vue'

// // 为组件添加 install 方法，用于按需引入
// MvCountDown.install = function (Vue) {
//   Vue.component(MvCountDown.name, MvCountDown)
// }

// export default MvCountDown




// Declare install function executed by Vue.use()
export function install (Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(MvCountDown.name, MvCountDown);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}