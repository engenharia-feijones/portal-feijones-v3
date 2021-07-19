<template>
  <nav class="nav-container">
    <a @click="navigateTo('/')" class="header-links">Início</a>
    <a @click="navigateTo('/about')" class="header-links">Sobre nós</a>
    <a @click="navigateTo('/services')" class="header-links">Nossos Serviços</a>
    <a class="header-links">FAQ</a>
    <a class="header-links cta" @click="openWhatsapp()">Peça o seu</a>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup(props, { emit }) {
    const route = useRouter();
    const navigateTo = (path) => {
      emit("close-mobile");
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      route.push({ path });
    };

    const openWhatsapp = () => {
      const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`;
      window.open(url, "_blank");
    };
    return {
      navigateTo,
      openWhatsapp,
    };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .nav-container {
    @apply space-y-3 mt-3 lg:mt-0 lg:space-x-10 ml-4;
  }
  .header-links {
    @apply text-lg font-medium text-black text-center cursor-pointer transition-all duration-150 hover:opacity-60;
    font-family: "Rockwell";
  }
  .cta {
    @apply text-white text-center py-3 px-11 w-52 rounded-xl;
    background-color: #37210c;
  }
}
</style>
