<template>
  <div
    class="relative w-full h-screen flex flex-col bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <transition name="fade-slide">
      <div
        v-if="!showInvitation"
        class="absolute inset-0 flex flex-col justify-between items-center bg-black bg-opacity-80 text-white p-6 md:p-12"
        key="main-content"
      >
        <div class="flex flex-col items-center justify-center mt-16">
          <h1
            class="text-xl md:text-5xl font-serif mb-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            The Wedding Of
          </h1>
          <h2
            class="text-2xl md:text-5xl font-cursive font-black"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {{ brideName }} & {{ groomName }}
          </h2>
          <p
            class="text-md md:text-xl mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {{ weddingDate }}
          </p>
          <CountdownComponent
            :targetDate="weddingDateObject"
            @countdownFinished="showButton = true"
            class="mt-4"
          />
        </div>

        <div
          class="flex flex-col items-center mb-40 md:mb-14"
          v-if="showButton"
        >
          <div class="text-center mb-4">
            <p
              class="text-md md:text-lg mb-2"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Kepada Bapak/Ibu/Saudara/i
            </p>
            <p
              class="text-md md:text-lg"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              {{ recipientName }}
            </p>
          </div>
          <button
            @click="openInvitation"
            class="px-6 py-3 bg-brown-800 text-white rounded-full hover:bg-brown-900 transition flex items-center gap-2"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="showInvitation"
        class="w-full h-full bg-white"
        key="invitation-content"
      >
        <WeddingContent />
        <LoveContent />
        <WeddingDate />
        <PhotoGallery />
        <BankTransfer />
        <ReservationForm @addReservation="addReservation" />
        <ReservationList :reservations="reservations" />
        <WeddingFooter />
        <Navbar />
      </div>
    </transition>

    <audio
      ref="audioElement"
      :src="backgroundMusicSrc"
      loop
      style="display: none"
    ></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import CountdownComponent from "../components/Countdown.vue";
import WeddingContent from "@/components/WeddingContent.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import BankTransfer from "@/components/BankTransfer.vue";
import ReservationForm from "@/components/ReservationForm.vue";
import ReservationList from "@/components/ReservationList.vue";
import WeddingFooter from "@/components/WeddingFooter.vue";
import LoveContent from "@/components/LoveContent.vue";
import Navbar from "@/components/Navbar.vue";
import WeddingDate from "@/components/WeddingDate.vue";
import backgroundImagePath from "../assets/img/Background_Depan.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  name: "HomeView",
  components: {
    CountdownComponent,
    WeddingContent,
    WeddingDate,
    LoveContent,
    PhotoGallery,
    BankTransfer,
    ReservationForm,
    ReservationList,
    WeddingFooter,
    Navbar,
  },
  setup() {
    const backgroundImage = backgroundImagePath;
    const brideName = "Rollie";
    const groomName = "Reandi";
    const weddingDate = "06 Oktober 2024";
    const weddingDateObject = new Date("2024-10-06T08:00:00");
    const showInvitation = ref(false);
    const showButton = ref(false);
    const audioElement = ref<HTMLAudioElement | null>(null);
    const reservations = ref<
      Array<{
        name: string;
        message: string;
        attendance: string;
        timestamp: number;
      }>
    >([]);
    const recipientName = ref(
      new URLSearchParams(window.location.search).get("nama") || "Tamu Undangan"
    );

    const openInvitation = () => {
      showInvitation.value = true;
      audioElement.value
        ?.play()
        .catch((error) => console.error("Failed to play audio:", error));
    };

    const loadReservations = () => {
      const storedReservations = JSON.parse(
        localStorage.getItem("reservations") || "[]"
      ) as Array<{
        name: string;
        message: string;
        attendance: string;
        timestamp: number;
      }>;
      reservations.value = Array.from(
        new Map(
          storedReservations.map((item) => [
            item.name + item.message + item.attendance,
            item,
          ])
        ).values()
      ).sort((a, b) => b.timestamp - a.timestamp);
    };

    const addReservation = (reservation: {
      name: string;
      message: string;
      attendance: string;
    }) => {
      const existingReservations = JSON.parse(
        localStorage.getItem("reservations") || "[]"
      );
      const isDuplicate = existingReservations.some(
        (r: { name: string; message: string; attendance: string }) =>
          r.name === reservation.name &&
          r.message === reservation.message &&
          r.attendance === reservation.attendance
      );

      if (!isDuplicate) {
        localStorage.setItem(
          "reservations",
          JSON.stringify([
            ...existingReservations,
            { ...reservation, timestamp: Date.now() },
          ])
        );
        loadReservations();
      } else {
        alert("Reservation already exists!");
      }
    };

    onMounted(() => {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
      loadReservations();
    });

    return {
      backgroundImage,
      brideName,
      groomName,
      weddingDate,
      weddingDateObject,
      showInvitation,
      showButton,
      recipientName,
      openInvitation,
      reservations,
      addReservation,
      audioElement,
      backgroundMusicSrc: new URL(
        "@/assets/music/background-music.mp3",
        import.meta.url
      ).toString(),
    };
  },
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter,
.fade-slide-leave-to,
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
p,
button {
  font-family: "Roboto", sans-serif;
}
</style>
