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
  created() {
    // Simulate loading delay or fetch data
    window.addEventListener("load", () => {
      this.isLoading = false
    })
  }
}
</script>
<style scoped></style>