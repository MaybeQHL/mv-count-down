# mv-count-down

vue 倒计时组件

## 安装

```
yarn add mv-count-down

or

npm i  mv-count-down

```

# 在线演示

http://null_639_5368.gitee.io/mv-count-down

## 使用

```
<template>
  <div class="home">
    <mv-count-down @startCallback="countDownS"
                   @endCallback="countDownE"
                   :startTime="startTime"
                   :endTime="endTime"
                   :endText="endText"
                   :dayTxt="'天'"
                   :hourTxt="'小时'"
                   :minutesTxt="'分钟'"
                   :secondsTxt="'秒'"
                   :isStart="isStart"></mv-count-down>
    <a class="link-blue"
       href="https://gitee.com/null_639_5368/mv-count-down/blob/master/src/views/Home.vue">查看demo</a>
  </div>
</template>

<script>
import MvCountDown from 'mv-count-down'

export default {
  name: 'home',
  components:
    MvCountDown
  },
  data () {
    return {
      startTime: new Date().getTime(),  // 开始时间（时间戳）
      endTime: 0,      // 完成的时间（时间戳）
      endText: '',     // 倒计时完成的提示文本
      isStart: false   // 控制倒计时开始的时机（异步请求完成开启）
    }
  },
  created () {
    this.setEndTime(10);
  },
  methods: {
    callback () {
      // coding .......
    },
    // 设置结束时间推迟多少秒并转时间戳
    setEndTime (value) {
      let curTime = new Date();
      let newTime = new Date(curTime.setSeconds(curTime.getSeconds() + value));
      this.endTime = newTime.getTime();
      this.isStart = true;
    },
    countDownS (x) {
      // 开始倒计时回调
      console.log(x)
    },
    countDownE () {
      // 结束倒计时回调
      this.callback();
    }
  }
}
</script>
```

## 赞助

<img src="https://images.gitee.com/uploads/images/2019/0906/172106_70962611_1107178.jpeg"  height="330" width="230">

万分感谢各位，作者也就 2 年经验以后多加努力。
