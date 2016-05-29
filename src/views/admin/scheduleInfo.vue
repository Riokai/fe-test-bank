<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      :url="ACADEMY_LIST"></bank-select>
    <bank-select
      :index="1"
      :autostart="true"
      prop-id="major_id"
      info="请选择专业"
      :url="MAJOR_LIST"
      :notify="true"></bank-select>
  </bank-select-set>
  <bank-title>查看课表信息</bank-title>
  <bank-table :url="SCHEDULE_LIST" :cols="cols"></bank-table>
</template>

<script>
import {ACADEMY_LIST, MAJOR_LIST, SCHEDULE_LIST} from 'services/constant'

export default {
  data () {
    return {
      ACADEMY_LIST,
      MAJOR_LIST,
      SCHEDULE_LIST,
      cols: {
        teacher_name: '教师姓名',
        teacher_id: '老师编号',
        course_name: '课程名称',
        course_id: '课程编号',
        start: '开始时间',
        end: '结束时间'
      }
    }
  }
}
</script>
