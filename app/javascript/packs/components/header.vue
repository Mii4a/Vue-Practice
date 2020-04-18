<template>
  <div>
    <slot name="totalLike" :user="user" text="text">
      <h2>デフォルトのタイトル</h2>
      <h2>{{ slotProps }}</h2>
    </slot>
    <slot></slot>
    <slot name="number">
      <p>いいねの数</p>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Dack",
        lastName: "Donald"
      }
    };
  },
  name: "global_header",
  props: {
    totalNumber: Number,
    slotProps: Object
  }
};
</script>,

<style scoped>
#header {
  background: aliceblue;
}
</style>
