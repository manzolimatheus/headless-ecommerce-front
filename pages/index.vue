<template>
  <div>
    <Carousel :images="images" />
    <ProductCarousel :products="products" />
    <FeaturedBanner
      :route="featuredBanner.route"
      :image="featuredBanner.image"
      :title="featuredBanner.title"
    />
    <ProductCarousel :products="products" />
    <ProductCarousel :products="products" />
  </div>
</template>

<script>
import data from "~/assets/db/db.json";

export default {
  data() {
    return {
      images: [],
      products: [],
      featuredBanner: {},
    };
  },
  created() {
    this.images = data.banner.filter((image) => image.active);
    this.products = data.products.filter((product) => product.active);
    this.featuredBanner = data.featuredBanner;
  },
};
</script>