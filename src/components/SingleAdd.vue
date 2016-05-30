<template>
  <form action="" class="form-horizontal">
    <bank-select-set v-show="selects.length > 0">
      <div class="form-group" v-for="select in selects">
        <label class="col-md-2 text-right" for="">{{select.text}}:</label>
        <bank-select
         :autostart="$index === 0"
         :index="$index"
         :info="select.info"
         :prop-id="select.id"
         :url="select.url"
         :value.sync="select.value"></bank-select>
      </div>
    </bank-select-set>
    <div class="form-group" v-for="input in inputs">
			<label class="col-md-2 text-right" for="">{{input.text}}:</label>
			<div class="col-md-3">
				<input
          type="{{input.type || 'text'}}"
          class="form-control"
          name="academyId"
          v-model="input.value">
			</div>
		</div>
    <div class="form-group">
			<div class="col-md-offset-2">
				<button class="btn btn-info" type="button" @click="submit">添加</button>
			</div>
		</div>
  </form>
</template>

<style lang="scss">
.form-select {
  margin-bottom: 0 !important;

  .form-group {
    margin-left: -5px !important;
  }
}
</style>

<script>
import {HOST, ACADEMY_LIST} from 'services/constant'

export default {
  props: {
    inputs: {
      type: Array,
      required: true
    },
    selects: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      urlAcademy: ACADEMY_LIST
    }
  },
  methods: {
    submit () {
      let sendData = {}

      if (this.selects.length !== 0) {
        this.selects.forEach(item => {
          sendData[item.key] = item.value
        })
      }

      this.inputs.forEach(item => {
        sendData[item.key] = item.value
      })

      this.$http.post(`${HOST}${this.url}`, sendData).then(res => {
        if (res.data.errorCode === 0) {
          this.$notice('添加成功', 'success')

          if (this.selects.length !== 0) {
            this.selects.forEach(item => {
              item.value = ''
            })
          }

          this.inputs.forEach(item => {
            item.value = ''
          })
        }
      })
    }
  }
}
</script>
