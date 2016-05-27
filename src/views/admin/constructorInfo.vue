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
  }
}
</script>
