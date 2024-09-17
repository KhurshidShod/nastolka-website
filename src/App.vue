<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';

export default {
  components: {
    Header,
    Loading,
    Footer
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.checkAllLoaded();
  },
  methods: {
    checkAllLoaded() {
      const allImages = Array.from(document.images);
      const imagesStillLoading = allImages.filter(img => !img.complete);

      if (imagesStillLoading.length === 0) {
        this.hideLoading();
      } else {
        imagesStillLoading.forEach(img => img.addEventListener('load', this.checkAllLoaded));
      }

      window.addEventListener('load', this.hideLoading);
    },
    hideLoading() {
      this.isLoading = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('load', this.hideLoading);
  }
}
</script>

<style scoped></style>
