<template>
  <div class="wrapper">
    <!--
      ROTATING BALL
     -->
    <div id="rotating-ball">
    </div>
    <!--
      JUMBO
     -->
    <section class="container" id="jumbo">
      <div>
        <h1>{{ title }}</h1>
        <p class="fs-5 text-light mb-5">{{ paragraph }}</p>
        <div>
          <router-link class="btn rounded-4" :to="{ name: 'projects' }">
            Projects
          </router-link>
          <a class="btn rounded-4" target="_blank" href="https://github.com/leonardomastrangelo">
            Github
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios';
export default {
  name: "HomePage",
  components: [
    ////////////////////////////////
  ],
  data() {
    return {
      store,
      title: "lm boolfolio",
      paragraph: "Personal Developer Porfolio, steps in my learning journey"
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

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.wrapper {
  overflow: hidden;
}

#rotating-ball {
  width: 1000px;
  height: 1000px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(37, 33, 233, 0.47) 0%, rgba(217, 217, 217, 0.00) 100%);
  position: fixed;
  right: -15%;
  top: 10%;
  animation: rotating 10s linear alternate-reverse infinite;
}

#jumbo {
  height: 230px;
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  align-items: center;

  .btn {
    font-size: 0.8em;
    padding: 15px 25px;
    transition: all 0.15s ease-in-out;
  }

  .btn:first-of-type {
    background-color: $bg_btn;
    margin-right: 20px;
    color: white;

    &:hover {
      background-color: $bg_btn_hover;
    }
  }

  .btn:last-of-type {
    background-color: transparent;
    border: 1px solid $outline;
    color: white;

    &:hover {
      background-color: rgba(63, 58, 58, 0.371);
    }
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
    right: -15%;
    top: 10%;
  }

  100% {
    transform: rotate(360deg);
    top: 40%;
    right: 2%;
  }
}
</style>
