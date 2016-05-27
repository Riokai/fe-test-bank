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
  events: {
    'update-table': function (key, value) {
      this.$broadcast('update-table', key, value)
    }
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

<style>
.nav-tabs {
  margin-bottom: 0 !important;
}
</style>
