<template>
  <section
    id="home"
    data-aos="slide-up"
    data-aos-duration="800"
    class="section w-full h-[615px] bg-cover bg-center flex flex-col items-center justify-end text-white"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10 text-center">
      <h1
        class="text-md md:text-5xl font-serif mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        The Wedding Of
      </h1>
      <h2
        class="text-4xl md:text-6xl font-cursive font-black"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Rollie & Rendi
      </h2>
      <p
        class="text-lg md:text-2xl mb-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        06 Oktober 2024
      </p>
      <blockquote
        class="relative mx-auto text-md md:text-xl italic p-4 rounded-lg bg-gradient-to-t from-brown-700 to-transparent w-full md:max-w-2xl md:bottom-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang."
      </blockquote>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import backgroundImage from "../assets/img/Background_Content.jpg";

export default defineComponent({
  data() {
    return {
      backgroundImage: backgroundImage,
    };
  },
});
</script>

<style scoped>
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
