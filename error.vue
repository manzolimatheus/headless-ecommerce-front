<template>
  <NuxtLayout>
    <div class="error">
      <h1>Oops! Ocorreu um erro inesperado...</h1>
      <p>
        Pedimos desculpas pelo incoveniente! Caso o erro persiste, por favor,
        entre em contato com nosso suporte.
      </p>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>

.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>