<template>
  <body class="w-full h-full bg-white">
    <section class="flex justify-center items-center text-center">
      <div>
        <div class="flex justify-center items-center mt-0 pb-3">
          <div class="flex items-center mt-2 justify-center">
            <i class="fab fa-spotify fa-3x mr-2 mt-10 text-black"></i>
            <router-link
              to="/"
              class="
                cursor-pointer
                font-spotifyMedium
                text-black
                mt-10
                text-3xl
              "
              >Ogitify</router-link
            >
          </div>
        </div>
        <div class="flex flex-col justify-center text-center items-center">
          <p
            class="
              font-spotifyBold
              text-3xl
              mt-10
              w-[70%]
              text-center
              break-words
            "
          >
            Dinlemeye başlamak için ücretsiz kaydol.
          </p>
          <button
            class="
              bg-premiumBlue
              text-white
              bg-opacity-90
              transition
              duration-500
              ease-in-out
              hover:bg-opacity-100
              transform
              hover:-translate-y-1 hover:scale-110
              px-8
              py-3
              mt-7
              rounded-full
              font-spotifyBold
              text-lg
            "
          >
            Facebook ile kaydol
          </button>

          <div
            class="w-[70%] h-[14px] border-b border-gray-300 text-center mt-5"
          >
            <span
              class="
                text-lg text-gray-500
                font-spotifyBook
                bg-[#fff]
                pl-3
                pr-3
                tracking-widest
              "
            >
              veya
              <!--Padding is optional-->
            </span>
          </div>
          <div>
            <p class="mt-10 text-[20px] font-spotifyBold">
              E-posta adresinle kaydol
            </p>

            <!-- This is an example component -->
            <div class="max-w-lg mx-auto w-[300px] md:w-[450px] lg:w-[450px]">
              <form>
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
                    >E-posta adresin nedir?</label
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
                      w-full
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
                    >E-posta adresini onayla</label
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
                      w-full
                      p-4
                    "
                    placeholder="E-posta adresini yeniden gir"
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
                    >Parola oluştur</label
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
                      w-full
                      p-4
                    "
                    placeholder="Parola oluştur"
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
                    >Sana hangi isimle hitap etmeliyiz?</label
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
                      w-full
                      p-4
                    "
                    placeholder="Profil adı gir."
                    required
                  />
                  <p class="text-sm flex justify-items-start mt-2">
                    Bu profilinde görünür.
                  </p>
                </div>

                <div>
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
                    >Doğum tarihin nedir?</label
                  >
                  <div
                    class="
                      mb-6
                      flex
                      mr-0
                      md:mr-36
                      lg:mr-36
                      gap-5
                      flex-row
                      w-full
                      justify-center
                    "
                  >
                    <input
                      type="text"
                      id="day"
                      class="
                        bg-white
                        placeholder-shown:text-lg
                        font-spotifyBook
                        text-center
                        border border-gray-400
                        text-gray-900
                        sm:text-sm
                        rounded-md
                        focus:ring-spotifyBlack focus:border-spotifyBlack
                        block
                        w-1/2
                        h-12
                      "
                      placeholder="GG"
                      required
                    />
                    <select
                      class="
                        bg-white
                        placeholder-shown:text-lg
                        font-spotifyBook
                        border border-gray-400
                        text-gray-400
                        sm:text-sm
                        rounded-md
                        focus:ring-spotifyBlack focus:border-spotifyBlack
                        block
                        w-full
                        h-12
                      "
                      name=""
                      id=""
                    >
                      <option value="">Ay</option>
                    </select>
                    <div class="mb-6">
                      <input
                        type="text"
                        id="day"
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
                          w-full
                          p-1
                          h-12
                        "
                        placeholder="YYYY"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label
                    for="password"
                    class="
                      text-md
                      font-spotifyBold
                      flex
                      justify-start
                      flex-row
                      text-gray-900
                      mb-2
                    "
                    >Cinsiyetin nedir?</label
                  >
                  <div class="flex flex-row gap-3 font-spotifyBook ml-1">
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="
                          my-auto
                          transform
                          scale-150
                          hover:text-spotifyGreen
                        "
                        type="radio"
                        name="sfg"
                      />
                      <div class="title px-2">Erkek</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-150"
                        type="radio"
                        name="sfg"
                      />
                      <div class="title px-2">Kadın</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-150 o"
                        type="radio"
                        name="sfg"
                      />
                      <div class="title px-2">Diğer</div>
                    </label>
                  </div>
                  <div class="mt-3 flex flex-row justify-center text-center">
                    <label
                      class="
                        flex
                        justify-center
                        flex-row
                        items-center
                        ml-1
                        lg:ml-0
                        md:lg-0
                      "
                    >
                      <input
                        type="checkbox"
                        class="h-5 mb-4 w-10 mr-2 text-green-600"
                        checked
                      />
                      <span class="text-gray-700 font-spotifyBook"
                        >Spotify'ın gönderdiği pazarlama mesajlarını almak
                        istemiyorum</span
                      >
                    </label>
                  </div>
                  <div
                    class="mt-3 flex flex-row justify-center text-center w-full"
                  >
                    <label
                      class="
                        flex
                        justify-center
                        flex-row
                        items-center
                        ml-1
                        lg:ml-[3px]
                        md:lg-0
                      "
                    >
                      <input
                        type="checkbox"
                        class="h-5 mb-4 w-20 mr-2 text-green-600"
                        checked
                      />
                      <span class="text-gray-700 font-spotifyBook"
                        >Kayıt verilerimi pazarlama amaçlarıyla Spotify'ın
                        içerik sağlayıcılarıyla paylaşın. Verilerinin gizlilik
                        politikamızda belirtildiği gibi AEA dışındaki bir ülkeye
                        aktarılabileceğini unutma.</span
                      >
                    </label>
                  </div>

                  <p class="text-xs leading-4 mt-8 font-spotifyBook">
                    Kaydol seçeneğine tıklayarak Spotify'ın
                    <span
                      class="
                        underline
                        text-spotifyGreen text-opacity-70
                        hover:text-opacity-100
                        cursor-pointer
                      "
                      >Kullanım Hüküm ve Koşulları'nı</span
                    >
                    kabul etmiş olursun.
                  </p>
                  <p class="text-xs mt-8 leading-4 font-spotifyBook">
                    Spotify'ın kişisel verilerini nasıl topladığı, kullandığı,
                    paylaştığı ve koruduğu hakkında daha fazla bilgi edinmek
                    için lütfen
                    <span
                      class="
                        underline
                        text-spotifyGreen text-opacity-70
                        hover:text-opacity-100
                        cursor-pointer
                      "
                      >Spotify Gizlilik Politikası</span
                    >'nı oku.
                  </p>
                </div>
                <button
                  class="
                    bg-spotifyGreen
                    px-12
                    mt-2
                    mb-10
                    py-4
                    rounded-full
                    font-spotifyBold
                    text-lg
                    transition
                    duration-200
                    ease-in-out
                    hover:bg-opacity-100
                    transform
                    hover: hover:scale-110
                  "
                >
                  Kaydol
                </button>
                <p class="text-lg font-spotifyBook mb-10">
                  Hesabın var mı?
                  <span
                    class="
                      underline
                      text-spotifyGreen text-opacity-70
                      hover:text-opacity-100
                      cursor-pointer
                    "
                    >Oturum aç.</span
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>