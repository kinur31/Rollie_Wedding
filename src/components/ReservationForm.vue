<template>
  <section
    id="comments"
    class="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md"
  >
    <h2 class="text-2xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
      Reservation Form
    </h2>
    <form
      @submit.prevent="submitForm"
      class="space-y-4"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div class="flex flex-col">
        <label for="name" class="text-lg font-medium">Nama:</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Masukkan Nama Anda"
          class="p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="text-lg font-medium">Pesan:</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Masukkan Pesan"
          class="p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label for="attendance" class="text-lg font-medium">Konfirmasi:</label>
        <select
          id="attendance"
          v-model="form.attendance"
          class="p-2 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
          <option value="Masih Ragu">Masih Ragu</option>
        </select>
      </div>
      <button
        type="submit"
        class="px-4 py-2 bg-brown-700 text-white rounded hover:bg-brown-800"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReservationForm",
  emits: ["addReservation"],
  setup(_, { emit }) {
    const form = ref({
      name: "",
      message: "",
      attendance: "",
    });

    const submitForm = () => {
      if (form.value.name && form.value.attendance) {
        const reservationWithTimestamp = {
          ...form.value,
          timestamp: Date.now(),
        };

        emit("addReservation", reservationWithTimestamp);

        form.value = { name: "", message: "", attendance: "" };
      }
    };

    return {
      form,
      submitForm,
    };
  },
});
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
