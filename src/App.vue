<template>
  <ul>
    <li v-for="project in store.projects">
      <a href="#" @click.prevent="getOneProject(project.slug)">{{ project.title }}</a>
    </li>
  </ul>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
export default {
  name: "App",
  components: [
    ////////////////////////////////
  ],
  data() {
    return {
      store,
      activeProject: null
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
    getOneProject(slug) {
      axios.get(store.apiUrl + 'projects/' + slug)
        .catch(error => { throw error; })
        .then((res) => {
          this.activeProject = res.data.results;
          console.log(this.activeProject);
        })
    }

  },
  mounted() {
    this.getAllProjects();
  }
}
</script>

<style lang="scss"></style>
