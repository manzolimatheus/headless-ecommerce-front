<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import "~/assets/css/main.css";

export default {
  methods: {
    setMaxWidth() {
      // Set max width of page the width of the monitor
      const maxWidth = window.innerWidth;
      document.body.style.maxWidth = maxWidth + "px";
    }
  },
  mounted() {
    this.setMaxWidth();
  },
}

</script>