<template>
  <h1>projects</h1>
  <div class="d-inline-block" v-for="project in store.projects">
    <ProjectCard :title="project.title" :logo="project.logo" :image="project.image" :github="project.github"
      :status="project.status" :category="project.category.name" :slug="project.slug" />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
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
    };
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + 'projects')
        .catch(error => { throw error; })
        .then((res) => {
          store.projects = res.data.results;
          console.log(store.projects);
        });
    },
  },
  mounted() {
    this.getAllProjects();
  },
  components: { ProjectCard }
}
</script>

<style lang="scss"></style>
