<template>
  <div>
    <h1>VueRouter</h1>
    <button @click="toPage1">Page1に遷移する</button>
    <hr />
    <router-link to="/users/1">User1へ</router-link>
    <router-link to="/users/2">User2へ</router-link>
    <router-link to="/users/3">User3へ</router-link>
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="before-enter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll", sc);
    },
    toPage1() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
