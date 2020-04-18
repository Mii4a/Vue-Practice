<template>
  <div>
    <h1>About</h1>
    <input />
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>
