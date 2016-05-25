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
  ready () {
    // console.log(this.$children)
  }
}

</script>
