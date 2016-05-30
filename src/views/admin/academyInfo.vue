<template>
  <bank-title>查看学院信息</bank-title>

  <bank-table
    :autostart="true"
    :cols="tableCols"
    :url="ACADEMY_LIST"></bank-table>

  <bank-title>添加学院信息</bank-title>

  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <bank-single-add
        :inputs="inputData"
        :url="ACADEMY_LIST"></bank-single-add>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="/admin/academys/csv"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
</template>

<script>
import {ACADEMY_LIST} from 'services/constant'

export default {
  data () {
    return {
      ACADEMY_LIST,
      tableCols: {
        academy_id: '专业编号',
        name: '学院名称'
      },
      selectData: [
        {
          text: '选择学院',
          url: ACADEMY_LIST,
          value: '',
          info: '请选择学院',
          key: 'academy_id'
        }
      ],
      inputData: [
        {
          text: '学院编号',
          key: 'academy_id',
          value: ''
        },
        {
          text: '学院名称',
          key: 'name',
          value: ''
        }
      ]
    }
  }
}
</script>
