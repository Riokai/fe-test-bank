<template>
  <bank-select-set>
    <bank-select
      :index="0"
      :autostart="true"
      prop-id="academy_id"
      info="请选择学院"
      :url="ACADEMY_LIST"
      :notify="true"
      :value.sync="academy_id"></bank-select>
  </bank-select-set>
  <bank-title>查看专业信息</bank-title>

  <bank-table
    :cols="tableCols"
    :url="MAJOR_LIST"></bank-table>

    <bank-tab-set :active="0">
      <bank-tab header="单个添加">
        <bank-single-add :inputs="inputData" :selects="selectData" :url="MAJOR_LIST"></bank-single-add>
      </bank-tab>
      <bank-tab header="批量添加">
        <bank-batch-add :url="MAJOR_LIST + '/csv'"></bank-batch-add>
      </bank-tab>
    </bank-tab-set>
</template>

<script>
import {MAJOR_LIST, ACADEMY_LIST} from 'services/constant'

export default {
  data () {
    return {
      academy_id: '',
      MAJOR_LIST,
      ACADEMY_LIST,
      tableCols: {
        major_id: '专业编号',
        name: '专业名称'
      },
      selectData: [
        {
          text: '选择学院',
          url: ACADEMY_LIST,
          value: '',
          key: 'academy_id',
          info: '请选择学院'
        }
      ],
      inputData: [
        {
          text: '专业编号',
          key: 'major_id',
          value: ''
        },
        {
          text: '专业名称',
          key: 'name',
          value: ''
        }
      ]
    }
  }
}
</script>
