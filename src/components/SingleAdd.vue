<template>
  <form action="" class="form-horizontal">
    <div class="form-group" v-for="input in inputs">
			<label class="col-md-2 text-right" for="">{{input.text}}:</label>
			<div class="col-md-4">
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

<script>
import {HOST} from 'services/constant'

export default {
  props: {
    inputs: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    submit () {
      let sendData = {}

      this.inputs.forEach(item => {
        sendData[item.key] = item.value
      })

      this.$http.post(`${HOST}${this.url}`, sendData).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
