<template>
  <body class="bg-spotifyBlack w-screen h-screen font-spotify    overflow-x-hidden  ">
<Header></Header>
    <section @click="open = false"  class="h-auto m-auto mx-auto w-auto  bg-premiumBlue">
      <div class="text-white flex flex-col  justify-center">
        <p class="text-5xl mt-20 ml-3  md:ml-20 lg:ml-20">
          Premium'u 1 ay boyunca ücretsiz kullan
        </p>
        <p class="font-spotifyLight text-3xl mt-8 mb-5 ml-3  md:ml-20 lg:ml-20">
          Sonra sadece 17,99 TL/ay. İstediğin zaman iptal et.
        </p>

        <div class="flex flex-col sm:flex-row md:flex-row lg:flex-row mt-10  gap-4">
          <button
            class="
              bg-spotifyBlack
              font-spotifyMedium
              ml-1
              mr-1
              md:ml-10
              lg:ml-10
              p-5
              sm:p-4
              
             

              mb-1
              duration-100
              motion-safe:hover:scale-110
              rounded-full
              sm:w-11/12
              lg:w-[300px]
            "
          >
            KULLANMAYA BAŞLA
          </button>
          <button
            class="
            border
              border-blue-300
              font-spotifyMedium
              text-white
              ml-1
              mr-1
              
            
             
              p-5
              sm:p-4
              ring-2
              ring-white

             

              mb-1
              duration-100
              motion-safe:hover:scale-110
              rounded-full
              sm:w-11/12
              lg:w-[300px]
            "
          >
            PLANLARI GÖRÜNTÜLE
          </button>
        </div>
        <p
          class="
            font-spotifyBook
            text-[13px]
            ml-3  md:ml-16 lg:ml-16
            mt-10
            flex-wrap
            break-words
           
            sm:w-[60%]
            md:w-[70%]
            lg:w-[90%]
            p-3
          "
        >
          <span class="underline cursor-pointer">
            Hüküm ve koşullar geçerlidir.
          </span>
          Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz
          tekliften <br />
          yararlanamaz.
        </p>
      </div>
    </section>
    <section
      class="
        bg-white
     
        m-auto
        text-gray-800
        flex flex-col
        justify-center
      "
    >
      <div
        class="flex flex-col mb-2 justify-center  mt-10 items-center"
      >
        <p class="text-[32px] text-center md:text-[38px]   lg:text-[40px] overflow-hidden">Neden Premium'a geçmelisin?</p>
      </div>
      <div
        class="
          flex
          flex-col
          md:flex-row
          lg:flex-row
         
       
          
          mt-10
          justify-evenly
   
          items-center
        "
      >
        <div class="flex flex-col justify-between w-4/12 h-1/2 mb-12 sm:w-4/12 md:w-[150px] ">
          <div class="bg-gray-100 mt-2 rounded-full" >
            <img
              src="../assets/image1.png"
              alt=""
            />
          </div>
          <div class="text-center mt-10 mb-5">
            <p class="text-xl">Müzik İndir.</p>

            <p class="font-spotifyBook">İstediğin yerde dinle.</p>
          </div>
        </div>

        <div class="flex flex-col justify-between w-4/12 sm:w-4/12 md:w-[150px]">
          <div class="bg-gray-100 mt-2 rounded-full">
            <img
              src="../assets/image1.png"
              alt=""
            />
          </div>
          <div class="text-center mt-10 mb-5">
            <p class="text-xl">Reklamlarla bölünmeden dinle.</p>

            <p class="font-spotifyBook">Kesintisiz müziğin keyfini çıkar.</p>
          </div>
        </div>

        <div class="flex flex-col justify-between w-4/12 sm:w-4/12 md:w-[150px]">
          <div class="bg-gray-100 mt-2 rounded-full">
            <img
              src="../assets/image1.png"
              alt=""
            />
          </div>
          <div class="text-center mt-10 w-[100%] mb-5">
            <p class="text-xl ">İstediğin şarkıyı çal.</p>

            <p class="font-spotifyBook">Mobil cihazında bile.</p>
          </div>
        </div>

        <div class="flex flex-col justify-between w-4/12 sm:w-4/12 md:w-[150px]">
          <div class="bg-gray-100 mt-2 rounded-full">
             <img
              src="../assets/image1.png"
              alt=""
            />
          </div>
          <div class="text-center mt-10 mb-5">
            <p class="text-xl">Sınırsız şarkı atlama hakkı.</p>

            <p class="font-spotifyBook">Sonraki düğmesine basman yeterli.</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="
        bg-gray-100
       
        
        text-gray-800
        flex-col flex
        md:flex-row
        lg:flex-row
     justify-center
        gap-4
       
        p-10
    

      "
    >
      <div
        class="
          flex flex-col
          bg-white
          shadow-lg
          rounded-md
          p-5
        
          md:w-1/2
          lg:w-1/4
        "
      >
        <div class="flex justify-between flex-col">
          <div
            class="
              bg-premiumBlue
              text-white
              rounded-md
              md:w-[100px]
              sm:w-auto
              p-1
              text-center
              mt-2
            "
          >
            1 ay ücretsiz
          </div>
          <div
            class="
              border border-premiumBlue
              text-premiumBlue
              w-auto
              rounded-md
              p-1
              text-center
              mt-2
            "
          >
            <p>Bir defalık ödeme yapılabilir</p>
          </div>
          <p class="mt-2 text-2xl">Bireysel</p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">
            Teklif döneminden sonra ayda 17,99 TL
          </p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">1 hesap</p>
        </div>
        <hr class="mt-5 border-spotifyBlack w-auto border-1" />
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Müziklerini reklamsız dinle</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">
            Her yerde çal, hatta çevrimdışı dinle
          </p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">İstediğin zaman çal</p>
        </div>
       <div class="flex flex-col justify-center items-center mt-2">
         <button
            class="
              bg-spotifyBlack
              font-spotifyMedium
          
              p-5
              mb-1
              mt-[140px]
              duration-100
              text-white
              motion-safe:hover:scale-110
              rounded-full
              md:w-10/12
              break-words
              lg:w-auto
              
            "
          >
        <p class=" "> 1 AY ÜCRETSİZ KULLAN</p>
          </button>

          <p class="mt-5 hover:text-spotifyGreen cursor-pointer">DİĞER ÖDEME SEÇENEKLERİ</p>
          <p
          class="
            font-spotifyBook
            text-[14px]
       break-words
           mt-5
            flex-wrap
      

            w-[100%]
            p-3
          "
        >
          <span class="underline cursor-pointer">
            Hüküm ve koşullar geçerlidir.
          </span>
          Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz
          tekliften <br />
          yararlanamaz.
        </p>
       </div>

      </div>
      <div
        class="
         flex flex-col
          bg-white
          shadow-lg
          rounded-md
          p-5
        
          md:w-1/2
          lg:w-1/4
        "
      >
        <div class="flex justify-between flex-col">
          <div
            class="
              bg-premiumBlue
              text-white
              rounded-md
              md:w-[100px]
              sm:w-auto
              p-1
              text-center
              mt-2
            "
          >
            1 ay ücretsiz
          </div>
         
          <p class="mt-2 text-2xl">Duo</p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">
            Teklif döneminden sonra ayda 23,99 TL
          </p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">2 hesap</p>
        </div>
        <hr class="mt-5 border-spotifyBlack w-auto border-1" />
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Aynı çatı altında yaşayan çiftler için 2 Premium hesabı</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">
            Duo Mix: İki kişi için bir çalma listesi, ikinizin tadını çıkaracağı müziklerle düzenli olarak güncellenir
          </p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal</p>
        </div>
       <div class="flex flex-col justify-center items-center mt-2">
         <button
            class="
              bg-spotifyBlack
              font-spotifyMedium
          
              p-5
              mb-1
              mt-[90px]
              duration-100
              text-white
              motion-safe:hover:scale-110
              rounded-full
              md:w-10/12
              break-words
              lg:w-auto
              
            "
          >
        <p class=" "> 1 AY ÜCRETSİZ KULLAN</p>
          </button>

          <p class="mt-5 hover:text-spotifyGreen cursor-pointer">DİĞER ÖDEME SEÇENEKLERİ</p>
          <p
          class="
            font-spotifyBook
            text-[13px]
       
           mt-5
            flex-wrap
            break-words
            w-[100%]
            p-3
          "
        >
          <span class="underline cursor-pointer">
            Hüküm ve koşullar geçerlidir.
          </span>
          Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz
          tekliften <br />
          yararlanamaz.
        </p>
       </div>

      </div>
      <div
        class="
           flex flex-col
          bg-white
          shadow-lg
          rounded-md
          p-5
        
          md:w-1/2
          lg:w-1/4
         
        "
      >
        <div class="flex justify-between flex-col">
          <div
            class="
              bg-premiumBlue
              text-white
              rounded-md
              md:w-[100px]
              sm:w-auto
              p-1
              text-center
              mt-2
            "
          >
            1 ay ücretsiz
          </div>
          
          <p class="mt-2 text-2xl">Aile</p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">
            Teklif döneminden sonra ayda 29,99 TL
          </p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">6 hesaba kadar</p>
        </div>
        <hr class="mt-5 border-spotifyBlack w-auto border-1" />
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Aynı çatı altında yaşayan aile üyeleri için 6 ayrı Premium hesabı</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">
            Aile Mix'i: Ailen için bir çalma listesi, hepinizin tadını çıkaracağı müziklerle düzenli olarak güncellenir
          </p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Sansürsüz müziği engelle</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook ">Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal</p>
        </div>
       <div class="flex flex-col justify-center items-center mt-2">
         <button
            class="
              bg-spotifyBlack
              
              font-spotifyMedium
          
              p-5
              mb-12
              mt-12
              duration-100
              text-white
              motion-safe:hover:scale-110
              rounded-full
              md:w-10/12
              break-words
              lg:w-auto
              
            "
          >
        <p class=" "> 1 AY ÜCRETSİZ KULLAN</p>
          </button>

         
          <p
          class="
            font-spotifyBook
            text-[13px]
       
           mt-5
            flex-wrap
            break-words
            w-[100%]
            p-3
          "
        >
          <span class="underline cursor-pointer">
            Hüküm ve koşullar geçerlidir.
          </span>
          Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz
          tekliften <br />
          yararlanamaz.
        </p>
       </div>

      </div>
       <div
        class="
           flex flex-col
          bg-white
          shadow-lg
          rounded-md
          p-5
        
          md:w-1/2
          lg:w-1/4
         
        "
      >
        <div class="flex justify-between flex-col">
          <div
            class="
              bg-premiumBlue
              text-white
              rounded-md
              md:w-[100px]
              sm:w-auto
              p-1
              text-center
              mt-2
            "
          >
            1 ay ücretsiz
          </div>
        
          <p class="mt-2 text-2xl">Öğrenci</p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">
            Teklif döneminden sonra ayda 8,99 TL
          </p>
          <p class="break-words w-[70%] text-lg font-spotifyBook">1 hesap</p>
        </div>
        <hr class="mt-5 border-spotifyBlack w-auto border-1" />
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Yararlanabilecek üniversite öğrencilerine özel indirim</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">
            Müziklerini reklamsız dinle
          </p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">Her yerde çal, hatta çevrimdışı dinle</p>
        </div>
        <div class="flex flex-row items-center gap-2 mt-5">
          <i class="fas fa-check fa-lg mr-3"></i>
          <p class="text-md font-spotifyBook">İstediğin zaman çal</p>
        </div>
       <div class="flex flex-col justify-center items-center mt-2">
         <button
            class="
              bg-spotifyBlack
              font-spotifyMedium
          
              p-5
              mb-12 
              mt-[125px]
              duration-100
              text-white
              motion-safe:hover:scale-110
              rounded-full
              md:w-10/12
              break-words
              lg:w-auto
              
            "
          >
        <p class=" "> 1 AY ÜCRETSİZ KULLAN</p>
          </button>

         
          <p
          class="
            font-spotifyBook
            text-[13px]
       
           mt-5
            flex-wrap
            break-words
            w-[100%]
            p-3
          "
        >
          <span class="underline cursor-pointer">
            Hüküm ve koşullar geçerlidir.
          </span>
          Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz
          tekliften <br />
          yararlanamaz.
        </p>
       </div>
       

      </div>
    </section>
   <Footer></Footer>
  </body>
</template>


<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import {inject, onBeforeMount} from 'vue'




let open = inject('open')
onBeforeMount(() => {
  open.value = false;
})



</script>