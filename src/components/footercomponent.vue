<template>
<div id="footer">
  <hr>
  <p>this is footer</p>
  <a href="http://baidu.com">baidu</a>
  <a>copy to {{author}}</a>
</div>
</template>

<script>export default {
  name: 'footercomponent',
  data () {
    return {
      author: 'footer'
    }
  }
}
</script>

<style scoped>

</style>
