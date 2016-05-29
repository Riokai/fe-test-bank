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
  <bank-title>查看课程信息</bank-title>
  <bank-table :cols="cols" :url="COURSE_LIST"></bank-table>
  <bank-title>添加课程信息</bank-title>
  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <bank-single-add :inputs="inputData" :url="COURSE_LIST"></bank-single-add>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="/admin/courses/csv"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
</template>

<script>
import {ACADEMY_LIST, MAJOR_LIST, COURSE_LIST} from 'services/constant'

export default {
  data () {
    return {
      ACADEMY_LIST,
      MAJOR_LIST,
      COURSE_LIST,
      cols: {
        course_id: '课程编号',
        course_name: '课程名称'
      },
      inputData: [
        {
          text: '课程编号',
          key: 'course_name',
          value: ''
        },
        {
          text: '课程编号',
          key: 'course_id',
          value: ''
        }
      ]
    }
  }
}
</script>
