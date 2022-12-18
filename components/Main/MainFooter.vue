<template>
  <footer>
    <p>Matheus Manzoli - {{ year }}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  background: var(--dark);
  color: var(--white);
  width: 100%;
  text-align: center;
  padding: 2rem;
}
</style>