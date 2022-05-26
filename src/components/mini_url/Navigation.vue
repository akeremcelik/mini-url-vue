<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" :class="shrink && 'navbar-shrink'" id="mainNav">
    <div class="container px-4 px-lg-5">
      <RouterLink to="/" class="navbar-brand">Mini URL</RouterLink>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item"><RouterLink to="/convert" class="nav-link">Convert</RouterLink></li>
          <li class="nav-item"><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {ref} from "vue";

  export default {
    props: {
      shrink: Boolean
    },
    setup(props) {
      const shrink = ref(props.shrink);

      return {shrink}
    }
  }
</script>