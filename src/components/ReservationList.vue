<template>
  <div class="w-full max-w-4xl mx-auto p-8 pb-20">
    <h2 class="text-2xl font-bold mb-4 text-center">Reservation List</h2>
    <div v-if="reservations.length" class="space-y-4">
      <div
        v-for="(reservation, index) in reservations"
        :key="index"
        class="flex items-start p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
      >
        <div class="w-12 h-12 flex items-center justify-center mr-4">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-gray-600 text-3xl"
          />
        </div>

        <div class="flex-grow">
          <div class="flex items-center gap-2">
            <p class="font-semibold text-lg">{{ reservation.name }}</p>
            <font-awesome-icon
              :icon="getStatusIcon(reservation.attendance)"
              :class="{
                'text-green-500': reservation.attendance === 'Hadir',
                'text-red-500': reservation.attendance === 'Tidak Hadir',
                'text-orange-500': reservation.attendance === 'Masih Ragu',
              }"
              class="text-2xl"
            />
          </div>
          <p class="text-gray-700 mt-1 break-words text-justify leading-tight">
            {{ reservation.message }}
          </p>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">No reservations yet.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "ReservationList",
  components: {
    FontAwesomeIcon,
  },
  props: {
    reservations: {
      type: Array as PropType<
        { name: string; message: string; attendance: string }[]
      >,
      required: true,
    },
  },
  methods: {
    getStatusIcon(attendance: string) {
      switch (attendance) {
        case "Hadir":
          return ["fas", "check-circle"];
        case "Tidak Hadir":
          return ["fas", "times-circle"];
        case "Masih Ragu":
        default:
          return ["fas", "question-circle"];
      }
    },
  },
});
</script>

<style scoped>
p {
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
</style>
