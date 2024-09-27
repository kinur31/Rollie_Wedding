<template>
  <div
    class="fixed inset-x-0 z-100 bg-brown-600 text-white flex items-center justify-between p-4 bottom-0"
  >
    <div class="flex items-center justify-center space-x-8 w-full">
      <NavButton icon="home" sectionId="home" />
      <NavButton icon="heart" sectionId="love" />
      <NavButton icon="calendar" sectionId="weddingDate" />
      <NavButton icon="images" sectionId="gallery" />
      <NavButton icon="comment" sectionId="comments" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavButton from "./NavButton.vue";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    NavButton,
  },
});
</script>

<style scoped>
.nav-button {
  transition: transform 0.2s ease-in-out;
}

.nav-button:hover {
  transform: scale(1.1);
  color: #e2e8f0; /* Adjust the hover color as needed */
}

.nav-button:active {
  transform: scale(0.95);
}
</style>
