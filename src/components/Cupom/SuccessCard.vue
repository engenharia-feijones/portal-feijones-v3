<template>
  <div class="p-3 flex flex-col items-center">
    <h1 class="text-6xl text-center text-cupom_primary font-bold">Parabéns!</h1>
    <span class="text-center text-2xl font-bold text-cupom_brow"
      >Você ganhou</span
    >
    <h1
      class="text-9xl text-center text-cupom_primary font-bold tracking-wider"
    >
      50%
    </h1>
    <h2 class="text-5xl text-center text-cupom_primary font-bold">
      <span class="">de</span> desconto
    </h2>
    <span class="text-center font-medium text-lg text-cupom_brow"
      >em 1 (um) produto Feijones!</span
    >
    <span class="text-center font-medium text-sm mb-5 text-cupom_brow"
      >Valido até 31/07/2021
    </span>

    <div class="p-3 px-6 bg-cupom_primary rounded-full">
      <h1
        class="font-bold text-xl w-60 break-words text-center text-cupom_brow"
      >
        {{ cupom }}
      </h1>
    </div>

    <div
      class="text-cupom_primary font-bold mt-2 cursor-pointer relative z-50"
      @click="
        useCupom(
          `Ola, gostaria de usar meu cupom 50% de desconto ''${cupom}'' `
        )
      "
    >
      <h1 class="text-center text-sm underline">
        Clique aqui e utilize seu código via whatsapp
      </h1>
      <h1 class="text-center text-sm underline">no ato da compra!</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cupom: {
      type: String,
      required: true,
      default: "Error",
    },
  },
  setup() {
    const useCupom = (message) => {
      const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=${message}`;
      window.open(url, "_blank");
    };

    return { useCupom };
  },
};
</script>

<style lang="postcss" scoped>
</style>