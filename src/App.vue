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
    window.addEventListener('DOMContentLoaded', this.hideLoading);
  },
  beforeDestroy() {
    window.removeEventListener('DOMContentLoaded', this.hideLoading);
  },
  methods: {
    hideLoading() {
      this.isLoading = false;
    },
  }
}
</script>

<style scoped></style>
