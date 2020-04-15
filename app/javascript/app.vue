<template>
  <div id="app">
    <Header msg="This is common header rendered by vue's single file components"></Header>
    <div id="nav"></div>
    <router-link to="/">Page1</router-link>|
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
    <p>現在{{ number }}回clickされています</p>
    <button @click="countUp(2)"></button>
    <p v-on:mousemove="mouseLocation(10, $event)">
      <a v-on:click.prevent.stop href="https://google.com">Google</a>
      <span v-on:mousemove.stop>反応しないでください</span>
      マウスを載せてください
    </p>
    <p>X:{{x}}, Y:{{y}}</p>
    <input type="text" v-on:keyup.enter="myAlert" />
    <input type="text" v-model="command" />
    <h1>{{ command }}</h1>
    <p>{{ counter }}</p>
    <button @click="counter += 1">+1</button>

    <h1 :class="classObject">Hello</h1>
    <button @click="isActive = !isActive">切り替え</button>
    <h1 :class="[{red: isActive}, bg]">Hello</h1>
    <p>{{ lessThanThree }}</p>

    <h1 :style="[baseObject, styleObject]">Hello</h1>
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
      command: "こんにちは",
      number: 0,
      counter: 0,
      x: 0,
      y: 0,
      event: "click",
      isActive: true,
      color: "red",
      bg: "bg-blue",
      textColor: "red",
      bgColor: "blue",
      styleObject: {
        color: "red",
        "background-color": "blue"
      },
      baseObject: {
        'font-size': '4rem'
      }
    };
  },
  computed: {
    lessThanThree: function() {
      return this.counter > 3 ? "4以上" : "3以下";
    },
    classObject: function() {
      return {
        red: this.isActive,
        "bg-blue": !this.isActive
      };
    }
  },
  watch: {
    counter: function() {
      const vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 3000);
    }
  },
  methods: {
    countUp: function(times) {
      this.number += 1 * times;
    },
    mouseLocation: function(divideNumber, event) {
      this.x = event.clientX / divideNumber;
      this.y = event.clientY / divideNumber;
    },
    noEvent: function(event) {
      event.stopPropagation();
    },
    myAlert() {
      alert("アラート");
    },
    lessThanThreeMethod: function() {
      return this.counter ? "4以上" : "3以下";
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

.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
</style>
