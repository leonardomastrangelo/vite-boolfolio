<template>
  <header>
    <nav class="rounded-5">
      <!-- LOGO -->
      <div id="logo-container">
        <img src="/img/logo.png" alt="logo">
      </div>
      <!-- MENU -->
      <ul>
        <router-link class="links" :to="{ name: 'home' }">
          Home
        </router-link>
        <router-link class="links" :to="{ name: 'projects' }">
          Projects
        </router-link>
        <a class="links" target=”_blank” href="https://github.com/leonardomastrangelo">
          Github
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderCM',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

header {
  background-color: $bg_body;
  height: 200px;
  font-size: 0.9em;

  .container {
    position: relative;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsla(0, 0%, 6%, .7);
    backdrop-filter: blur(32px);
    border: 1px solid hsla(0, 0%, 100%, .1);
    padding: 10px 100px;
    position: fixed;
    top: 55px;
    left: 15%;
    right: 15%;

    #logo-container {
      width: 70px;

      img {
        width: 100%;
        display: block;
        cursor: pointer;
        transition: all 0.15s ease-in-out;
      }

      img:hover {
        transform: scale(0.8);
      }
    }

    .links {
      text-decoration: none;
      color: white;
      padding: 0 10px;
      transition: all 0.15s ease-in-out;
    }

    .links:hover {
      color: $bg_btn_hover;
    }
  }
}
</style>