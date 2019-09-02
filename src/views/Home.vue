<template>
  <div class="home">
    <mv-count-down @startCallback="countDownS_cb"
                   @endCallback="countDownE_cb"
                   :startTime="startTime"
                   :endTime="endTime"
                   :endText="endText"
                   :dayTxt="'天'"
                   :hourTxt="'小时'"
                   :minutesTxt="'分钟'"
                   :secondsTxt="'秒'"
                   :isStart="isStart"></mv-count-down>
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
      content: '',
      startTime: new Date().getTime(),
      endTime: 0,
      endText: '',
      isStart: false
    }
  },
  created () {
    this.setEndTime(111160);
  },
  methods: {
    setEndTime (value) {
      let curTime = new Date();
      let newTime = new Date(curTime.setSeconds(curTime.getSeconds() + value));
      this.endTime = newTime.getTime();
      this.isStart = true;
    },
    countDownS_cb (x) {
      console.log(x)
    },
    countDownE_cb (x) {
      // this.callback();
      console.log(x)
    }
  }
}
</script>
