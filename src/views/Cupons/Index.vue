<template>
  <div
    class="
      h-full
      w-full
      flex flex-col
      justify-center
      items-center
      absolute
      inset-0
      bg-cupom_background
      cupom__container
    "
  >
    <div class="items__container rounded-2xl shadow-xl bg-white pb-16 relative">
      <form
        v-if="!isRequestSuccess"
        @submit.prevent=""
        class="flex flex-col space-y-3 mb-3"
        autocomplete="nope"
      >
        <h1
          class="
            text-center text-4xl
            text-cupom_primary
            font-bold font-glocuester
            mt-3
          "
        >
          Cadastre-se!
        </h1>
        <StringInput
          v-model="promotionalForm.name"
          @keypress.enter.prevent
          fieldName="nome"
          placeholder="Nome"
          class="flex flex-col relative z-50"
          :min="4"
          @invalid-input="updateErrorsForm"
        />

        <PhoneInput
          class="flex flex-col relative z-50"
          @keypress.enter.prevent
          v-model="promotionalForm.phone"
          @invalid-input="updateErrorsForm"
        />

        <AddressInput
          v-model="promotionalForm.address"
          @keypress.enter.prevent
          class="flex flex-col relative z-50"
          fieldName="endereco"
          placeholder="Endereço"
          :min="3"
          @invalid-input="updateErrorsForm"
        />

        <EmailInput
          v-model="promotionalForm.email"
          @keypress.enter.prevent
          class="flex flex-col relative z-50"
          @invalid-input="updateErrorsForm"
        />

        <StringInput
          v-model="promotionalForm.meet"
          @keypress.enter.prevent
          fieldName="conheceu"
          placeholder="Como você conheceu o feijones?"
          class="flex flex-col relative z-50"
          :min="3"
          @invalid-input="updateErrorsForm"
        />
        <ButtonAPI
          class="relative z-50"
          :isRequestInProgress="isRequestInProgress"
          :isInvalidInputs="!isValidInputs"
          @click="handleCreatePromotionalCode($event)"
        />
      </form>
      <SuccessCard v-else :cupom="cupom" />
    </div>
    <div class="relative h-10 items__container">
      <img
        src="../../assets/Svg/wave-haikei.svg"
        class="absolute bottom-10 rounded-bl-xl rounded-br-xl z-0"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import StringInput from "../../components/Form/StringInput.vue";
import PhoneInput from "../../components/Form/PhoneInput.vue";
import EmailInput from "../../components/Form/EmailInput.vue";
import AddressInput from "../../components/Form/AddressInput.vue";
import ButtonAPI from "../../components/Buttons/ButtonAPI.vue";
import SuccessCard from "../../components/Cupom/SuccessCard.vue";
import useCupons from "../../composables/cupons/useCupons";
export default {
  components: {
    StringInput,
    PhoneInput,
    EmailInput,
    AddressInput,
    SuccessCard,
    ButtonAPI,
  },

  setup() {
    const { createCupom, vinculateCupomCustomer } = useCupons();
    const promotionalForm = ref({
      name: "",
      phone: "",
      address: "",
      email: "",
      meet: "",
    });

    const errorsOnForm = ref({
      nome: "start",
      phone: "start",
      endereco: "start",
      email: "start",
      conheceu: "start",
    });

    const isRequestSuccess = ref(false);
    const isRequestInProgress = ref(false);
    const cupom = ref("");

    const updateErrorsForm = ({ field, value }) =>
      (errorsOnForm.value[field] = value);

    const isValidInputs = computed(() =>
      Object.values(errorsOnForm.value).every((input) => !input)
    );

    const getFirstName = () =>
      `${promotionalForm.value.name.split(" ")[0].toUpperCase()}`;
    const handleID = (id = 1) => {
      id = String(id);
      if (id.length < 2) {
        id = `0${id}`;
      }

      return id;
    };

    const generateCupom = (id = 28) => `F${handleID(id)}${getFirstName()}50`;

    const handleCreatePromotionalCode = async (e) => {
      e.preventDefault();

      isRequestInProgress.value = true;

      const payload = {
        nome: promotionalForm.value.name,
        tel: promotionalForm.value.phone,
        email: promotionalForm.value.email,
        aboutFeijones: promotionalForm.value.meet,
        razaoSoci: promotionalForm.value.address,
      };

      const { id } = await createCupom(payload);

      cupom.value = generateCupom(id);

      await vinculateCupomCustomer({ ...payload, dtNas: cupom.value, id });

      isRequestInProgress.value = false;
      isRequestSuccess.value = true;
    };

    return {
      promotionalForm,
      errorsOnForm,
      isRequestSuccess,
      isRequestInProgress,
      isValidInputs,
      cupom,
      handleCreatePromotionalCode,
      updateErrorsForm,
    };
  },
};
</script>

<style lang="postcss" scoped>
.cupom__container {
  background-image: url("../../assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.items__container {
  width: 340px;
}

@media screen and (min-width: 1024px) {
  .items__container {
    width: 438px;
  }
}
</style>
