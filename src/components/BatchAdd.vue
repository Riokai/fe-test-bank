<template>
  <div class="form-horizontal">
    <div class="form-group">
      <label class="col-md-2 text-right" for="">选择文件:</label>
      <div class="col-md-4">
        <input id="upLoad" type="file" name="excel" v-el:input>
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-offset-2">
        <button class="btn btn-info" type="button" @click="batchAdd">添加</button>
      </div>
    </div>
  </div>
</template>

<script>
import {HOST} from 'services/constant'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    batchAdd () {
      let formData = new window.FormData()

      formData.append('file', this.$els.input.files[0])

      this.$http.post(`${HOST}${this.url}`, formData).then(res => {
        if (Number(res.data.errorCode) === 0) {
          this.$notice('添加成功', 'success')
        }
      })
    }
  }
}
</script>
