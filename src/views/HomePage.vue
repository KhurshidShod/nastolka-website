<template lang="">
    <Hero />
    <HowToPlay />
    <FAQ />
    <BestDetectives />
    <Magazine />
</template>
<script>
import Hero from '../components/HomePageComponents/Hero.vue';
import HowToPlay from '../components/HomePageComponents/HowToPlay.vue';
import FAQ from '../components/HomePageComponents/FAQ.vue';
import BestDetectives from '../components/HomePageComponents/BestDetectives.vue';
import Magazine from '../components/HomePageComponents/Magasine.vue';
export default {
    components: {
        Hero,
        HowToPlay,
        FAQ,
        BestDetectives,
        Magazine
    }
}
</script>
<style lang="" scoped>

</style>