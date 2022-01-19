<template>
  <body class="bg-spotifyBlack w-screen h-screen font-spotify overflow-x-hidden">
  <Header></Header>
    <section
      class="
        bg-scroll
        
        bg-bg-sm
        lg:bg-bg-lg
     md:bg-bg-md
        bg-no-repeat
        w-full
        bg-spotifyBlue
        h-[800px]
        
        
      "
      @click.prevent="open = false"
   
      style="
        background-position: 46% 24%;
        background-size: 175%;
        -webkit-box-pack: center;
      "
    >
      <div class="flex justify-center flex-col items-center h-full">
        <div
          class="
            text-spotifyGreen
            leading-snug
            text-5xl
            place-items-center
            font-spotify
            md:text-8xl
            mobilesm:text-9xl
            lg:text-9xl
            sm:text-8xl
            tracking-tighter
          "
        >
          Dinlemek <br />her şeydir
        </div>
        <div class="flex mt-10 justify-center items-center">
          <span class="md:text-xl md:w-[100%] lg:w-[100%] lg:text-base text-md w-[90%] text-center text-spotifyGreen font-spotifyMedium">
            Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.
          </span>
        </div>
        <div>
          <button
            class="
              bg-spotifyGreen
              focus:ring-2
              p-2
              transition-all
              motion-safe:hover:scale-110
              focus:ring-white
              rounded-3xl
              mt-4
              text-spotifyBlue
              w-[200px]
              duration-500
              h-[50px]
            "
          >
            OGITIFY FREE'Yİ EDİN
          </button>
        </div>
      </div>
    </section>

  <Footer></Footer>
  </body>
</template>

<script setup>
import { ref, provide,inject, onBeforeMount } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'




let open = inject('open')
















</script>