<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      url="/admin/academys"
      :notify="true"></bank-select>
  </bank-select-set>
  <bank-title>查看教师信息</bank-title>

  <bank-table
    :cols="tableCols"
    :url="urlTeacher"></bank-table>

  <bank-title>添加教师信息</bank-title>
</template>

<script>
import {TEACHER_LIST} from 'services/constant'

export default {
  data () {
    return {
      urlTeacher: TEACHER_LIST,
      tableCols: {
        teacher_id: '教师编号',
        name: '教师名称'
      }
    }
  }
}
</script>
