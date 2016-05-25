<template>
  <div class="breadcrumbs" id="breadcrumbs">
		<ul class="breadcrumb">
      <li
        v-for="route in data"
        :class="{'active': $index === data.length - 1}">
        <i v-show="$index === 0" class="icon-home home-icon"></i>
        <span
          v-if="$index === data.length - 1">{{route.name}}</span>
        <a
        v-else
        v-link="{path: route.path}">{{route.name}}</a>
      </li>
		</ul>

		<div class="nav-search" id="nav-search">
			<form class="form-search">
				<span class="input-icon">
					<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off">
					<i class="icon-search nav-search-icon"></i>
				</span>
			</form>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        data: []
      }
    },
    methods: {
      createData () {
        let target = this.$route.matched
        this.data = []

        for (let i = 0; i < target.length; i++) {
          let route = {}

          route.name = target[i].handler.name
          route.path = target[i].handler.path

          this.data.push(route)
        }
      }
    },
    created () {
      this.createData()

      this.$router.afterEach(() => {
        console.log('after')
        this.createData()
      })
    }
  }

</script>
