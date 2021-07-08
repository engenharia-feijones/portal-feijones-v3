<template>
  <div></div>
</template>

<script>
export default {
  created() {
    const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`;
    window.location = url;
  },
};
</script>
