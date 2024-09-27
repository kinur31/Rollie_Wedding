<template>
  <section
    id="weddingDate"
    class="flex flex-col md:flex-row gap-6 p-8 items-center justify-center bg-[#F9F6F2]"
  >
    <div
      class="flex flex-col bg-white shadow-xl rounded-lg p-6 mb-4 w-full max-w-md i"
      data-aos="slide-up"
      data-aos-duration="1000"
    >
      <h2
        class="text-3xl font-bold text-center mb-4 text-[#A46F64]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Akad Nikah
      </h2>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <font-awesome-icon
          :icon="['fas', 'calendar']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md">Tanggal: 06 Desember 2024</span>
      </div>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <font-awesome-icon
          :icon="['fas', 'clock']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md"
          >Waktu: 10:00 WIB - Selesai</span
        >
      </div>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md"
          >Lokasi: Masjid Jami' Baiturahmah</span
        >
      </div>
      <a
        href="https://maps.app.goo.gl/ietWSoAjkXNaggWV9?g_st=iw"
        target="_blank"
        class="mt-4 inline-block bg-[#A46F64] w-fit text-white py-2 px-4 rounded hover:bg-[#8A4E44] transition duration-300"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="text-white mr-2"
        />
        Petunjuk Lokasi
      </a>
    </div>

    <!-- Box Resepsi -->
    <div
      class="flex flex-col bg-white shadow-xl rounded-lg p-6 w-full max-w-md transition-transform transform hover:scale-105"
      data-aos="slide-up"
      data-aos-duration="1000"
    >
      <h2
        class="text-3xl font-bold text-center mb-4 text-[#A46F64]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Resepsi
      </h2>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <font-awesome-icon
          :icon="['fas', 'calendar']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md">Tanggal: 06 Desember 2024</span>
      </div>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <font-awesome-icon
          :icon="['fas', 'clock']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md"
          >Waktu: 08:00 WIB - Selesai</span
        >
      </div>

      <div
        class="flex items-center mb-2"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="text-[#A46F64] mr-2"
        />
        <span class="font-merriweather text-md">Lokasi: Nusadadi</span>
      </div>

      <a
        href="https://maps.app.goo.gl/oPpnsWJ4Z7kyxe8F7?g_st=iw"
        target="_blank"
        class="w-fit mt-4 inline-block bg-[#A46F64] text-white py-2 px-4 rounded hover:bg-[#8A4E44] transition duration-300"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="text-white mr-2"
        />
        Petunjuk Lokasi
      </a>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
/* CSS for Vue transition effects */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

h1 {
  font-family: "Merriweather", serif;
}

h2 {
  font-family: "Dancing Script", cursive;
}

p {
  font-family: "Roboto", sans-serif;
}

button {
  font-family: "Roboto", sans-serif;
}
</style>
