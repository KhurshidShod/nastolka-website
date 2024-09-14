<template lang="">
    <Hero />
    <HowToPlay openingPage="home" />
    <FAQ />
    <BestDetectives />
    <Magasine />
</template>
<script>
// import Hero from '../components/HomePageComponents/Hero.vue';
// import HowToPlay from '../components/HowToPlay.vue';
// import FAQ from '../components/HomePageComponents/FAQ.vue';
// import BestDetectives from '../components/HomePageComponents/BestDetectives.vue';

import { defineAsyncComponent } from 'vue';

// import Magasine from '../components/HomePageComponents/Magasine.vue';
export default {
    components: {
        Hero: defineAsyncComponent(() =>
            import("../components/HomePageComponents/Hero.vue")
        ),
        HowToPlay: defineAsyncComponent(() =>
            import("../components/HowToPlay.vue")
        ),
        FAQ: defineAsyncComponent(() =>
            import("../components/HomePageComponents/FAQ.vue")
        ),
        BestDetectives: defineAsyncComponent(() =>
            import("../components/HomePageComponents/BestDetectives.vue")
        ),
        Magasine: defineAsyncComponent(() =>
            import("../components/HomePageComponents/Magasine.vue")
        )
    }
}
</script>
<style lang="" scoped>

</style>