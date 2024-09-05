<template lang="">
    <button class="main_button">{{ text }}</button>
</template>
<script>
export default {
    props: ['text']
}
</script>
<style lang="scss" scoped>
button {
    display: flex;
    padding: 20px 44px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 11px;
    background: var(--color-red);
    box-shadow: 0px 0px 45px 0px #9E0B0B;
    color: #FFF;
    text-align: center;
    font-family: 'Roboto';
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;

    @media (max-width: 1100px) {
        padding: 16px 22px;
        font-size: 36px;
    }

    @media (max-width: 900px) {
        padding: 16px 22px;
        font-size: 24px;
    }
}
</style>