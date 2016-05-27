<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      url="/admin/academys"></bank-select>
  </bank-select-set>
  <bank-title>查看建设者信息</bank-title>

  <bank-table
    :cols="tableCols"
    :url="urlBuilder"></bank-table>

  <bank-title>添加题库建设者信息</bank-title>

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

  <div class="row text-center">
    <button type="submit" class="btn btn-info" @click="submit">提交</button>
  </div>

</template>

<script>
import {BUILDER_LIST} from 'services/constant'

export default {
  data () {
    return {
      urlBuilder: BUILDER_LIST,
      tableCols: {
        teacher_id: '教师编号',
        teacher_name: '老师姓名',
        course_id: '课程编号',
        course_name: '课程名称'
      }
    }
  },
  methods: {
    submit () {}
  }
}
</script>
