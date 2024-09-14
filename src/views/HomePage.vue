<template lang="">
    <Hero />
    <HowToPlay openingPage="home" />
    <FAQ />
    <BestDetectives />
    <Magasine />
</template>
<script>

import { defineAsyncComponent } from 'vue';
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