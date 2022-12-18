<template>
  <div class="products-container">
    <h1 class="carousel-title">{{ title }}</h1>
    <div class="products-carousel">
      <button @click="previousProduct" class="carousel-controls">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
      <div class="products" ref="products">
        <Card
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          :image="product.image"
        />
      </div>
      <button @click="nextProduct" class="carousel-controls">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Produtos em destaque",
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    nextProduct() {
      this.$refs.products.scrollLeft += 300;
    },
    previousProduct() {
      this.$refs.products.scrollLeft -= 300;
    },
  },
};
</script>

<style scoped>

.products-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.products-carousel {
  display: grid;
  grid-template-columns: 5% 90% 5%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
}

.products {
  padding: 0 2rem;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 4rem;
  width: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  height: 250px;
}

.products::-webkit-scrollbar {
  display: none;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0;
}

button {
  background: var(--white);
  border: none;
  height: 100%;
  width: auto;
  font-size: 16pt;
}

button:hover {
  filter: brightness(0.9);
  cursor: pointer;
}

@media (max-width: 768px) {
  .products {
    padding: 0 1rem;
    gap: 2rem;
  }

  .products-carousel {
    grid-template-columns: 100%;
  }

  button {
    display: none;
  }
}
</style>