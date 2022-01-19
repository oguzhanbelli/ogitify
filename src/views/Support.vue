
<template>
  <body
    class="bg-spotifyBlack w-screen h-screen font-spotify overflow-x-hidden"
  >
    <Header></Header>

    <section
      class="bg-white m-auto text-gray-800 flex flex-col justify-center px-5"
      style="
        background-image: url(https://support.scdn.co/web/_next/static/assets/57d357e/search-desktop.webp);
      "
    >
      <div
        class="
          flex flex-col
          mb-2
          justify-center
          mt-10
          md:mt-10
          lg:mt-32
          items-center
        "
      >
        <p
          class="
            text-5xl
            md:text-7xl
            text-white
            sm:text-[32px]
            overflow-hidden
            text-center
            mb-5
          "
        >
          Sana nasıl yardımcı <br />
          olabiliriz?
        </p>
      </div>

      <div class="flex justify-center items-center mb-10">
        <div
          class="
            flex
            bg-gray-100
            p-3
            lg:p-4
            w-full
            m-3
            md:w-[55%]
            lg:w-[55%]
        text-center items-center
        justify-content-center
            rounded-md
            overflow-hidden
          "
        >
        <div class="mr-1 mb-1">
                  <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-ytk21e-0 fJEWJR Search_formInputIcon___VuwA" aria-label="Arama icon"><line x1="15.54" y1="15.54" x2="20.41" y2="20.41" fill="none" stroke="#181818"></line><circle cx="10.5" cy="10.5" r="7" fill="none" stroke="#181818"></circle></svg>

        </div>
          <input
            class="
              bg-gray-100
              placeholder-gray-600
              text-xl
              font-spotifyBook
              outline-none
            "
            type="text"
            placeholder="Arama"
          />
        </div>
      </div>
      <div>
        <p
          class="
            text-gray-300
            font-spotifyBook
            text-base
            w-full
            m-2
            mb-5
            lg:hidden
            md:hidden md:w-[55%]
            lg:w-[55%]
          "
        >
          EN İYİ ÇÖZÜMLER
        </p>
        <ul
          class="
            m-2
            text-white text-lg
            mb-10
            lg:hidden
            md:hidden
            flex
            gap-4
            flex-col
            break-words
            font-spotifyBook
          "
        >
          <li class="hover:underline cursor-pointer">
            Oturum açma bilgilerini hatırlamıyorum
          </li>
          <li class="hover:underline cursor-pointer">
            Aile planı başlat veya plana katıl
          </li>
          <li class="hover:underline cursor-pointer">
            Parolayı sıfırlayamıyorum
          </li>
          <li class="hover:underline cursor-pointer">
            Bu Spotify e-postası gerçek mi?
          </li>
        </ul>
      </div>
      <div
        class="
          hidden
          flex-row
          justify-center
          gap-10
          mb-20
          mt-5
          
          items-center
          md:flex
          lg:flex
        "
      >
        <div class="flex flex-col gap-4 text-center items-center">
          <p class="text-gray-300 font-spotifyMedium text-sm">OTURUM AÇMA</p>
          <p
            class="
              text-white text-xl
              break-words
              hover:underline
              cursor-pointer
              font-spotifyBook
              sm:w-[60%]
              md:w-[70%]
              lg:w-[90%]
            "
          >
            Oturum açma bilgilerini hatırlamıyorum
          </p>
        </div>
        <div class="flex flex-col gap-4 text-center items-center">
          <p class="text-gray-300 font-spotifyMedium text-sm">
            KULLANILABİLİR PLANLAR
          </p>
          <p
            class="
              text-white text-xl
              break-words
              font-spotifyBook
              hover:underline
              cursor-pointer
              sm:w-[60%]
              md:w-[70%]
              lg:w-[90%]
            "
          >
            Aile planı başlat veya plana katıl
          </p>
        </div>
        <div
          class="
            flex flex-col
            gap-4
            mb-0
            sm:mb-2
            md:mb-2
            lg:mb-6
            text-center
            items-center
          "
        >
          <p class="text-gray-300 font-spotifyMedium text-sm">OTURUM AÇMA</p>
          <p
            class="
              text-white text-xl
              break-words
              font-spotifyBook
              hover:underline
              cursor-pointer
            "
          >
            Parolayı sıfırlayamıyorum
          </p>
        </div>
        <div class="flex flex-col gap-4 text-center items-center">
          <p class="text-gray-300 font-spotifyMedium text-sm">GÜVENLİK</p>
          <p
            class="
              text-white text-xl
              break-words
              font-spotifyBook
              hover:underline
              cursor-pointer
              sm:w-[60%]
              md:w-[70%]
              lg:w-[90%]
            "
          >
            Bu Spotify e-postası gerçek mi?
          </p>
        </div>
      </div>
    </section>

    <div class="bg-[#eee] hidden md:hidden lg:block px-20 py-20 text-black">
      <div
        class="
          w-full
          flex flex-col
          justify-center
          md:justify-evenly
          lg:justify-evenly
          md:flex-row
          lg:flex-row
          text-gray-800
        "
      >
        <div class="p-5 w-1/4 sm:w-4/12 md:w-1/5">
          <div class="text-2xl text-black font-medium mb-6">Hesap Yardimi</div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyBold
            "
          >
            Oturum açma
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Profil yardımı
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Hesap ayarları yardımı
          </a>
        </div>

        <div class="p-5 w-1/3 sm:w-4/12 md:w-1/5">
          <div class="text-2xl text-black font-medium">Ödeme Yardimi</div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Ödemeleri yönetme
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Ödeme yöntemleri
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Ödeme alma yardımı
          </a>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-1/5">
          <!-- Col Title -->
          <div class="text-2xl text-black font-medium mb-6">
            Uygulama Yardimi
          </div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Kullanılabilir planlar
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Plan ayarları yardımı
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Aile için Premium ve Kids
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Öğrenci için Premium
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Premium Duo
          </a>
        </div>
      </div>
      <div class="w-full flex justify-evenly flex-row text-gray-800 mt-10">
        <div class="p-5 w-1/4 sm:w-4/12 md:w-1/5">
          <div class="text-2xl text-black font-medium mb-6">
            Uygulama Yardimi
          </div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyBold
            "
          >
            Başlarken
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Uygulama ayarları
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Sorun giderme
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Çalma Listeleri
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Özellikler
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Sosyal medya özellikleri
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Sesli asistanlar
          </a>
        </div>

        <div class="p-5 w-1/3 sm:w-4/12 md:w-1/5">
          <div class="text-2xl text-black font-medium">Cihaz Yardimi</div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Hoparlörler
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Akıllı saatler
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            TV'ler
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Oyunlar
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Arabalar
          </a>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-1/5">
          <!-- Col Title -->
          <div class="text-2xl text-black font-medium mb-6">
            <p class="w-screen">Veri ve gizlilik yardimi</p>
          </div>

          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Dinleme gizliliği
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Veri ve gizlilik bilgileri
          </a>
        </div>
      </div>
    </div>

    <div  v-for="(acc, id) in accordions" :key="id" class="bg-white  lg:hidden">
      <div
        @click.prevent="acc.opened = !acc.opened"
        class="
          text-2xl
          font-medium
          bg-white
          mb-[0.3px]
  border
          border-b-1
          border-gray-500
          border-t-0
          hover:bg-gray-100 hover:bg-opacity-50
          duration-300
          p-4
          flex
          justify-between
        "
        role="alert"
      >
        {{ acc.text }}
        <i class="fas fa-chevron-down mt-1"></i>
      </div>

      <div v-if="acc.opened">
       
           <div class=" p-3 mr-2 bg-white w-full sm:w-4/12 md:w-full">
   

          <a
            to="#"
            class="
          
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyBold
            "
          >
            Oturum açma
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Profil yardımı
          </a>
          <a
            to="#"
            class="
              my-3
              block
              text-supportGreen
              hover:underline
              text-xl
              font-spotifyMedium
            "
          >
            Hesap ayarları yardımı
          </a>
        </div>
      </div>
    </div>
      <div class="bg-white">
      <div class="flex flex-col justify-center items-center h-[450px]">
        <p class="text-3xl md:text-5xl lg:text-5xl  mb-10">Topluluğu Ziyaret Et</p>
        <p class="text-[19px] font-spotifyBook w-[100%] md:w-[30%] lg:w-[30%] break-words text-center">
          Soruların mı var? Dünya çapında uzman hayranlardan oluşan
          Topluluğumuzda sorularının yanıtlarını bul!
        </p>

        <button
          class="
            mt-10
            bg-spotifyGreen
            px-5
            font-spotifyBold
            duration-300
            motion-safe:hover:scale-110
            py-4
            rounded-full
          "
        >
          Yanıtları Bul
        </button>
      </div>
    </div>


    <Footer></Footer>
  </body>
</template>


<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { inject, onBeforeMount, reactive, ref } from "vue";

const accordions = reactive([
  { id: 1, text: "Hesap yardimi", opened: false },
  { id: 2, text: "Ödeme yardimi", opened: false },
  { id: 3, text: "Uygulama yardimi", opened: false },
          {id:4,text:"Uygulama yardimi",opened:false},
                  {id:5,text:"Cihaz yardimi",opened:false},
                          {id:6,text:"Veri ve gizlilik yardimi",opened:false},
]);
const opened = ref(false);
let open = inject("open");
onBeforeMount(() => {
  open.value = false;
});
</script>
