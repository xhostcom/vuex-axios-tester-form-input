<template>
  <v-container id="input" fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          autofocus
          @keyup.enter="loadPosts(event)"
          label="Enter search term"
          append-icon="search"
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
      fields: ["search"],
      base: "posts",
      action: "loadPosts"
    })
  },
  components: {}
};
</script>
