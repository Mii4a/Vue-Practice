<template>
  <div>
    <div id="content1">{{ showMessage }}</div>
    <button @click="changeMessage">メッセージを変更</button>
    <button @click="destroy">DOMを破壊する</button>
  </div>
</template>
<script>
var data = {
  message: "こんにちは",
  name: "翔太"
};

export default {
  data: function() {
    return data;
  },
  computed: {
    showMessage: function() {
      if (data == this.$data) {
        return this.message;
        console.log(this.message);
        console.dir(document);
      }
    }
  },
  methods: {
    destroy: function() {
      return this.$destroy();
    },
    changeMessage: function() {
      const changedMessage = "さようなら";
      return (this.message = changedMessage);
    }
  },
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("bupdated");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy");
  },
  destroyed: function() {
    console.log("destroyed");
  }
};
</script>
