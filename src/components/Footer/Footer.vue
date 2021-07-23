<template>
  <section id="footer" class="container__footer">
    <div class="wrapper__one">
      <img src="../../assets/Svg/logo_white.svg" @click="goToHome()" />
      <div class="container__social">
        <h1 class="text-white">Siga nossas redes sociais</h1>
        <SocialIcons />
      </div>
    </div>
    <!-- <div class="flex-1 mt-3">
            <h1 class="text-white text-left pl-5">Assine nossa Newsletter</h1>
            <input type="email" placeholder="Seu e-mail" class="ml-5 mb-1 p-2 outline-none inline rounded-l-md"/>
            <div class="inline">Assinar</div>
        </div> -->
  </section>
</template>

<script>
import SocialIcons from "../SocialIcons.vue";
export default {
  components: {
    SocialIcons,
  },
  setup() {
    const goToHome = () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return { goToHome };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .container__footer {
    @apply w-screen h-auto lg:h-28 flex flex-col justify-center bg-neutral py-3;
  }

  .container__social {
    @apply space-y-2;
  }

  .wrapper__one {
    @apply flex justify-around;
  }
}
</style>