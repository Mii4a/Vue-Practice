<template>
  <div>
    <h1>Count Number</h1>
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <h3>{{ subTitle | upperCase | lowerCase }}</h3>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>
<script>
import { tokyoNumber } from "../tokyoNumber";
export default {
  mixins: [tokyoNumber],
  created() {
    console.log("created in Mixin");
  }
};
</script>
