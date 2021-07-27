<template>
  <swiper :slides-per-view="1" :pagination="true" class="pb-5">
    <swiper-slide>
      <div class="comment-content">
        <div class="comment-info-box">
          <div class="comment-avatar">
            <img
              src="../../assets/Home/comment_van.jpeg"
              class="comment-avatar"
            />
          </div>
          <div class="comment-social">
            <h1 class="comment-social-name">Claudevânio</h1>
            <h2 class="comment-social-city">Camaçari, BA</h2>
          </div>
          <div class="comment-icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8409 14.9753L17.8499 14.9003C17.8821 14.9148 17.913 14.9285 17.9427 14.9418C18.1905 15.0521 18.3539 15.1248 18.4199 15.2453C18.4949 15.3803 18.4949 15.9653 18.2399 16.6703C17.9909 17.3753 16.798 18.0053 16.224 18.0963C15.709 18.1703 15.058 18.2023 14.344 17.9753C11.7001 17.0673 10.2541 16.4133 7.54013 12.8614C6.15916 10.9154 5.75216 9.08542 7.36613 7.31145C7.73713 6.92546 8.15812 6.91746 8.73411 6.96746C8.75228 6.96746 8.77105 6.96674 8.79035 6.96601C8.96756 6.95927 9.18967 6.95082 9.4061 7.47745C9.51572 7.73439 9.69205 8.16129 9.86184 8.57235C10.0793 9.09876 10.286 9.59918 10.3281 9.68341C10.4021 9.83241 10.4531 9.9974 10.3531 10.2074C10.1179 10.6525 9.87288 10.9228 9.6901 11.1245C9.43928 11.4012 9.30561 11.5487 9.4751 11.8414C9.65109 12.1414 10.2471 13.1163 11.1351 13.9113C12.0892 14.765 12.9193 15.1249 13.3405 15.3074C13.4226 15.343 13.4891 15.3718 13.538 15.3963C13.835 15.5313 14.009 15.5163 14.184 15.3213C14.357 15.1233 14.931 14.4543 15.128 14.1593C15.3972 13.7555 15.6179 13.8657 17.5132 14.8118C17.6173 14.8638 17.7264 14.9182 17.8409 14.9753Z"
                fill="#38782D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.44426 12.4864C0.44926 2.00055 13.174 -3.39036 20.8629 4.04251L20.8479 4.08151C23.1028 6.32747 24.3428 9.31641 24.3428 12.4924C24.3388 21.5412 14.583 27.2111 6.67815 22.9412L0.343262 24.5931L2.03923 18.4313C0.99325 16.6263 0.44426 14.5823 0.44426 12.4864ZM7.33313 20.9632C13.96 24.8591 22.3389 20.0922 22.3449 12.4594C22.3449 9.81941 21.3109 7.32845 19.4359 5.46948C17.5599 3.59452 15.069 2.55954 12.415 2.55954C4.60318 2.55954 -0.13473 11.1394 3.9892 17.7043L4.22819 18.0793L3.22321 21.7242L6.97314 20.7492L7.33313 20.9632Z"
                fill="#38782D"
              />
            </svg>
          </div>
        </div>
        <div class="comment-message">
          <p>
            Sabor diferenciado! Muito prático e encaixa-se perfeitamente na
            minha rotina, por vir congelado e em porções adequadas. Super
            recomendo!
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="comment-content">
        <div class="comment-info-box">
          <div class="comment-avatar">
            <img
              src="../../assets/Home/comment_andressa.jpeg"
              class="h-16 w-16 rounded-full"
            />
          </div>
          <div class="comment-social">
            <h1 class="comment-social-name">Andressa</h1>
            <h2 class="comment-social-city">Salvador, BA</h2>
          </div>
          <div class="comment-icon">
            <img src="../../assets/Svg/instagram2.svg" class="w-25 h-25" />
          </div>
        </div>
        <div class="comment-message">
          <p>
            Fiquei surpresa com o sabor desse feijão congelado, realmente o
            sabor de feijão cozido na hora! Parabéns aos envolvidos pela
            iniciativa!
          </p>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="comment-content">
        <div class="comment-info-box">
          <div class="comment-avatar h-16 w-16">
            <div class="comment-avatar">
              <img
                src="../../assets/Home/comment_jerlaine.jpeg"
                class="comment-avatar"
              />
            </div>
          </div>
          <div class="comment-social">
            <h1 class="comment-social-name">Jerlaine</h1>
            <h2 class="comment-social-city">Camaçari, BA</h2>
          </div>
          <div class="comment-icon">
            <img src="../../assets/Svg/instagram2.svg" class="w-25 h-25" />
          </div>
        </div>
        <div class="comment-message">
          <p>
            Pedi hoje e já experimentei: delicioso, aprovadíssimo! Pedirei
            novamente com certeza! Parabéns e sucesso!
          </p>
        </div>
      </div></swiper-slide
    >
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
@layer components {
  .comments-container {
    @apply h-auto lg:h-screen w-screen relative z-0 hidden lg:flex lg:flex-col justify-center items-center pb-2 lg:pb-0;
    background-image: url("../../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .comments-container::before {
    @apply absolute w-full h-full bg-white;
    background-color: "#F2F2F2";
    opacity: 0.86;
  }

  .comment-container-title {
    @apply text-4xl font-black font-roboto text-center my-6 lg:text-6xl;
    color: #644016;
  }

  .comments-wrapper {
    @apply flex items-center justify-center  mx-3 space-x-6 w-full relative;
  }

  .comment-content {
    @apply flex flex-col mx-auto rounded-xl w-80  h-44  p-2 shadow border-2 border-gray-200 mb-3;
    background-color: #ebebeb;
  }
  .comment-info-box {
    @apply flex justify-around items-center;
  }
  .comment-icon,
  .comment-avatar {
    @apply w-16 h-16 rounded-full;
  }

  .comment-icon {
    @apply flex items-center justify-center;
  }

  .comment-social-name,
  .comment-social-city {
    @apply font-roboto;
  }

  .comment-social-name {
    @apply font-bold;
  }
  .comment-social-city {
    @apply font-light text-sm font-roboto;
  }

  .comment-message {
    @apply text-sm px-4 pb-4 mt-2 font-light font-roboto;
  }
}

:global(.swiper-pagination-bullet-active) {
  background: #dfa343;
}
</style>