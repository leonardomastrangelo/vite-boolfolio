<template>
  <HeaderCM />
  <router-view>
  </router-view>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderCM from './components/HeaderCM.vue';
export default {
  name: "App",
  components: {
    HeaderCM
  },
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss"></style>
