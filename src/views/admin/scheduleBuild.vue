<template>
  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <div class="row" style="padding: 10px 20px;">
        <bank-title>选择教师</bank-title>
        <bank-select-set>
          <bank-select
            :index="0"
            :autostart="false"
            info="请选择学院"
            url="/admin/academys"></bank-select>
          <bank-select
            :index="1"
            info="请选择教师"
            url="/admin/teachers"></bank-select>
        </bank-select-set>
        <bank-title>选择课程</bank-title>
        <bank-select-set>
          <bank-select
            :index="0"
            :autostart="false"
            info="请选择学院"
            url="/admin/academys"></bank-select>
          <bank-select
            :index="1"
            info="请选择课程"
            url="/admin/courses"></bank-select>
        </bank-select-set>
        <bank-title>选择时间</bank-title>
      </div>
    </bank-tab>
    <bank-tab header="批量添加">
      bbb
    </bank-tab>
  </bank-tab-set>
</template>

<style>
.nav-tabs {
  margin-bottom: 0 !important;
}
</style>

<script>
export default {
  data () {
    return {}
  }
}
</script>
