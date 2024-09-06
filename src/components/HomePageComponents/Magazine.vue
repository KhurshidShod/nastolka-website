<template lang="">
    <section>
        <div class="container">
            <div class="magasine">
                <h1>магазин</h1>
                <div class="items">
                    <div class="item">
                        <div>
                            <h3>Загадочное убийство на вилле Кортни</h3>
                            <p>здесь можно вставить краткое описание сюжета конкретной игры</p>
                        <img src="/src/assets/images/magazine/185480d0cf28dd4355da38b3223e42a5.png" alt="">
                        <main-button text="РАССЛЕДОВАТЬ"></main-button>
                        </div>
                        <img src="/src/assets/images/magazine/185480d0cf28dd4355da38b3223e42a5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    background: url(/src/assets/images/magazine/magazinebg.png) rgb(36, 36, 36) -4.678px 0px / 129.071% 96.46% no-repeat;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .magasine {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5rem;

        h1 {
            text-align: center;
            font-family: "Another Danger";
            font-size: 72px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 3.96px;
            background: linear-gradient(180deg, #CF0000 50%, #650000 99.59%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media (max-width: 800px) {
                font-size: 56px;
            }

            @media (max-width: 650px) {
                font-size: 42px;
            }

            @media (max-width: 450px) {
                font-size: 26px;
            }
        }

        .items {
            width: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: 1050px) {
                width: 100%;
            }

            .item {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1.5rem;
                border-radius: 56px;
                background: #222;
                box-shadow: inset 0px 0px 6.452px 0px rgba(0, 0, 0, 0.45);
                padding: 75px;
                max-width: 1100px;

                @media (max-width: 800px) {
                    flex-direction: column;
                }

                @media (max-width: 600px) {
                    padding: 2rem;
                }

                div {
                    display: flex;
                    justify-content: center;
                    align-items: start;
                    flex-direction: column;
                    gap: 1rem;
                    width: 50%;

                    @media (max-width: 800px) {
                        align-items: center;
                        gap: 1rem;
                    }

                    @media (max-width: 450px) {
                        gap: 10px;
                    }

                    img {
                        display: none;

                        @media (max-width: 800px) {
                            display: block;
                            width: 100%;
                        }
                    }

                    @media (max-width: 800px) {
                        width: 100%;
                    }

                    h3 {
                        color: #F0F0F0;
                        font-family: 'Roboto';
                        font-size: 42px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;

                        @media (max-width: 800px) {
                            font-size: 32px;
                            text-align: center;
                        }

                        @media (max-width: 650px) {
                            font-size: 24px;
                            text-align: center;
                        }

                        @media (max-width: 350px) {
                            font-size: 16px;
                            text-align: center;
                        }
                    }

                    p {
                        color: #F0F0F0;
                        font-family: 'Roboto';
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;

                        @media (max-width: 800px) {
                            display: none;
                        }
                    }

                    button {
                        width: 100%;
                        color: #FFF;
                        text-align: center;
                        font-family: 'Roboto';
                        font-size: 32px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;

                        @media (max-width: 800px) {
                            font-size: 22px;
                        }

                        @media (max-width: 450px) {
                            padding: 8px 14px;
                            font-size: 18px;
                            width: auto;
                        }

                        @media (max-width: 350px) {
                            padding: 8px 14px;
                            font-size: 14px;
                            width: auto;
                        }
                    }
                }

                img {
                    width: 50%;
                    border-radius: 32px;

                    @media (max-width: 800px) {
                        display: none;
                        max-width: 300px;
                    }

                    @media (max-width: 350px) {
                        width: 150px !important;
                        border-radius: 6px;
                    }
                }
            }
        }
    }
}
</style>