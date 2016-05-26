<template>
  <ul class="nav nav-list">
    <li
      v-for="(name, item) in data"
      @click="toggleMenu(name)"
      style="cursor: pointer;"
      :class="{'active': activeItem === name && isStr(item)}">
      <a
        v-link="isStr(item) ? { path: `/admin/${name}` } : {}"
        @click="isStr(item) && (activeItem = name)">
				<i class="icon-dashboard"></i>
				<span class="menu-text">{{ isStr(item) ? item : item.title }}</span>
        <b v-show="!isStr(item)" class="arrow icon-angle-down"></b>
			</a>
      <ul class="submenu" v-if="!isStr(item)" v-show="activeMenu === name">
        <li
          :class="{'active': activeItem === sub_name}"
          v-for="(sub_name, sub_item) in item.subMenu">
          <a @click.stop="activeItem = sub_name" v-link="{ path: `/admin/${sub_name}` }">
						<i class="icon-dashboard"></i>
						{{ sub_item }}
					</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style>
.nav-list>li ul.submenu {
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
    created () {
      const targetName = this.$route.name

      for (let name in this.data) {
        if (this.isStr(this.data[name])) {
          if (this.data[name] === targetName) {
            this.activeItem = name
          }
        } else {
          for (let subName in this.data[name].subMenu) {
            if (this.data[name].subMenu[subName] === targetName) {
              this.activeItem = subName
              this.activeMenu = name
            }
          }
        }
      }
    },
    data () {
      return {
        activeMenu: '',
        activeItem: ''
      }
    }
  }
</script>
