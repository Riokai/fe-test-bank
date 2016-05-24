<template>
  <bank-header></bank-header>
  <div class="main-container" id="main-container">
    <div class="main-container-inner">
      <div class="sidebar sidebar-fixed" id="sidebar">
        <bank-sidebar-shortcut></bank-sidebar-shortcut>
        <bank-sidebar :data.once="menu"></bank-sidebar>
        <bank-sidebar-collapse></bank-sidebar-collapse>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import BankHeader from 'components/Header'
import BankSidebar from 'components/Sidebar'
import BankSidebarShortcut from 'components/SidebarShortcut'
import BankSidebarCollapse from 'components/SidebarCollapse'

export default {
  components: {
    BankHeader,
    BankSidebar,
    BankSidebarShortcut,
    BankSidebarCollapse
  },
  data () {
    return {
      menu: {
        scheduleBuild: '课表建设',
        manageInfo: {
          title: '管理信息',
          subMenu: {
            academyInfo: '学院信息',
            majorInfo: '专业信息',
            teacherInfo: '教师信息',
            classInfo: '班级信息',
            studentInfo: '学生信息',
            scheduleInfo: '课表信息',
            constructorInfo: '建设者信息'
          }
        }
      }
    }
  }
}
</script>
