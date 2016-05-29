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
    :url="TEACHER_LIST"
    :selects=""></bank-table>

  <bank-title>添加教师信息</bank-title>

  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <bank-single-add :inputs="inputData" :selects="selectData" :url="TEACHER_LIST"></bank-single-add>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="TEACHER_LIST + '/csv'"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
</template>

<script>
import {ACADEMY_LIST, TEACHER_LIST} from 'services/constant'

export default {
  data () {
    return {
      TEACHER_LIST,
      selectData: [
        {
          url: ACADEMY_LIST,
          text: '选择学院',
          value: '',
          key: 'ACADEMY_LIST',
          info: '请选择学院'
        }
      ],
      inputData: [
        {
          text: '教师编号',
          key: 'teacher_id',
          value: ''
        },
        {
          text: '教师姓名',
          key: 'name'
        }
      ],
      tableCols: {
        teacher_id: '教师编号',
        name: '教师名称'
      }
    }
  }
}
</script>
