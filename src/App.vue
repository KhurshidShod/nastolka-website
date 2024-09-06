<template>
  <Loading :show="isLoading" />
  <Header />
  <router-view @load="toggleLoading(false)"></router-view>
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
  created() {
    // Simulate loading delay or fetch data
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // 2 seconds loading time
  },
  methods: {
    toggleLoading(status) {
      this.isLoading = status;
    },
  },
}
</script>
<style scoped></style>