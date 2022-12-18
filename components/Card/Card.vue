<template>
  <div class="card">
    <NuxtLink :to="`/products/${id}`">
      <img :src="image" :alt="title" v-show="image" />
      <h3 v-show="title">{{ minifiedTitle }}</h3>
      <p v-show="description">{{ description }}</p>
      <p class="price" v-show="price">{{ currency }} {{ price }}</p>
    </NuxtLink>
    <button class="add-to-cart-button" @click="addToCart" v-show="showButton">
      {{ buttonMessage }}
    </button>
  </div>
</template>

<script>
import data from "~/assets/db/db.json";

export default {
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
    image: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    description: {
      type: String,
      default: () => "",
    },
    price: {
      type: Number,
      default: () => 0,
    },
    showButton: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      buttonMessage: "Adicionar ao carrinho",
      currency: "$",
    };
  },
  methods: {
    addToCart() {
      this.buttonMessage = "Adicionado ao carrinho";
      setTimeout(() => {
        this.buttonMessage = "Adicionar ao carrinho";
      }, 2000);
    },
  },
  computed: {
    minifiedTitle() {
      return this.title.substring(0, 30) + "...";
    },
    description() {
      return this.description.substring(0, 100) + "...";
    },
  },
  created() {
    this.currency = data.metadata.currency;
  },
};
</script>

<style scoped>
.card {
  width: 14rem;
  height: 240px;
  text-align: center;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.card p {
  color: #2f2f2f;
  font-size: 8pt;
  word-break: break-word;
  line-break: anywhere;
  white-space: pre-line;
}

.card h3 {
  color: #2f2f2f;
  font-size: 10pt;
}

.card .price {
  color: #2f2f2f;
  font-size: 16pt;
}

.card > .add-to-cart-button {
  width: 100%;
  background-color: black;
  color: white;
  padding: 4%;
}

.card > .add-to-cart-button:hover {
  background: var(--white);
  color: var(--dark);
  cursor: pointer;
}
</style>