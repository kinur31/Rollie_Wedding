<template>
  <div
    v-if="!isCountdownFinished"
    class="countdown flex flex-col items-center justify-center p-2 md:p-4 lg:p-6 bg-white rounded-lg shadow-lg"
  >
    <div
      class="countdown-content flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6"
    >
      <div
        class="countdown-item bg-gray-200 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <span
          class="countdown-number text-xl md:text-4xl font-extrabold text-gray-800"
          >{{ days }}</span
        >
        <span class="countdown-label text-xs md:text-sm text-gray-600"
          >Hari</span
        >
      </div>
      <div
        class="countdown-item bg-gray-200 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <span
          class="countdown-number text-xl md:text-4xl font-extrabold text-gray-800"
          >{{ hours }}</span
        >
        <span class="countdown-label text-xs md:text-sm text-gray-600"
          >Jam</span
        >
      </div>
      <div
        class="countdown-item bg-gray-200 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <span
          class="countdown-number text-xl md:text-4xl font-extrabold text-gray-800"
          >{{ minutes }}</span
        >
        <span class="countdown-label text-xs md:text-sm text-gray-600"
          >Menit</span
        >
      </div>
      <div
        class="countdown-item bg-gray-200 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <span
          class="countdown-number text-xl md:text-4xl font-extrabold text-gray-800"
          >{{ seconds }}</span
        >
        <span class="countdown-label text-xs md:text-sm text-gray-600"
          >Detik</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from "vue";

export default defineComponent({
  name: "CountdownComponent",
  props: {
    targetDate: {
      type: Date,
      required: true,
    },
  },
  emits: ["countdownFinished"],
  setup(props, { emit }) {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const isCountdownFinished = ref(false);

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = props.targetDate.getTime() - now.getTime();
      if (timeDiff > 0) {
        const totalSeconds = Math.floor(timeDiff / 1000);
        days.value = Math.floor(totalSeconds / (60 * 60 * 24));
        hours.value = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        minutes.value = Math.floor((totalSeconds % (60 * 60)) / 60);
        seconds.value = Math.floor(totalSeconds % 60);
        isCountdownFinished.value = false;
      } else {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        isCountdownFinished.value = true;
        emit("countdownFinished");
      }
    };

    onMounted(() => {
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      onUnmounted(() => clearInterval(interval));
    });

    return {
      days: computed(() => days.value),
      hours: computed(() => hours.value),
      minutes: computed(() => minutes.value),
      seconds: computed(() => seconds.value),
      isCountdownFinished: computed(() => isCountdownFinished.value),
    };
  },
});
</script>

<style scoped></style>
