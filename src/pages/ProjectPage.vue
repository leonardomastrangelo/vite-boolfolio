<template>
  <div v-if="project">
    {{ project.title }}
  </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios';
export default {
  name: "ProjectPage",
  components: [
    ////////////////////////////////
  ],
  data() {
    return {
      store,
      project: null,
    }
  },
  methods: {
    getProject() {
      axios.get(this.store.apiUrl + this.$route.params.slug)
        .catch((error) => {
          throw error;
        })
        .then((res) => {
          this.project = res.data.results;
        })
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<style lang="scss"></style>
