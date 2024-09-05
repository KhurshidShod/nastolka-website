<template lang="">
    <Hero />
    <HowToPlay />
    <FAQ />
    <!-- <BestDetectives /> -->
</template>
<script>
import Hero from '../components/HomePageComponents/Hero.vue';
import HowToPlay from '../components/HomePageComponents/HowToPlay.vue';
import FAQ from '../components/HomePageComponents/FAQ.vue';
import BestDetectives from '../components/HomePageComponents/BestDetectives.vue';
export default {
    components: {
        Hero,
        HowToPlay,
        FAQ,
        BestDetectives
    }
}
</script>
<style lang="" scoped>
    
</style>