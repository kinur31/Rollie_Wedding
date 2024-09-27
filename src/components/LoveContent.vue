<template>
  <section
    id="love"
    class="h-100vh flex flex-col items-center justify-center bg-[#F9F6F2] py-24"
    :style="{
      backgroundImage: `url(${bgBrideGroom})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="flex flex-col items-center justify-between h-100vh">
      <div
        class="flex flex-col items-center justify-center text-center px-4"
        style="color: #86644d"
      >
        <h2
          class="text-lg font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
        </h2>
        <p class="text-md mb-4" data-aos="fade-up" data-aos-delay="400">
          Assalamualaikum Warahmatullahi Wabarakaatuh
        </p>
        <p class="text-md mb-4" data-aos="fade-up" data-aos-delay="600">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya
          berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami
          bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara
          pernikahan kami:
        </p>
      </div>

      <div
        class="flex flex-start relative bg-gradient-to-b from-[#F6CBD0] to-[#FFE4E1] p-6 rounded-t-full shadow-lg w-[205px] h-[250px] flex flex-col items-center justify-center border-4 border-white overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          :src="brideImage"
          alt="Bride"
          class="absolute top-4 w-full h-auto object-cover"
        />
        <h2
          class="absolute bottom-0 mb-2 text-4xl font-bold text-center text-white italic z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Rollie
        </h2>
      </div>
      <div
        class="flex text-gray-800 flex-col items-center justify-center"
        style="color: #86644d"
      >
        <p
          class="mt-2 font-merriweather text-center text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Rollie Sofia Hakim
        </p>
        <p
          class="font-merriweather text-center text-md max-w-xs mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Putri pertama dari Bapak Jowahir Ali & Ibu Kurniasih
        </p>
        <a
          href="https://instagram.com/rolliesofiahakim"
          target="_blank"
          class="flex items-center justify-center mt-2 text-lg text-pink-500 hover:text-blue-700"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="mr-1"
            fill="currentColor"
          >
            <path
              d="M12 2.163c3.198 0 3.576.012 4.84.07 1.287.059 2.044.27 2.51.45.663.27 1.174.635 1.69 1.153.516.517.883 1.027 1.153 1.69.18.466.391 1.223.45 2.51.058 1.264.07 1.642.07 4.84s-.012 3.576-.07 4.84c-.059 1.287-.27 2.044-.45 2.51-.27.663-.635 1.174-1.153 1.69-.517.516-1.027.883-1.69 1.153-.466.18-1.223.391-2.51.45-1.264.058-1.642.07-4.84.07s-3.576-.012-4.84-.07c-1.287-.059-2.044-.27-2.51-.45-.663-.27-1.174-.635-1.69-1.153-.516-.517-.883-1.027-1.153-1.69-.18-.466-.391-1.223-.45-2.51C2.175 15.414 2.163 15.036 2.163 12s.012-3.576.07-4.84c.059-1.287.27-2.044.45-2.51.27-.663.635-1.174 1.153-1.69.517-.516 1.027-.883 1.69-1.153.466-.18 1.223-.391 2.51-.45C8.424 2.175 8.802 2.163 12 2.163zm0-2.163c-3.267 0-3.669.012-4.95.072-1.24.058-2.146.28-2.91.57-.77.293-1.459.704-2.1 1.345-.641.641-1.052 1.33-1.345 2.1-.292.764-.513 1.67-.571 2.91-.06 1.281-.072 1.683-.072 4.95s.012 3.669.072 4.95c.058 1.24.28 2.146.571 2.91.293.77.704 1.459 1.345 2.1.641.641 1.33 1.052 2.1 1.345.764.292 1.67.513 2.91.571 1.281.06 1.683.072 4.95.072s3.669-.012 4.95-.072c1.24-.058 2.146-.28 2.91-.571.77-.293 1.459-.704 2.1-1.345.641-.641 1.052-1.33 1.345-2.1.292-.764.513-1.67.571-2.91.06-1.281.072-1.683.072-4.95s-.012-3.669-.072-4.95c-.058-1.24-.28-2.146-.571-2.91-.293-.77-.704-1.459-1.345-2.1-.641-.641-1.33-1.052-2.1-1.345-.764-.292-1.67-.513-2.91-.571C15.669.012 15.267 0 12 0zm0 5.838c-3.287 0-5.955 2.668-5.955 5.955s2.668 5.955 5.955 5.955 5.955-2.668 5.955-5.955-2.668-5.955-5.955-5.955zm0 10.11c-2.288 0-4.145-1.857-4.145-4.145 0-2.288 1.857-4.145 4.145-4.145 2.288 0 4.145 1.857 4.145 4.145 0 2.288-1.857 4.145-4.145 4.145zm5.911-10.11c-.843 0-1.526.683-1.526 1.526 0 .843.683 1.526 1.526 1.526.843 0 1.526-.683 1.526-1.526 0-.843-.683-1.526-1.526-1.526z"
            />
          </svg>
          @Rollie
        </a>
      </div>
    </div>
    <p
      class="my-4 font-merriweather text-center text-3xl font-semibold"
      data-aos="fade-up"
      data-aos-delay="200"
      style="color: #86644d"
    >
      &
    </p>
    <div class="flex flex-col items-center justify-between">
      <div
        class="flex flex-start relative bg-gradient-to-b from-[#F6CBD0] to-[#FFE4E1] p-6 rounded-t-full shadow-lg w-[205px] h-[250px] flex flex-col items-center justify-center border-4 border-white overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          :src="groomImage"
          alt="Groom"
          class="absolute top-4 w-full h-auto object-cover"
        />
        <h2
          class="absolute bottom-0 mb-2 text-4xl font-bold text-center text-white italic z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Rendi
        </h2>
      </div>
      <div
        class="flex text-gray-800 flex-col items-center justify-center"
        style="color: #86644d"
      >
        <p
          class="mt-2 font-merriweather text-center text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Rendi Ananda
        </p>
        <p
          class="font-merriweather text-center text-md max-w-xs mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Putra pertama dari Bapak D. Budi Yuwono & Ibu Dian Anggraini
        </p>
        <a
          href="https://instagram.com/rendygst"
          target="_blank"
          class="flex items-center justify-center mt-2 text-lg text-pink-500 hover:text-blue-700"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="mr-1"
            fill="currentColor"
          >
            <path
              d="M12 2.163c3.198 0 3.576.012 4.84.07 1.287.059 2.044.27 2.51.45.663.27 1.174.635 1.69 1.153.516.517.883 1.027 1.153 1.69.18.466.391 1.223.45 2.51.058 1.264.07 1.642.07 4.84s-.012 3.576-.07 4.84c-.059 1.287-.27 2.044-.45 2.51-.27.663-.635 1.174-1.153 1.69-.517.516-1.027.883-1.69 1.153-.466.18-1.223.391-2.51.45-1.264.058-1.642.07-4.84.07s-3.576-.012-4.84-.07c-1.287-.059-2.044-.27-2.51-.45-.663-.27-1.174-.635-1.69-1.153-.516-.517-.883-1.027-1.153-1.69-.18-.466-.391-1.223-.45-2.51C2.175 15.414 2.163 15.036 2.163 12s.012-3.576.07-4.84c.059-1.287.27-2.044.45-2.51.27-.663.635-1.174 1.153-1.69.517-.516 1.027-.883 1.69-1.153.466-.18 1.223-.391 2.51-.45C8.424 2.175 8.802 2.163 12 2.163zm0-2.163c-3.267 0-3.669.012-4.95.072-1.24.058-2.146.28-2.91.57-.77.293-1.459.704-2.1 1.345-.641.641-1.052 1.33-1.345 2.1-.292.764-.513 1.67-.571 2.91-.06 1.281-.072 1.683-.072 4.95s.012 3.669.072 4.95c.058 1.24.28 2.146.571 2.91.293.77.704 1.459 1.345 2.1.641.641 1.33 1.052 2.1 1.345.764.292 1.67.513 2.91.571 1.281.06 1.683.072 4.95.072s3.669-.012 4.95-.072c1.24-.058 2.146-.28 2.91-.571.77-.293 1.459-.704 2.1-1.345.641-.641 1.052-1.33 1.345-2.1.292-.764.513-1.67.571-2.91.06-1.281.072-1.683.072-4.95s-.012-3.669-.072-4.95c-.058-1.24-.28-2.146-.571-2.91-.293-.77-.704-1.459-1.345-2.1-.641-.641-1.33-1.052-2.1-1.345-.764-.292-1.67-.513-2.91-.571C15.669.012 15.267 0 12 0zm0 5.838c-3.287 0-5.955 2.668-5.955 5.955s2.668 5.955 5.955 5.955 5.955-2.668 5.955-5.955-2.668-5.955-5.955-5.955zm0 10.11c-2.288 0-4.145-1.857-4.145-4.145 0-2.288 1.857-4.145 4.145-4.145 2.288 0 4.145 1.857 4.145 4.145 0 2.288-1.857 4.145-4.145 4.145zm5.911-10.11c-.843 0-1.526.683-1.526 1.526 0 .843.683 1.526 1.526 1.526.843 0 1.526-.683 1.526-1.526 0-.843-.683-1.526-1.526-1.526z"
            />
          </svg>
          @Reandi
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/img/Background_Content.jpg";
import bgBrideGroom from "../assets/img/bg-bride-groom.jpg";

export default defineComponent({
  name: "LoveContent",
  data() {
    return {
      backgroundImage: backgroundImage,
      bgBrideGroom: bgBrideGroom,
      brideImage: require("@/assets/img/bride.png"),
      groomImage: require("@/assets/img/groom.png"),
    };
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
      });
    });
  },
});
</script>
<style scoped>
.section {
  padding: 40px;
  background-color: #f0f0f0;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
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

@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.font-merriweather {
  font-family: "Merriweather", serif;
}
</style>
