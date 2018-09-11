<template>
<div id="secondcomponent">
  <h4>2nd page</h4>
  <ul>
    <li v-for='article in articles' :key= 'article'>
    <img :src="article.images.medium"><span v-text="article.title"></span>
    </li>
  </ul>
</div>
</template>

<script>export default {
  name: 'secondcomponent',
  data () {
    return {
      author: 'second',
      articles: []
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (response) {
      this.articles = response.data.subjects
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<style scoped>
#secondcomponent{
  background-color: bisque;
}
</style>
