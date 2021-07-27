<!--
  DOCSTRING CPF: 
    Bibliotecas para esse componente funcionar: yup, vee-validate@next, vue-the-mask
    Função: Controlar o input de CPF, podemos controlar a quantidade de caracteres, se é obrigatorio ou não
    Observações: Para que esse componente funcione perfeitamente no mobile temos que usar o o type="tel" nos <input />
    Limpar dados: Para resetar os dados da tela por agora temos que dar um update usando alguma :key
-->

<template>
  <div class="relative">
    <input
      id="phone"
      name="phone"
      type="tel"
      class="
        p-3
        mx-4
        outline-none
        rounded-xl
        text-gray-400 text-lg
        font-medium
        focus:ring-2 focus:ring-yellow-500
        flex-1
      "
      placeholder="Telefone"
      autocomplete="nope"
      v-model="value"
      v-mask="'(##) # ####-####'"
      @input="$emit('update:modelValue', value)"
      @keyup="$emit('update:modelValue', value)"
    />

    <transition name="slide-fade" mode="out-in">
      <p class="text-xs mx-5" v-if="errorMessage">{{ errorMessage }}</p>
    </transition>
  </div>
</template>

<script>
import { watch, computed } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Phone Input",
  props: {
    edit: {},
    minLength: {
      type: Number,
      default: 16,
    },
    requiredMessage: {
      type: String,
      default: "Campo Obrigatorio",
    },
  },
  emits: ["invalid-input", "update:modelValue"],

  setup({ edit, minLength, requiredMessage }, { emit }) {
    const schema = computed(() =>
      yup.object({
        phone: yup
          .string()
          .required(requiredMessage)
          .min(minLength, "Insira um número valido"),
      })
    );

    useForm({
      validationSchema: schema,
    });

    const { value, errorMessage } = useField("phone");

    value.value = edit ?? undefined;

    watch(errorMessage, () => {
      emit("invalid-input", { field: "phone", value: errorMessage.value });
    });

    return { value, errorMessage };
  },
};
</script>

<style lang="postcss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatex(-10px);
  opacity: 0;
}
</style>