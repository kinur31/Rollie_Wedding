<template>
  <div
    class="flex flex-col gap-4 p-6 items-center bg-[#F9F6F2]"
    data-aos="slide-up"
    data-aos-duration="1000"
  >
    <h2
      class="text-3xl font-bold text-center text-[#A46F64]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Wedding Gift
    </h2>
    <p
      class="text-center text-md text-gray-700"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      Doa restu Anda merupakan karunia terindah bagi kami. Dan jika memberi
      adalah ungkapan tanda kasih, dengan senang hati kami menerima kado secara
      cashless melalui:
    </p>

    <!-- Box for Bank BRI -->
    <div
      class="flex flex-col bg-white shadow-xl rounded-lg p-6 w-full max-w-md"
      data-aos="slide-up"
      data-aos-duration="1000"
    >
      <div class="flex flex-col items-center mb-4">
        <img
          src="@/assets/img/logo-bri.png"
          alt="Bank BRI"
          class="w-22 h-20"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
      <div class="flex flex-col items-center justify-between">
        <div
          class="flex items-center mb-2 md:mb-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span class="font-merriweather text-md">No. Rekening:</span>
          <span class="font-merriweather text-lg font-bold text-[#A46F64] ml-2">
            {{ briRekeningNumber }}
          </span>
        </div>
        <div class="flex items-center mb-2 md:mb-0">
          <span
            class="font-merriweather text-md"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            A/N <strong>{{ briAccountHolder }}</strong>
          </span>
        </div>
        <button
          class="mt-2 md:mt-0 flex items-center text-white bg-[#A46F64] hover:bg-[#8A4E44] rounded px-4 py-2"
          @click="copyRekening(briRekeningNumber)"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <font-awesome-icon :icon="['fas', 'copy']" class="mr-2" />
          Salin No. Rekening
        </button>
      </div>
    </div>

    <!-- Box for Bank Mandiri -->
    <div
      class="bg-white shadow-xl rounded-lg p-6 w-full max-w-md"
      data-aos="slide-up"
      data-aos-duration="1000"
    >
      <div class="flex flex-col items-center mb-4">
        <img
          src="@/assets/img/logo-mandiri.png"
          alt="Bank Mandiri"
          class="w-[200px] h-16"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
      <div class="flex flex-col items-center justify-between">
        <div
          class="flex items-center mb-2 md:mb-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span class="font-merriweather text-md">No. Rekening:</span>
          <span class="font-merriweather text-lg font-bold text-[#A46F64] ml-2">
            {{ mandiriRekeningNumber }}
          </span>
        </div>
        <div class="flex items-center mb-2 md:mb-0">
          <span
            class="font-merriweather text-md"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            A/N <strong>{{ mandiriAccountHolder }}</strong>
          </span>
        </div>
        <button
          class="mt-2 md:mt-0 flex items-center text-white bg-[#A46F64] hover:bg-[#8A4E44] rounded px-4 py-2"
          @click="copyRekening(mandiriRekeningNumber)"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <font-awesome-icon :icon="['fas', 'copy']" class="mr-2" />
          Salin No. Rekening
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  setup() {
    const briRekeningNumber = ref("678001000043527");
    const briAccountHolder = ref("Rollie Sofia Hakim");
    const mandiriRekeningNumber = ref("1390017289517");
    const mandiriAccountHolder = ref("Kurniasih");

    const copyRekening = async (rekeningNumber) => {
      try {
        await navigator.clipboard.writeText(rekeningNumber);
        toast(`Nomor rekening berhasil disalin: ${rekeningNumber}`, {
          type: "success",
          position: "top-center",
          transition: "slide",
          autoClose: 3000,
        });
      } catch (err) {
        console.error("Gagal menyalin: ", err);

        // Fallback for older browsers or mobile
        const input = document.createElement("input");
        input.value = rekeningNumber;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        toast("Nomor rekening berhasil disalin.", {
          type: "success",
          position: "top-center",
          transition: "slide",
          autoClose: 3000,
        });
      }
    };

    return {
      briRekeningNumber,
      briAccountHolder,
      mandiriRekeningNumber,
      mandiriAccountHolder,
      copyRekening,
    };
  },
};
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

p {
  font-family: "Roboto", sans-serif;
}

button {
  font-family: "Roboto", sans-serif;
}
</style>
