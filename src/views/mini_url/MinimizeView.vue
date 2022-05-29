<template>
  <Navigation :shrink=true />
  <Minimize />
  <Footer />
</template>

<script>
  import Navigation from '../../components/mini_url/Navigation.vue';
  import Minimize from '../../components/mini_url/Minimize.vue';
  import Footer from '../../components/mini_url/Footer.vue';
  export default {
    components: {Navigation, Minimize, Footer}
  }
</script>