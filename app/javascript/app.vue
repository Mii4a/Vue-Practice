<template>
  <div id="app">
    <div class="main">
      <h1>transition</h1>
      <button @click="show = !show">切り替え</button>
      <button @click="myAnimation = 'slide'">Slide</button>
      <button @click="myAnimation = 'fade'">Fade</button>
      <h2>{{ myAnimation }}</h2>
      <transition name="fade" mode="out-in">
        <p v-if="show" key="bye">さよなら</p>
        <p v-if="!show" key="hello">こんにちは</p>
      </transition>
      <transition enter-active-class="animated bounce" leave-active-class="animated shake">
        <p v-if="show">Hello</p>
      </transition>
      <transition :name="myAnimation" appear>
        <p v-show="show">bye</p>
      </transition>
      <button @click="myComponent = 'ComponentA'"></button>
      <button @click="myComponent = 'ComponentB'"></button>
      <transition name="fade" mode="out-in">
        <component :is="myComponent"></component>
      </transition>

      <hr />
      <h1>Javascript transition</h1>
      <transition @before-enter="beforeEnter" :css="false">
        <div class="circle" v-if="show"></div>
      </transition>
      <h1></h1>
    </div>
    <Header>
      <template v-slot:totalLike="slotProps">
        <h2>こんにちは</h2>
        <h1>トータルのいいね数</h1>
        <h2>{{ slotProps }}</h2>
        <h3>はじめまして</h3>
        <h2>{{ number }}</h2>
      </template>
      <template #[title]></template>
    </Header>
    <CalculateNumber></CalculateNumber>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>

      <label for="maximum-number">最大人数</label>
      <input type="number" id="maximum-number" v-model.number="eventData.number" />
      <p>{{ eventData.number }}</p>
      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim="eventData.host" />
      <p>{{ eventData.host }}</p>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre">{{ eventData.detail }}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加年齢</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">無料</label>
    </div>

    <p>開催場所</p>
    <select v-model="eventData.location">
      <option v-for="location in locations" :key="location">{{ location }}</option>
    </select>
    <p>{{ eventData.location }}</p>
    <div id="nav"></div>
    <router-link to="/">Page1</router-link>|
    <router-link to="/page2">Page2</router-link>|
    <router-link to="/page3">Page3</router-link>|
    <router-link to="/page4">Page4</router-link>|
    <router-link to="/page5">Page5</router-link>|
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
import LikeNumber from "./packs/components/LikeNumber";
import Home from "./packs/components/Home";
import About from "./packs/components/About";
import EventTitle from "./packs/components/EventTitle";
import CalculateNumber from "./packs/components/CalculateNumber";
import ComponentA from "./packs/components/ComponentA";
import ComponentB from "./packs/components/ComponentB";
import Vue from "vue";

export default {
  name: "Myapp",
  components: {
    Header,
    Footer,
    LikeNumber,
    Home,
    About,
    EventTitle,
    CalculateNumber,
    ComponentA,
    ComponentB
  },
  data: function() {
    return {
      myComponent: "ComponentA",
      myAnimation: "slide",
      show: true,
      currentComponent: "Home",
      title: "title",
      command: "こんにちは",
      number: 10,
      counter: 0,
      x: 0,
      y: 0,
      event: "click",
      isActive: true,
      color: "red",
      bg: "bg-blue",
      textColor: "red",
      bgColor: "blue",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "タイトル",
        number: 0,
        host: "主催者",
        detail: "detail",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      },
      styleObject: {
        color: "red",
        "background-color": "blue"
      },
      baseObject: {
        "font-size": "4rem"
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
    beforeEnter(el, done) {
      // 現れる前
      done;
    },
    enter(el) {
      // 現れる時
    },
    afterEnter(el) {
      // 現れた後
    },
    enterCancelled(el) {
      // 現れるアニメーションがキャンセルされたとき。
    },
    beforeLeave(el) {
      // 消える前
    },
    leave(el) {
      // 消える時
    },
    afterLeave(el) {
      // 消えた後
    },
    leaveCancelled(el) {
      // 消えるアニメーションがキャンセルされたとき。
    },
    incrementNumber(value) {
      this.number = value;
    },
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
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-enter {
  /* 現れるときの最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのtansitionの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れるときの最後の状態 */
  opacity: 0.5;
}
.fade-leave {
  /* 消えるときの最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消えるときのtransitionの状態 */
  transition: opacity 1s;
}
.fade-leave-to {
  /* 消えるときの最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

h1 {
  color: red;
}
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
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
