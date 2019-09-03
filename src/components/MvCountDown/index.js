// src/components/MvCountDown/index.js

// 导入组件，组件必须声明 name
import MvCountDown from './MvCountDown.vue'

// 为组件添加 install 方法，用于按需引入
MvCountDown.install = function (Vue) {
  Vue.component(MvCountDown.name, MvCountDown)
}

export default MvCountDown