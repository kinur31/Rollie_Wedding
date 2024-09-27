<template>
  <button
    @click="navigateToSection(sectionId)"
    class="flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 ease-in-out border-r border-white pr-4"
  >
    <font-awesome-icon :icon="['fas', icon]" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToSection(sectionId: string) {
      const section = document.getElementById(sectionId);
      if (section) {
        this.smoothScroll(section);
      }
    },
    smoothScroll(target: Element) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOut =
          progress < 0.5
            ? 4 * progress * progress * progress
            : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

        window.scrollTo(0, startPosition + distance * easeInOut);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    },
  },
});
</script>

<style scoped></style>
