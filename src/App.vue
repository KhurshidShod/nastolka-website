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
    // Set up the window.onload event to hide the loader once the page is fully loaded
    window.onload = () => {
      this.isLoading = false;
    };
  },
}
</script>
<style scoped></style>