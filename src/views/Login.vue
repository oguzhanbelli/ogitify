<template>
  <body class="w-full h-full bg-white">
    <section class="overflow-hidden">
      <div class="flex justify-center items-center mt-0 pb-3">
        <div class="flex items-center justify-center">
          <i class="fab fa-spotify fa-3x mr-2 mt-10 text-black"></i>
          <router-link
            to="/"
            class="cursor-pointer font-spotifyMedium text-black mt-10 text-3xl"
            >Ogitify</router-link
          >
        </div>
      </div>
      <hr />
      <div class="flex flex-col justify-center items-center pb-3 mt-5">
        <p class="font-spotifyBold text-lg">
          Devam etmek için Spotify'da oturum aç.
        </p>
        <div class="flex flex-col justify-center text-center items-center">
          <button
            class="
              flex flex-row
              justify-center
              items-center
              gap-3
              text-white
              w-[300px]
              md:w-[450px]
              lg:w-[450px]
              uppercase
              font-spotifyBold
              hover:bg-[#3876bc]
              mt-5
              bg-facebookBlue
              p-3
              rounded-full
            "
          >
            <i class="fab fa-facebook"></i>
            <p>Facebook ile devam et</p>
          </button>
          <button
            class="
              flex flex-row
              justify-center
              items-center
              gap-3
              text-white
              w-[300px]
              md:w-[450px]
              lg:w-[450px]
              uppercase
              font-spotifyBold
              hover:bg-[#262028]
              mt-5
              bg-spotifyBlack
              p-3
              rounded-full
            "
          >
            <i class="fab fa-apple"></i>
            <p>Apple ile devam et</p>
          </button>
          <button
            class="
              flex flex-row
              justify-center
              items-center
              gap-3
              border-black border-2
              w-[300px]
              md:w-[450px]
              lg:w-[450px]
              uppercase
              font-spotifyBold
              hover:bg-[#b9b7b7] hover:text-white
              mt-5
              bg-white
              p-3
              rounded-full
            "
          >
            <i class="fab fa-google"></i>
            <p>Google ile devam et</p>
          </button>
        </div>

        <div class="w-[30%] h-[14px] border-b border-gray-300 text-center mt-5">
          <span
            class="
              text-sm text-gray-500
              font-spotifyBold
              bg-[#fff]
              pl-3
              pr-3
              tracking-widest
            "
          >
            VEYA
            <!--Padding is optional-->
          </span>
        </div>

        <div
          class="
            max-w-lg
            mx-auto
            w-[300px]
            md:w-[450px]
            lg:w-[450px]
            flex
            justify-center
          "
        >
          <form
            class="
              items-center
              text-center
              flex
              justify-center
              flex-col
              w-[300px]
              md:w-[450px]
              lg:w-[450px]
            "
          >
            <div class="mb-6">
              <label
                for="email"
                class="
                  text-md
                  font-spotifyBold
                  flex
                  justify-start
                  flex-row
                  mt-5
                  text-gray-900
                  mb-2
                "
                >E-posta adresi veya kullanıcı adı</label
              >
              <input
                type="email"
                id="email"
                class="
                  bg-white
                  placeholder-shown:text-lg
                  font-spotifyBook
                  border border-gray-400
                  text-gray-900
                  sm:text-sm
                  rounded-md
                  focus:ring-spotifyBlack focus:border-spotifyBlack
                  block
                  w-[300px]
                  md:w-[450px]
                  lg:w-[450px]
                  p-4
                "
                placeholder="E-posta adresini gir"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="
                  text-md
                  font-spotifyBold
                  flex
                  justify-start
                  flex-row
                  mt-5
                  text-gray-900
                  mb-2
                "
                >Parola</label
              >
              <input
                type="password"
                id="password"
                class="
                  bg-white
                  placeholder-shown:text-lg
                  font-spotifyBook
                  border border-gray-400
                  text-gray-900
                  sm:text-sm
                  rounded-md
                  focus:ring-spotifyBlack focus:border-spotifyBlack
                  block
                  w-[300px]
                  md:w-[450px]
                  lg:w-[450px]
                  p-4
                "
                placeholder="E-posta adresini gir"
                required
              />
            </div>

            <p
              class="
                underline
                font-spotifyBook
                cursor-pointer
                text-lg text-gray-600
                hover:text-spotifyGreen
              "
            >
              Parolanı mı unuttun?
            </p>
            <div
              class="
                flex flex-col
                
                md:flex-row
                lg:flex-row
                w-[700px]
                md:w-full
                lg:w-full
                justify-between
                items-center
                text-center
              "
            >
              <label
                class="
                  flex
                  justify-start
                  md:justify-center
                  mt-10
                  mb-10
                  text-center
                  items-center
                "
              >
                <input
                  type="checkbox"
                  class="h-5 w-7 rounded-xl border-gray-300 text-green-600"
                />
                <span class="text-gray-600 text-lg font-spotifyBook"
                  >Beni hatırla</span
                >
              </label>
              <button
                class="
                  bg-supportGreen
                  px-12
                  w-1/2
                  md:w-1/2
                  lg:1/2
                  text-white
                  py-3
                  rounded-full
                  font-spotifyBold
                  text-lg
                  transition
                  duration-200
                  ease-in-out
                  hover:bg-spotifyGreen
                  transform
                  hover: hover:scale-110
                "
              >
                Oturum Aç
              </button>
            </div>
             <div class="flex flex-col  justify-center items-center text-center mt-2 w-[500px]">
              <p class="font-spotifyBold text-lg"  >
                  Hesabın yok mu?
              </p>
              <button
                class="
                  bg-white
                  px-12
                w-[350px]
                  md:w-1/2
                  lg:w-full
                  text-gray-600
                  py-3
                  rounded-full
                  font-spotifyBold
                  text-base 
                  transition
                  duration-200
                  ease-in-out
                  border border-gray-600
                  hover:bg-gray-600
                  hover:text-white mt-3
                  transform
                  hover: hover:scale-110
                "
              >
                OGITIFY İÇİN KAYDOL
              </button>
          </div>
          </form>

         
        </div>
      </div>
    </section>
  </body>
</template>