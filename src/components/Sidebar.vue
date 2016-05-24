<template>
  <ul class="nav nav-list">
    <li v-for="(name, item) in data" @click="toggleMenu(name)">
      <a v-link="isStr(item) ? { path: `/admin/${name}` } : {}">
				<i class="icon-dashboard"></i>
				<span class="menu-text">{{ isStr(item) ? item : item.title }}</span>
        <b v-show="!isStr(item)" class="arrow icon-angle-down"></b>
			</a>
      <ul class="submenu" v-if="!isStr(item)" v-show="activeMenu === name">
        <li v-for="(sub_name, sub_item) in item.subMenu">
          <a v-link="{ path: `/admin/${sub_name}` }">
						<i class="icon-dashboard"></i>
						{{ sub_item }}
					</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style>
.nav-list>li .submenu {
  display: block;
}
</style>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      isStr (value) {
        return Object.prototype.toString.apply(value) === '[object String]'
      },
      toggleMenu (name) {
        if (this.activeMenu !== name) {
          this.activeMenu = name
        } else {
          this.activeMenu = ''
        }
      }
    },
    data () {
      return {
        activeMenu: ''
      }
    }
  }
</script>
