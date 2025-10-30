<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// import axios from 'axios';
// import customFetch from './api';
// import{ref, onMounted} from 'vue';



</script>

<template>
  <header>
    <Navbar />
      <RouterView />
    <Footer />
  </header>
</template>

<style scoped>
  header{
    background-color: var(--background-color);
  }
</style>
