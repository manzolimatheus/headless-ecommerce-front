<template>
  <nav class="catalogs" v-show="catalogs.length > 0">
    <ul>
      <li v-for="catalog in catalogs" :key="catalog.id">
        <NuxtLink :to="`/catalog/${catalog.id}`">
          {{ catalog.name }}
        </NuxtLink>
        <div class="dropdown" v-show="getCategories(catalog).length > 0">
          <ul>
            <li v-for="category in getCategories(catalog)" :key="category.id">
              <NuxtLink :to="`/category/${category.id}`">
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import data from "~/assets/db/db.json";

export default {
  data() {
    return {
      catalogs: [],
    };
  },
  methods: {
    getCategories(catalog) {
      return data.categories.filter((category) => category.catalogId === catalog.id && category.active);
    },
  },
  created() {
    this.catalogs = data.catalogs.filter((catalog) => catalog.active);
  },
};
</script>

<style scoped>
.catalogs {
  background: var(--dark);
  color: var(--white);
  padding: 0.5rem;
}

.catalogs ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.catalogs ul li a {
  color: var(--white);
}

.catalogs ul li a:hover {
  color: var(--primary);
  cursor: pointer;
}

.dropdown {
  background: white;
  border: 2px solid var(--dark);
  color: var(--dark);
  padding: 1rem;
  position: absolute;
  z-index: 1;
  display: none;
}

.dropdown ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
}

.dropdown ul li a {
  color: var(--dark);
}

.catalogs ul li a:hover + .dropdown {
  display: block;
}

.dropdown:hover {
  display: block;
}
</style>