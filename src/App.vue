<template>
  <div>
    <HomeView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeView,
  },
});
</script>

<style scoped>
/* Add specific styles if needed */
</style>
