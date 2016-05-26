<template>
  <modal :show.sync="showModal" effect="fade" width="800">
    <div slot="modal-header" class="modal-header">
      <h4 class="modal-title">二次认证</h4>
    </div>
    <div slot="modal-body" class="modal-body">
      <div class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              v-model="username"
              v-el:input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder=""
              v-model="password">
          </div>
        </div>
      </div>
    </div>
    <div slot="modal-footer" class="modal-footer" style="text-align: center;">
      <button
        type="button"
        class="btn btn-default"
        @click="showModal = false">关闭</button>
      <button type="button" class="btn btn-primary" @click="auth">认证</button>
    </div>
  </modal>
</template>

<script>
import {modal as Modal} from 'vue-strap'
import {HOST} from 'services/constant'
import Storage from 'services/storage'

export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Modal
  },
  data () {
    return {
      username: 'Jedeft',
      password: '444'
    }
  },
  methods: {
    auth () {
      this.$http.post(`${HOST}/permission/twiceAuth`, {
        username: this.username,
        second_pwd: this.password
      }).then(res => {
        const code = res.data.errorCode

        if (code === 20000) {
          this.$dispatch('twice-auth-success')
          this.showModal = false
          this.username = ''
          this.password = ''

          Storage.set('twice_auth', 'success')
          this.$notice('认证成功', 'success')
        } else {
          this.$notice('认证失败', 'warning')
        }
      })
    }
  },
  watch: {
    showModal: function (value) {
      if (value) {
        setTimeout(() => {
          this.$els.input.focus()
        }, 500)
      }
    }
  }
}
</script>
