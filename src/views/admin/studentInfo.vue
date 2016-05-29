<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      :url="ACADEMY_LIST"
      :value.sync="academy_id"></bank-select>
    <bank-select
      :index="1"
      info="请选择专业"
      prop-id="major_id"
      :url="MAJOR_LIST"></bank-select>
    <bank-select
      :index="2"
      info="请选择课程"
      prop-id="course_id"
      :url="COURSE_LIST"
      :notify="true"></bank-select>
  </bank-select-set>
  <bank-title>查看学生信息</bank-title>
  <bank-table
    :cols="tableCols"
    :url="STUDENT_LIST"></bank-table>
  <bank-title>添加学生信息</bank-title>

  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <bank-single-add :inputs="inputData" :url="STUDENT_LIST"></bank-single-add>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="/admin/students/csv"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
</template>

<script>
import {
  ACADEMY_LIST,
  MAJOR_LIST,
  COURSE_LIST,
  TEACHER_LIST,
  STUDENT_LIST
} from 'services/constant'

export default {
  data () {
    return {
      ACADEMY_LIST,
      MAJOR_LIST,
      COURSE_LIST,
      TEACHER_LIST,
      STUDENT_LIST,
      tableCols: {
        student_id: '学生编号',
        name: '学生姓名',
        class_name: '班级名称'
      },
      inputData: [
        {
          text: '学号',
          key: 'student_id',
          value: ''
        },
        {
          text: '学生姓名',
          key: 'name',
          value: ''
        }
      ]
    }
  }
}
</script>
