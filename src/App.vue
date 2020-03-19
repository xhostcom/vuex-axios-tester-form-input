<template>
  <v-container id="input" fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Main input"
          placeholder="Enter search term"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapFields } from "vuex-map-fields";
//import * as helpersJs from "extrajs";
import { mapState } from "vuex";
export default {
  name: "App",
  // Get the fields and set them on each change
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
