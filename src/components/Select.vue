<template>
  <div class="col-md-3">
    <select class="form-control">
      <option value="{{item.value}}" v-for="item in data">{{item.text}}</option>
      <!-- <option value="">{{info}}</option> -->
    </select>
  </div>
</template>

<script>
import {HOST} from 'services/constant'

export default {
  props: {
    info: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    url: {
      type: String
    },
    autostart: {
      type: Boolean
    }
  },
  data () {
    return {
      data: [
        {value: 'default', text: this.info}
      ]
    }
  },
  created () {
    if (this.autostart) {
      this
        .$http.get(`${HOST}${this.url}`)
        .then(res => {
          console.log(res.data)
        })
    }
  },
  ready () {
  }
}
</script>
