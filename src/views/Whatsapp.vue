<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
   const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`
    window.location.href = url;
  },
};
</script>
