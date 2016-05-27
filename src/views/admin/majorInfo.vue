<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      :url="urlAcademy"
      :notify="true"
      :value.sync="academy_id"></bank-select>
  </bank-select-set>
  <bank-title>查看专业信息</bank-title>

  <bank-table
    :cols="tableCols"
    :url="urlMajor"></bank-table>
</template>

<script>
import {MAJOR_LIST, ACADEMY_LIST} from 'services/constant'

export default {
  data () {
    return {
      academy_id: '',
      urlMajor: MAJOR_LIST,
      urlAcademy: ACADEMY_LIST,
      tableCols: {
        major_id: '专业编号',
        name: '专业名称'
      }
    }
  }
}
</script>
