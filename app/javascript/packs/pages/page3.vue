<template>
  <div class="footer">
    <div :style="styleContainer">
      <button @click="ok = !ok">ボタン</button>
      <p v-show="ok">Ok</p>
      <hr />
      <ul>
        <li v-for="(fruit, arrayNumber) in fruits">
          {{ fruit }}
          {{ arrayNumber }}
        </li>
      </ul>
      <ul>
        <li v-for="(value, key, index) of objects">
          ({{ index }})
          {{ value }}
          {{ key }}
        </li>
      </ul>
      <template v-for="(fruit, index) in fruits">
        <li>
          ({{ index }})
          {{ fruit }}
        </li>
        <hr />
      </template>
      <li v-for="n of 10">{{n}}</li>
      <div v-for="fruit in fruits" :key="fruit.id">
        <p>{{ fruit }}</p>
        <input type="text" />
      </div>
      <button @click="remove">先頭を削除</button>
    </div>
    <router-link to="/">前のページへ</router-link>
  </div>
</template>

<script>
export default {
  name: "global_footer",
  data: function() {
    return {
      ok: true,
      fruits: ["りんご", "バナナ", "ブドウ"],
      objects: {
        firstName: "太郎",
        lastName: "別府",
        age: 19
      },
      styleContainer: {
        border: "1px solid #000",
        padding: "20px"
      }
    };
  },
  methods: {
    remove: function(){
      this.fruits.shift()
    }
  }
};
</script>
