<template>
  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <div class="row" style="padding: 10px 20px;">
        <bank-title>选择教师</bank-title>
        <bank-select-set>
          <bank-select
            :index="0"
            :autostart="true"
            prop-id="academy_id"
            info="请选择学院"
            :url="urlAcademy"
            :value.sync="academy_id"></bank-select>
          <bank-select
            :index="1"
            prop-id="teacher_id"
            info="请选择教师"
            :value.sync="teacher_id"
            url="/admin/teachers"></bank-select>
        </bank-select-set>
        <bank-title>选择课程</bank-title>
        <bank-select-set>
          <bank-select
            :index="0"
            :autostart="true"
            prop-id="academy_id"
            info="请选择学院"
            :url="urlAcademy"></bank-select>
          <bank-select
            :index="1"
            info="请选择专业"
            prop-id="major_id"
            url="/admin/majors"></bank-select>
          <bank-select
            :index="2"
            info="请选择课程"
            prop-id="course_id"
            :value.sync="course_id"
            url="/admin/courses"></bank-select>
        </bank-select-set>
        <bank-title>选择时间</bank-title>
        <div class="row">
          <div class="col-md-3">
            <datepicker
              :value.sync="startTime"
              format="yyyy-MM-dd"></datepicker>
          </div>
          <div class="col-md-3">
            <datepicker
              :value.sync="endTime"
              format="yyyy-MM-dd"></datepicker>
          </div>
        </div>
      </div>
      <div class="row text-center">
    		<button type="submit" class="btn btn-info" @click="submit">提交</button>
    	</div>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="/admin/syllabuses/csv"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
  <twice-auth-modal :show-modal.sync="openModal"></twice-auth-modal>

</template>

<style>
.datepicker, .datepicker-input {
  width: 100% !important;
}
</style>

<script>
import {datepicker} from 'vue-strap'
import TwiceAuthModal from 'components/TwiceAuthModal'
import {HOST, ACADEMY_LIST} from 'services/constant'
import Storage from 'services/storage'

export default {
  components: {
    datepicker,
    TwiceAuthModal
  },
  methods: {
    uploadData () {
      this
        .$http
        .post(`${HOST}/admin/syllabuses`, {
          teacher_id: this.teacher_id,
          course_id: this.course_id,
          start: this.startTime,
          end: this.endTime
        })
        .then(res => {
          console.log(res.data)
        })
    },
    submit () {
      const twiceAuth = Storage.get('twice_auth')

      if (twiceAuth === 'success') {
        this.uploadData()
      } else {
        this.openModal = true

        this.$once('twice-auth-success', () => {
          this.uploadData()
        })
      }
    }
  },
  data () {
    return {
      openModal: false,
      urlAcademy: ACADEMY_LIST,
      academy_id: '',
      teacher_id: '',
      course_id: '',
      startTime: '2016-5-25',
      endTime: '2016-5-30'
    }
  }
}
</script>
