<template>
  <div class="row select-section form-select" style="margin-bottom: 20px;">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      renderData: {}
    }
  },
  events: {
    'parent-notify': function (target) {
      this.$broadcast('child-load-data', target)
    }
  },
  ready () {
    // console.log(this.$children)
  }
}

</script>
