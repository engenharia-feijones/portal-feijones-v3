<!--
  DOCSTRING: 
    Função: Mostrar um loading ao fazer uma ação que chame uma API e impede que o usuario clique varias vezes no componente
    Observações: Para que esse componente funcione perfeitamente a informação se ele a requisição está em andamento deve ser passado por ele
    pelo pai
-->

<template>
  <button
    type="submit"
    class="
      rounded-full
      bg-cupom_primary
      text-white
      font-bold
      w-52
      mx-auto
      p-2
      cursor-pointer
      transition-opacity
      duration-200
      hover:opacity-80
    "
    :class="{
      'pointer-events-none': isRequestInProgress || isInvalidInputs,
      'opacity-90': isRequestInProgress || isInvalidInputs,
    }"
  >
    <svg
      v-if="isRequestInProgress"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 animate-spin mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
    <slot v-else>Enviar</slot>
  </button>
</template>

<script>
export default {
  props: {
    isRequestInProgress: {
      type: Boolean,
      required: true,
      default: false,
    },
    isInvalidInputs: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>