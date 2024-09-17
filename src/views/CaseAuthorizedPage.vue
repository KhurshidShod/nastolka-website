<template lang="">
    <CaseInfo openingPage="Authorized" />
    <HowToPlay openingPage="case" />
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        CaseInfo: defineAsyncComponent(() =>
            import("../components/CasePageComponents/CaseInfo.vue")
        ),
        HowToPlay: defineAsyncComponent(() =>
            import("../components/HowToPlay.vue")
        )
    }
}
</script>
<style lang="scss" scoped></style>