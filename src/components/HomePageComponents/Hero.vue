<template lang="">
    <section>
        <img class="hero_camera" src="/src/assets/images/hero/camera.png" alt="">
        <div class="container">
            <div class="hero">
                <div>
                    <h1>СМЕРТЕЛЬНЫЕ ТАЙНЫ</h1>
                <p>Станьте настоящим детективом и разгадайте запутанное дело 
                    об убийстве. Изучите улики, алиби и найдите настоящего убийцу!
                </p>
                </div>
                <main-button text="РАЗГАДАТЬ ДЕЛО"></main-button>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 905px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.73) 0%, rgba(0, 0, 0, 0.73) 100%), url(/src/assets/images/hero/heroBg.png) lightgray -1.562px 0px / 100.195% 99.448% no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .hero_camera{
        position: absolute;
        width: 650px;
        right: 0%;
        top: 85%;
        // bottom: -565px;
        z-index: 2;
        min-width: 120px;
    }
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 100px;
            margin-top: 100px;
            h1 {
                font-family: "Needleteeth";
                leading-trim: both;
                text-edge: cap;
                text-shadow: 0px 0px 150px rgb(226, 0, 0);
                font-size: 188px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 9.4px;
                background: linear-gradient(180deg, #CF0000 50%, #650000 99.59%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;
                @media (max-width: 1100px) {
                    font-size: 150px;
                    font-weight: 700;
                }
                @media (max-width: 900px) {
                    font-size: 110px;
                    font-weight: 700;
                }
                @media (max-width: 730px) {
                    font-size: 80px;
                    font-weight: 700;
                }
                @media (max-width: 730px) {
                    font-size: 55px;
                    font-weight: 700;
                }
            }

            p {
                max-width: 830px;
                color: #FFF;
                text-align: center;
                font-family: 'Roboto';
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                @media (max-width: 1100px) {
                    max-width: 650px;
                    font-size: 22px;
                }
                @media (max-width: 900px) {
                    max-width: 550px;
                    font-size: 20px;
                }
                @media (max-width: 730px) {
                    font-size: 16px;
                    max-width: 450px;
                }
            }
        }
    }
}
</style>