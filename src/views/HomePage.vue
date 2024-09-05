<template lang="">
    <Hero />
    <HowToPlay />
    <FAQ />
</template>
<script>
import Hero from '../components/HomePageComponents/Hero.vue';
import HowToPlay from '../components/HomePageComponents/HowToPlay.vue';
import FAQ from '../components/HomePageComponents/FAQ.vue';
export default {
    components: {
        Hero,
        HowToPlay,
        FAQ
    }
}
</script>
<style lang="" scoped>
    
</style>