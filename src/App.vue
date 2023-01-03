<template>
  <HeaderComp />
  <router-view></router-view>
  <FooterComp />
</template>

<script>
import HeaderComp from "./components/Header-Comp.vue";
import FooterComp from "./components/Footer-Comp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style scoped></style>
