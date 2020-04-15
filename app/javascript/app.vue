<template>
  <div id="app">
    <Header msg="This is common header rendered by vue's single file components"></Header>
    <div id="nav"></div>
    <router-link to="/">Page1</router-link>|
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
    <p>現在{{ number }}回clickされています</p>
    <button v-on:click="countUp"></button>
    <p v-on:mousemove="mouseLocation">マウスを載せてください</p>
    <p>X:{{x}}, Y:{{y}}</p>
    <Footer msg="This is common footer rendered by vue's single file components"></Footer>
  </div>
</template>

<script>
import Header from "./packs/components/header";
import Footer from "./packs/components/footer";
import Vue from "vue";

export default {
  name: "Myapp",
  props: {
    msg: String
  },
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      number: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    countUp: function() {
      this.number += 1
    },
    mouseLocation: function(event){
      console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
