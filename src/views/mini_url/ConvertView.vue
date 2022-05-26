<template>
  <Navigation :shrink=true />
  <Convert />
  <Footer />
</template>

<script>
  import Navigation from '../../components/mini_url/Navigation.vue';
  import Convert from '../../components/mini_url/Convert.vue';
  import Footer from '../../components/mini_url/Footer.vue';
  export default {
    components: {Navigation, Convert, Footer}
  }
</script>