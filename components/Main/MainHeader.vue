<template>
  <div>
    <header>
      <NuxtLink to="/" v-show="logoPath">
        <img :src="logoPath" alt="Logotipo" />
      </NuxtLink>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/products">
              <ion-icon name="bag-outline"></ion-icon>
              <span>Produtos</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              <ion-icon name="business-outline"></ion-icon>
              <span>Sobre</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              <ion-icon name="call-outline"></ion-icon>
              <span>Contato</span></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/cart">
              <ion-icon name="cart-outline"></ion-icon>
              <span>Carrinho</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <CatalogNavigation />
  </div>
</template>

<script>
import data from "~/assets/db/db.json";
import CatalogNavigation from "~/components/Main/CatalogNavigation.vue";

export default {
  data() {
    return {
      logoPath: "",
    };
  },
  components: {
    CatalogNavigation,
  },
  created() {
    this.logoPath = data.metadata.logo;
  },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--lightgrey);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

header img {
  width: 100px;
}

header img:hover {
  cursor: pointer;
  filter: brightness(1.1);
}

header nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  width: 100%;
}

header nav ul li a {
  color: var(--gunmetal);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

header nav ul li a:hover {
  color: var(--primary);
  cursor: pointer;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  header img {
    width: 50px;
    padding-top: 1rem;
  }

  header nav ul li a span {
    display: none;
  }
}
</style>