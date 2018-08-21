<template>
  <div class="app-first">
    <p>test</p>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg:'sgege'
    }
  }
}
</script>
<style scoped>
  .app-first{
    height:200px;
    width:900px;
    border:1px solid red;
    display:block;
  }
</style>

