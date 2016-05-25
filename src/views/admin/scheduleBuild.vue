<template>
  <bank-tab-set :active="0">
    <bank-tab header="单个添加">
      <div class="row">
        <bank-title>选择教师</bank-title>
        <bank-title>选择课程</bank-title>
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
  components: {},
  data () {
    return {}
  }
}
</script>
