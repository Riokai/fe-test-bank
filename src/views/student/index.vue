<template>
  <div class="header">
    <div class="container">
      <div class="header-title">
        <a href="">电子题库</a>
      </div>
      <ul class="header-list">
        <li><a href="/e_testbank/student/Test_historicalTest">个人首页</a></li>
        <li><a href="/e_testbank/student/Test_onlinePractice">在线练习</a></li>
        <li class="active"><a href="/e_testbank/student/Test_onlineExam">在线测试</a></li>
			</ul>
    </div>
  </div>
  <div class="content">
    <student-title>在线练习</student-title>
  </div>
</template>

<style lang="scss">
body {
  background-color: #fff;
  padding-top: 0 !important;
  font-size: 14px;
}

.header {
  margin-top: 0;
  margin-bottom: 0;
}
</style>

<script>
require('assets/css/student_style.css')
</script>
