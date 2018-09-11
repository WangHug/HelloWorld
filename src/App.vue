<template>
  <div id="app">
    <h3>{{msg}}</h3>
    <p>Test</p>
    <input type="text" v-model="msg">
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>
    <div id="leftmenu">
      <ul>
        <li><router-link to="/first">第一页</router-link></li>
        <li><router-link to="/second">第二页</router-link></li>
      </ul>
    </div>
    <div id="rightcontent">
      <router-view class="view"></router-view>
    </div>
    <div id="bottom">
      <footercomponent></footercomponent>
    </div>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
import secondcomponent from './components/secondcomponent.vue'
import footercomponent from './components/footercomponent.vue'
export default{
  name: 'app',
  data () {
    return {
      msg: 'quickstart'
    }
  },
  components: {
    firstcomponent, secondcomponent, footercomponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #leftmenu{
    position:absolute;
    left:0;
    width:20%;
  }
  #rightcontent{
    position:absolute;
    left:20%;
    width:70%;
  }
  #bottom{
    left:5%;
    position:absolute;
    width:90%;
    top:95%;
  }
</style>
