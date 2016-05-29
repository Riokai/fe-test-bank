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
    :url="CLASS_LIST"></bank-table>

  <bank-title>添加班级信息</bank-title>

  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <bank-single-add :inputs="inputData" :selects="selectData" :url="CLASS_LIST"></bank-single-add>
    </bank-tab>
    <bank-tab header="批量添加">
      <bank-batch-add url="CLASS_LIST + '/csv'"></bank-batch-add>
    </bank-tab>
  </bank-tab-set>
</template>

<script>
import {CLASS_LIST, ACADEMY_LIST, MAJOR_LIST} from 'services/constant'

export default {
  data () {
    return {
      CLASS_LIST,
      urlAcademy: ACADEMY_LIST,
      tableCols: {
        class_id: '班级编号',
        name: '班级名称'
      },
      inputData: [
        {
          text: '班级编号',
          key: 'class_id',
          value: ''
        },
        {
          text: '班级名称',
          key: 'name',
          value: ''
        }
      ],
      selectData: [
        {
          text: '选择学院',
          url: ACADEMY_LIST,
          value: '',
          key: 'academy_id',
          info: '请选择学院'
        },
        {
          text: '选择专业',
          url: MAJOR_LIST,
          value: '',
          key: 'course_id',
          info: '请选择专业'
        }
      ]
    }
  }
}
</script>
