<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Header: defineAsyncComponent(() =>
      import("./components/Header.vue")
    ),
    Loading: defineAsyncComponent(() =>
      import("./components/Loading.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("./components/Footer.vue")
    )
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener('load', this.hideLoading);
  },
  beforeDestroy() {
    window.removeEventListener('load', this.hideLoading);
  },
  methods: {
    hideLoading() {
      this.isLoading = false;
    },
  }
}
</script>

<style scoped></style>
