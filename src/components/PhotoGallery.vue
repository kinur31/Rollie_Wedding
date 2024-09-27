<template>
  <section
    id="gallery"
    class="flex flex-col gap-6 items-center justify-center p-6"
  >
    <div
      class="content w-full max-w-screen-lg"
      data-aos="slide-up"
      data-aos-duration="1000"
    >
      <div class="flex gap-4 items-center justify-center">
        <div
          class="photo-container bg-gray-200 aspect-square h-[256px] flex items-center justify-center cursor-pointer"
          @click="openModal(photo1)"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img :src="photo1" class="photo-img" alt="Photo 1" />
        </div>
        <div class="flex flex-col gap-4">
          <div
            class="photo-container bg-gray-200 aspect-square w-[120px] flex items-center justify-center cursor-pointer"
            @click="openModal(photo2)"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img :src="photo2" class="photo-img" alt="Photo 2" />
          </div>
          <div
            class="photo-container bg-gray-200 aspect-square w-[120px] flex items-center justify-center cursor-pointer"
            @click="openModal(photo3)"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img :src="photo3" class="photo-img" alt="Photo 3" />
          </div>
        </div>
      </div>

      <div class="flex gap-4 justify-center items-center py-4">
        <div
          class="photo-container bg-gray-200 aspect-square w-fit flex items-center justify-center cursor-pointer"
          @click="openModal(photo4)"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img :src="photo4" class="photo-img" alt="Photo 4" />
        </div>
        <div
          class="photo-container bg-gray-200 aspect-square w-fit flex items-center justify-center cursor-pointer"
          @click="openModal(photo5)"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img :src="photo5" class="photo-img" alt="Photo 5" />
        </div>
      </div>

      <div class="flex gap-4 items-center justify-center">
        <div class="flex flex-col gap-4">
          <div
            class="photo-container bg-gray-200 aspect-square w-[120px] flex items-center justify-center cursor-pointer"
            @click="openModal(photo6)"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img :src="photo6" class="photo-img" alt="Photo 6" />
          </div>
          <div
            class="photo-container bg-gray-200 aspect-square w-[120px] flex items-center justify-center cursor-pointer"
            @click="openModal(photo7)"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img :src="photo7" class="photo-img" alt="Photo 7" />
          </div>
        </div>
        <div
          class="photo-container bg-gray-200 aspect-square h-[256px] flex items-center justify-center cursor-pointer"
          @click="openModal(photo8)"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img :src="photo8" class="photo-img" alt="Photo 8" />
        </div>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center overflow-hidden z-50"
      @click="closeModal"
    >
      <div class="modal-content" @click.stop>
        <img :src="currentPhoto" alt="Fullscreen Photo" class="modal-img" />
        <button class="close-button" @click.stop="closeModal">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Importing photos
import photo1 from "@/assets/img/photo1.jpg";
import photo2 from "@/assets/img/photo2.jpg";
import photo3 from "@/assets/img/photo3.jpg";
import photo4 from "@/assets/img/photo4.jpg";
import photo5 from "@/assets/img/photo5.jpg";
import photo6 from "@/assets/img/photo6.jpg";
import photo7 from "@/assets/img/photo7.jpg";
import photo8 from "@/assets/img/photo8.jpg";

const isModalOpen = ref(false);
const currentPhoto = ref<string>("");

function openModal(photoSrc: string) {
  currentPhoto.value = photoSrc;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Disable scrolling
}

// Close modal
function closeModal() {
  isModalOpen.value = false;
  document.body.style.overflow = ""; // Enable scrolling
}
</script>

<style scoped>
.photo-container {
  transition: transform 0.3s ease;
  overflow: hidden;
}
.photo-img {
  transition: transform 0.3s ease;
  transform: scale(1);
}
.photo-container:hover .photo-img {
  transform: scale(1.1);
}
.modal-content {
  position: relative;
  width: 80vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.close-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
