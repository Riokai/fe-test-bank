<script>
import Vue from 'vue'
import progress from 'vue-progressbar/vue-progressbar.vue'

export default {
  data () {
    return {
      myProgress: {
        percent: 0,
        options: {
          show: true,
          canSuccess: true,
          color: 'rgb(143, 255, 199)',
          failedColor: 'red',
          height: '2px'
        }
      }
    }
  },
  components: {
    progress
  },
  ready () {
    this.$progress.setHolder(this.myProgress)

    Vue.http.interceptors.push({
      request: (req) => {
        this.$progress.start()

        return req
      },

      response: (res) => {
        if (Number(res.status) === 200) {
          this.$progress.finish()
        } else {
          this.$progress.failed()
        }

        return res
      }
    })
  }
}
</script>
<template>
  <div>
    <progress :percent.sync="myProgress.percent" :options="myProgress.options"> </progress>
    <router-view></router-view>
  </div>
</template>
