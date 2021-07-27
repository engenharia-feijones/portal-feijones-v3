<template>
  <input
    type="text"
    v-model="searchCupom"
    class="rounded p-2 border-2"
    placeholder="Filtrar pelo cupom"
  />
  <Table :customers="customers" />
</template>

<script>
import Table from "../../components/Cupom/Table.vue";
import useCupons from "../../composables/cupons/useCupons";
import useCuponsFilter from "../../composables/cupons/useCuponsFilter";
import { ref, onMounted, computed } from "vue";
export default {
  components: { Table },
  setup() {
    const { getCupons } = useCupons();
    const { filtredCustomers } = useCuponsFilter();
    const searchCupom = ref("");
    const customers = ref([]);

    onMounted(async () => {
      customers.value = await getCupons();
    });

    const filtred = computed(() =>
      filtredCustomers(searchCupom.value, customers.value)
    );
    return { customers: filtred, searchCupom };
  },
};
</script>

<style lang="postcss" scoped>
</style>