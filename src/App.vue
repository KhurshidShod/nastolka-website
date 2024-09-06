<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
export default {
  components: {
    Header,
    Loading
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Listen to the window load event
    window.addEventListener('load', this.handleWindowLoad);
  },
  methods: {
    handleWindowLoad() {
      // Once the page has fully loaded, remove the loading spinner
      this.isLoading = false;
    },
  },
  beforeDestroy() {
    // Clean up the event listener
    window.removeEventListener('load', this.handleWindowLoad);
  },
}
</script>
<style scoped></style>