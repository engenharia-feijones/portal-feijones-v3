<template>
  <div class="fixed-cta">
    <div class="social-btn">
      <SocialIcons />
    </div>
    <div class="btn-faq">FAQ</div>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue'

export default {
  components: {
    SocialIcons
  }
};
</script>

<style lang="postcss" scoped>
@layer components {

  * {
    overflow-y: hidden;
  }

  .fixed-cta {
    background-color: transparent;
  }
  .btn-faq {
    @apply rounded-full p-5 lg:p-8 cursor-pointer fixed right-10 bottom-80 text-white z-30; 
    background-color: #e47b18;
  }

  .social-btn {
      @apply space-x-2 rounded-full fixed bottom-96  left-10 z-50 hidden lg:flex; 
  }

 
}
</style>
