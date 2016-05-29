<template>
  <div class="col-md-3">
    <select class="form-control" v-model="value" @change="notifyParent">
      <option
        value="{{item[this.propId]}}"
        v-for="item in data">{{item.name}}
      </option>
    </select>
  </div>
</template>

<script>
import {HOST} from 'services/constant'

export default {
  props: {
    notify: {
      type: Boolean
    },
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
    },
    propId: {
      type: String
    },
    propName: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      twoWay: true,
      default: ''
    }
  },
  data () {
    return {
      data: [
        {[this.propId]: '', [this.propName]: this.info}
      ]
    }
  },
  methods: {
    notifyParent () {
      const selectLength = this.$parent.$children.length

      console.log(selectLength)

      if (this.notify) {
        this.$dispatch('update-table', this.propId, this.value)
      }

      if (this.index === selectLength - 1) return

      if (!this.value.trim()) return

      this.$dispatch('parent-notify', this.index + 1)
    },
    loadData () {
      this
        .$http.get(`${HOST}${this.url}`, {
          page: 1,
          rows: 1000
        })
        .then(res => {
          this.data = [{[this.propId]: '', [this.propName]: this.info}]

          this.data = this.data.concat(res.data.data)
        })
    }
  },
  created () {
    if (this.autostart) this.loadData()
  },
  events: {
    'child-load-data': function (target) {
      if (target !== this.index) return

      this.loadData()
    }
  },
  ready () {
  }
}
</script>
