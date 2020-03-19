<template>
  <div id="app center">
    <input v-model="message" />
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapFields } from "vuex";
//import * as helpersJs from "extrajs";
import { mapState } from "vuex";
export default {
  name: "App",
  mapFields(options) {
    const object = {};
    for (let x = 0; x < options.fields.length; x++) {
      const field = [options.fields[x]];
      object[field] = {
        get() {
          return this.$store.state[options.base][field];
        },
        set(value) {
          this.$store.commit(options.mutation, { [field]: value });
        }
      };
    }
    return object;
  },
  // data() {},
  //mounted() {
  // this.$store.dispatch("loadPosts");
  //},
  computed: {
    ...mapState(["posts"]),
    ...mapFields({
      fields: ["message"],
      base: "posts",
      action: "loadPosts"
    })
  },
  components: {}
};
</script>
<style>
h1 {
  padding: 30px;
  text-align: center;
}
h2 {
  text-align: center;
}
</style>
