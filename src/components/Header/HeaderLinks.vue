<template>
  <nav class="nav-container">
    <a  @click="navigateTo('/')" class="header-links">Início</a>
    <a  @click="navigateTo('/about')" class="header-links">Sobre nós</a>
    <a  @click="navigateTo('/services')" class="header-links">Nossos Serviços</a>
    <a  class="header-links">FAQ</a>
    <a  class="header-links cta">Peça o seu</a>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup(props, { emit }){
    const route = useRouter()

    const navigateTo = (path) => {
      emit('close-mobile');
      scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      route.push({ path })
    }

    return {
      navigateTo
    }
  }
};
</script>

<style lang="postcss" scoped>
@layer components {
  .nav-container {
    @apply space-y-10 lg:space-x-10 ml-4;
  }
  .header-links {
      @apply text-lg font-medium text-white lg:text-black cursor-pointer transition-all duration-150 hover:opacity-80;
    font-family: "Rockwell"
  }

  .cta {
    @apply text-white text-center py-3 px-11 w-52 rounded-xl;
    background-color: #37210C;
  }
}
</style>
