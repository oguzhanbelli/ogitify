<template>
  <nav
    class="
      font-spotifyMedium
      grid grid-flow-col grid-cols-1
      lg:flex
      justify-between
      md:py-4
      overflow-hidden
      bg-spotifyBlack
      shadow
    "
  >
    <div class="flex justify-center items-center mt-0 pb-3 ml-20">
      <router-link class="flex items-center mt-2 justify-center" to="/">
        <i class="fab fa-spotify fa-2x mr-2 mt-1 text-white"></i>
        <div
          
          class="cursor-pointer font-spotifyMedium text-white mt-1 text-2xl"
          >Ogitify</div
        >
      </router-link>
    </div>
    <div class="lg:hidden">
      <div class="fixed top-0 inset-x-0 flex z-40">
        <!-- Sidebar -->
        <div
          class="absolute flex top-0 h-screen z-20"
          :class="[right ? 'right-0 flex-row' : 'right-0 flex-row-reverse']"
        >
          <!-- Sidebar Content -->
          <div
            ref="content"
            class="
              transition-all
              duration-700
              bg-spotifyBlack
              overflow-hidden
              flex
              items-center
              justify-center
            "
            :class="[open ? 'max-w-lg' : 'max-w-0']"
          >
            <div v-if="open" class="absolute top-0 right-0 p-5 text-white">
              <button @click.prevent="toggle">
                <i class="fas fa-times fa-2x"></i>
              </button>
            </div>
            <div class="flex w-[300px] md:w-[400px] bg-spotifyBlack text-white">
              <div class="flex justify-start ml-5 absolute top-10 my-auto">
                <div
                  class="flex flex-col justify-start items-center ml-5 gap-6"
                >
                  <router-link
                    to="/premium"
                    class="
                      text-5xl
                      no-underline
                      text-white
                      hover:text-spotifyGreen
                    "
                    >Premium</router-link
                  >
                  <router-link
                    to="/support"
                    class="
                      text-5xl
                      no-underline
                      text-white
                      hover:text-spotifyGreen
                    "
                    >Destek
                  </router-link>
                  <router-link
                    to="/download"
                    class="
                      text-5xl
                      no-underline
                      text-white
                      hover:text-spotifyGreen
                    "
                    >İndir
                  </router-link>
                  <a
                    href="/one"
                    class="
                      text-3xl
                      no-underline
                      font-spotifyMedium
                      ml-4
                      text-white
                      pointer-events-none
                      rotate-90
                    "
                    >|</a
                  >
                  <router-link
                    to="/register"
                    class="
                      text-4xl
                      no-underline
                      text-white
                      hover:text-spotifyGreen
                    "
                    >Kaydol</router-link
                  >
                  <router-link
                    to="/login"
                    class="
                      text-4xl
                      no-underline
                      text-white
                      hover:text-spotifyGreen
                    "
                    >Oturum Aç</router-link
                  >
                </div>
              </div>
              <div class="absolute bottom-0">
                <div
                  class="
                    flex
                    justify-center
                    sm:mr-3
                    mt-2
                    center
                    pb-3
                    ml-10
                    sm:mb-0
                  "
                >
                  <div class="flex items-center max-h-10 justify-center">
                    <i class="fab fa-spotify fa-2x mr-2 mt-1 text-white"></i>
                    <span
                      class="
                        cursor-pointer
                        font-spotifyMedium
                        text-white
                        mt-1
                        text-2xl
                      "
                      >Ogitify</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <slot></slot>
          </div>
        </div>

        <transition name="fade">
          <!-- Dimmer -->
          <div
            v-if="dimmer && open"
            @click="toggle"
            class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
          />
        </transition>
      </div>
      <div class="">
        <button
          @click.prevent="toggle"
          class="
            navbar-burger
            text-white
            p-3
            mr-5
            sm:mr-10
            mb-2
            md:mr-10
            mt-2
            lg:mr-10
          "
        
        >
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div>
      <!--Sidebar with Dimmer -->

      <!-- Page Content -->
    </div>
    <div
      class="
        lg:flex
        mobilesm
        :hidden
        gap-8
        mr-44
        items-center
        sm:justify-around
        hidden
        md:justify-evenly
        lg:justify-arround
      "
    >
      <router-link
        to="/premium"
        class="text-lg no-underline text-white hover:text-spotifyGreen"
        >Premium</router-link
      >
      <router-link
        to="/support"
        class="text-lg no-underline text-white hover:text-spotifyGreen"
        >Destek
      </router-link>
      <router-link
        to="/download"
        class="text-lg no-underline text-white hover:text-spotifyGreen"
        >İndir
      </router-link>
      <a
        href="/one"
        class="
          text-lg
          no-underline
          font-spotifyMedium
          ml-4
          text-white
          pointer-events-none
        "
        >|</a
      >
      <router-link
        to="/register"
        class="text-lg no-underline text-white hover:text-spotifyGreen"
        >Kaydol</router-link
      >
      <router-link
        to="/login"
        class="text-lg no-underline text-white hover:text-spotifyGreen"
        >Oturum Aç
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import { ref, provide, inject } from "vue";

const isOpen = ref(false);

const dimmer = ref(true);
const right = ref(false);
const toggle = inject("toggle");
const open = inject("open");
</script>