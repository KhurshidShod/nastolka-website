<template lang="">
    <Hero />
    <HowToPlay />
    <FAQ />
    <BestDetectives />
    <Magasine />
</template>
<script>
import Hero from '../components/HomePageComponents/Hero.vue';
import HowToPlay from '../components/HomePageComponents/HowToPlay.vue';
import FAQ from '../components/HomePageComponents/FAQ.vue';
import BestDetectives from '../components/HomePageComponents/BestDetectives.vue';
import Magasine from '../components/HomePageComponents/Magasine.vue';
export default {
    components: {
        Hero,
        HowToPlay,
        FAQ,
        BestDetectives,
        Magasine
    }
}
</script>
<style lang="" scoped>

</style>