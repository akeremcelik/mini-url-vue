<template>
  <Navigation :shrink=true />
  <Contact />
</template>

<script>
  import Navigation from '../../components/mini_url/Navigation.vue';
  import Contact from '../../components/mini_url/Contact.vue'
  export default {
    components: {Navigation, Contact}
  }
</script>