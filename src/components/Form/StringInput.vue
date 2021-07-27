<!--
  DOCSTRING: 
    Bibliotecas para esse componente funcionar: Yup, vee-validate@next
    Função: Controlar o input de texto, podemos controlar a quantidade de caracteres
    Observações: Para que esse componente funcione perfeitamente no mobile temos que atualizar 
    a o metodo @input="(event) => (value = event.target.value)" assim ele ira se comportar como no PC
    Limpar dados: Para resetar os dados da tela por agora temos que dar um update usando alguma :key
-->

<template>
  <div class="relative">
    <input
      :id="fieldName"
      :name="fieldName"
      type="text"
      class="
        p-3
        mx-4
        outline-none
        rounded-xl
        text-gray-400 text-lg
        focus:ring-2 focus:ring-yellow-500
        font-medium
        flex-1
      "
      :placeholder="placeholder"
      autocomplete="off"
      autocorrect="off"
      :value="value"
      @input="(event) => (value = event.target.value)"
      @blur="(event) => (value = event.target.value)"
      @keydown="(event) => $emit('update:modelValue', event.target.value)"
      @keyup="$emit('update:modelValue', value)"
    />

    <transition name="slide-fade" mode="out-in">
      <p class="text-xs mx-5" v-if="errorMessage">{{ errorMessage }}</p>
    </transition>
  </div>
</template>

<script>
import { watch, computed, ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
export default {
  name: "String Input",
  emits: ["invalid-input", "update:modelValue"],
  props: {
    min: {
      type: Number,
      default: 8,
    },
    placeholder: {
      type: String,
    },
    fieldName: {
      type: String,
      required: true,
    },
    startValue: {
      type: String,
      default: "Campo Obrigatorio",
    },
    edit: {},
  },

  setup({ min, fieldName, edit, startValue, inserted }, { emit }) {
    const schema = computed(() =>
      yup.object({
        campo: yup
          .string()
          .required(startValue)
          .min(min, `Insira um ${fieldName} valido`),
      })
    );

    useForm({
      validationSchema: schema,
    });

    const { value, errorMessage } = useField("campo");

    value.value = edit ?? undefined;

    watch(errorMessage, () => {
      emit("invalid-input", { field: fieldName, value: errorMessage.value });
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