<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      :notify="false"
      :url="urlAcademy"></bank-select>
    <bank-select
      :index="1"
      info="请选择专业"
      prop-id="major_id"
      url="/admin/majors"
      :notify="true"></bank-select>
  </bank-select-set>

  <bank-title>查看班级信息</bank-title>
  <bank-table
    :cols="tableCols"
    :url="urlClass"></bank-table>

  <bank-title>添加班级信息</bank-title>
</template>

<script>
import {CLASS_LIST, ACADEMY_LIST} from 'services/constant'

export default {
  data () {
    return {
      urlClass: CLASS_LIST,
      urlAcademy: ACADEMY_LIST,
      tableCols: {
        class_id: '班级编号',
        name: '班级名称'
      }
    }
  }
}
</script>
