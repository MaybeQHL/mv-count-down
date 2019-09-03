# mv-count-down

vue 倒计时组件

## Project setup

```
yarn add mv-count-down

or

npm i  mv-count-down

```

## Project use

```
<template>
  <div class="home">
    <mv-count-down @startCallback="countDownS"
                   @endCallback="countDownE"
                   :startTime="startTime"
                   :endTime="endTime"
                   :endText="endText"
                   :dayTxt="'day'"
                   :hourTxt="'hours'"
                   :minutesTxt="'minutes'"
                   :secondsTxt="'seconds'"
                   :isStart="isStart"></mv-count-down>
    <a class="link-blue"
       href="https://gitee.com/null_639_5368/mv-count-down/blob/master/src/views/Home.vue">查看demo</a>
  </div>
</template>

<script>
import MvCountDown from '@/components/MvCountDown'

export default {
  name: 'home',
  components: {
    MvCountDown
  },
  data () {
    return {
      startTime: new Date().getTime(),  // Start time (timestamp)
      endTime: 0,      // Completion time (timestamp)
      endText: '',     // Countdown completed prompt text
      isStart: false   // Control the timing of the start of the countdown (asynchronous request completion start)
    }
  },
  created () {
    this.setEndTime(10);
  },
  methods: {
    callback () {
      // coding .......
    },
    // Sets how many seconds to delay the end time and turn the timestamp
    setEndTime (value) {
      let curTime = new Date();
      let newTime = new Date(curTime.setSeconds(curTime.getSeconds() + value));
      this.endTime = newTime.getTime();
      this.isStart = true;
    },
    countDownS (x) {
      // Start countdown callback
      console.log(x)
    },
    countDownE () {
      // End countdown callback
      this.callback();
    }
  }
}
</script>
```
