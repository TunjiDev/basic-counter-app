<template>
  <nav class="w-full flex justify-evenly items-center bg-red-600 text-white font-bold">
    <span class="w-full h-11 hover:bg-slate-100 hover:text-red-600"
      ><router-link class="w-full h-full flex justify-center items-center" to="/">Home</router-link></span
    >
    <span class="w-full h-11 hover:bg-slate-100 hover:text-red-600"
      ><router-link class="w-full h-full flex justify-center items-center" to="/counter">Counter</router-link></span
    >
  </nav>
</template>

<script>
export default {
  name: "Header-Comp",
};
</script>

<style scoped></style>
