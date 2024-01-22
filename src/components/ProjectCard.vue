<template>
  <div class="card" style="width: 18rem;">
    <img :src="store.storageLogosUrl + logo" class="w-100" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ github }}</li>
      <li class="list-group-item">{{ category }}</li>
      <li class="list-group-item">{{ status == 1 ? 'completed' : 'in progress' }}</li>
    </ul>
    <div class="card-body">
      <router-link :to="{ name: 'project', params: { slug: slug } }">
        {{ title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
  name: 'ProjectCard',
  props: ['title', 'logo', 'image', 'github', 'status', 'category', 'slug'],
  data() {
    return {
      store,
    };
  },
}

</script>

<style></style>