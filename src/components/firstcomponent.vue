<template>
    <div id="firstcomponent">
      <h4>1st</h4>
      <a>write by {{author}}</a>
    </div>
</template>

<script>export default {
  name: 'firstcomponent',
  data () {
    return {
      author: 'first component'
    }
  }
}
</script>

<style scoped>
#firstcompoonent{
  background-color:#ccc;
}
</style>
