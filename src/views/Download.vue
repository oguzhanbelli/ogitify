
<template>
  <body
    class="bg-spotifyBlack w-screen h-screen font-spotify overflow-x-hidden "
  >
    <Header></Header>

    <section @click="open = false"
      class="
        bg-downloadGreen
        m-auto
        text-gray-800
        flex flex-col
        justify-center
        items-center
      "
    >
      <div class="flex justify-center items-center h-auto mt">
        <div class="relative justify-center flex items-center mt-14">
          <img
            class="w-36 h-36"
            src="https://www-growth.scdn.co/static/download/laptop.svg"
            alt=""
          />
          <img
            class="z-10 absolute top-[55px] left-[55px] w-9 h-9"
            src="https://www-growth.scdn.co/static/download/green-circle.svg"
            alt=""
          />
          <img
            class="z-10 absolute top-[68px] left-[66px] w-3 h-3"
            src="https://www-growth.scdn.co/static/download/green-success-check.svg"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col mb-24 justify-center items-center">
        <p
          class="
            text-3xl
            md:text-5xl
            lg:text-5xl
            text-black
            mt-4
            text-center
            mb-5
          "
        >
          Ogitify'ı İndir
        </p>
        <p class="font-spotifyMedium text-base mt-3">
          Cihazında milyonlarca şarkı ve podcast çal.
        </p>

        <button
          class="
            bg-white
            px-8
            mt-8
            py-3
            rounded-full
            duration-100
            motion-safe:hover:scale-110
          "
        >
          İndir
        </button>
      </div>
    </section>

    <div class="bg-[#eee] px-20 py-20 text-black">
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
        <div class="text-center justify-center items-center">
          <p class="text-[20px] lg:text-[32px] md:text-[32px]">
            Müziğini cep telefonuna ve tablete de taşı.
          </p>

          <p class="mt-2 text-base font-spotifyBook p-[1em]">
            Telefonunda veya tabletinde dinlemek ücretsiz, kolay ve
            eğlencelidir.
          </p>
          <div class="flex mt-2 flex-col justify-center items-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="cursor-pointer">
                <img
                  src="https://www-growth.scdn.co/static/badges/apple/tr.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer">
                <img
                  src="https://www-growth.scdn.co/static/badges/google/tr.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer">
                <img
                  src="https://www-growth.scdn.co/static/badges/microsoft-windows/tr.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#222326] ">
      <div class="flex flex-col justify-center items-center text-center">
        <div
          class="
            max-w-xl
            w-[800px]
            mt-10
            flex
            justify-center
            items-center
            text-center
          "
        >
          <img
            src="https://www-growth.scdn.co/static/download/all-devices.svg"
            class="text-white w-9/12 md:w-full lg:w-full"
            alt=""
          />
        </div>
        
          <p class="text-[32px] mt-4 text-white">
            Tek hesapla her yerde dinle.
          </p>
          
          
        <ul class="list-none list-inside uppercase gap-3  md:list-disc lg:list-disc md:gap-2 lg:gap-2 flex flex-col md:flex-row  lg:flex-row font-spotifyBook text-base leading-4   mt-10 mb-20 ">
        
               <div class="text-white ">
                      cep telefonu
                  </div>
                    <li class="ml-2 text-spotifyGreen"> 
                  </li> 
                  <div class="text-white">
                      BİLGİSAYAR
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
               
                  <div class="text-white">
                      tablet
                  </div>
                    <li class="ml-2 text-spotifyGreen ">
                  </li>    
                      <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      araç
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
                   <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      PLAYSTATİON® 
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
                   <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      XBOX 
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
                     <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      tv 
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
                    <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      hoparlör 
                  </div>
                    <li class="ml-2 text-spotifyGreen">
                  </li> 
                     <div class="text-opacity-80 text-spotifyGreen hover:text-spotifyGreen underline cursor-pointer  ">
                      web player 
                  </div>
                    
                    
        </ul>
       
      </div>
    
      
    </div>
    <Footer></Footer>
  </body>
</template>


<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { inject, onBeforeMount, reactive, ref } from "vue";

let open = inject("open");
onBeforeMount(() => {
  open.value = false;
});
</script>
