<template>
  <bank-title>查看学院记录</bank-title>
  <bank-table
    :cols="tableCols"
    url="/admin/majors"></bank-table>
</template>

<script>
export default {
  data () {
    return {
      tableCols: {
        major_id: '专业编号',
        name: '学院名称'
      }
    }
  }
}
</script>
