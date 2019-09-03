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
// @ is an alias to /src
import MvCountDown from '@/components/MvCountDown.vue'

export default {
  name: 'home',
  components: {
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
<style lang="scss" scoped>
.home {
  line-height: 50px;
}
.link-blue {
  text-decoration: none;
  color: #4bbbfa !important;
  &.active,
  &.focus,
  &:focus,
  &:hover {
    color: #3fb1f3 !important;
  }
}
</style>
