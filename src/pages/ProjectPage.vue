<template>
  <div v-if="project">
    {{ project.title }}
    <div class="w-50">
      <img class="w-100" :src="store.storageUploadsUrl + project.image" alt="">
    </div>
    <p>{{ project.description }}</p>
    <ul>
      <li v-for="technology in project.technologies">
        {{ technology.name }}
      </li>
    </ul>
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
      axios.get(this.store.apiUrl + 'projects/' + this.$route.params.slug)
        .catch((error) => {
          throw error;
        })
        .then((res) => {
          this.project = res.data.results;
          console.log(this.project);
        })
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<style lang="scss"></style>
