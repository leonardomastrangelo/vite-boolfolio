<template>
  <ul>
    <li v-for="project in store.projects">
      {{ project.title }}
    </li>
  </ul>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios';
export default {
  name: "ProjectsPage",
  components: [
    ////////////////////////////////
  ],
  data() {
    return {
      store,
    }
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + 'projects')
        .catch(error => { throw error; })
        .then((res) => {
          store.projects = res.data.results
          console.log(store.projects);
        })
    },
  },
  mounted() {
    this.getAllProjects();
  }
}
</script>

<style lang="scss"></style>
