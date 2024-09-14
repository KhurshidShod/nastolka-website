<template lang="">
    <section>
        <div class="container">
            <div class="confirmation">
                <img class="lock" src="/src/assets/images/enter-code/lock.png" alt="">
                <img class="lupa" src="/src/assets/images/enter-code/lupaimage.png" alt="">
                <h2>Введите код</h2>
                <div>
                    <p>Чтобы перейти к заданию 2, введите код, находящийся в конверте 1</p>
                </div>
                <div class="enter">
                    <input type="number" name="" id="">
                    <img @click.prevent="$router.push('playground/1')" src="/src/assets/icons/confirmbtn.svg" alt="">

                </div>
                <p class="error_code" v-if="errorCode">Код неверный</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            errorCode: false
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    padding-top: 200px;
    padding-bottom: 100px;
    background: url(/src/assets/images/handbg.png) rgb(32, 32, 32) 50% / cover no-repeat;

    .container {
        @media (max-width: 600px) {
            padding: 0;
        }
    }

    .confirmation {
        position: relative;
        width: 100%;
        min-height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-inline: 100px 250px;
        padding-bottom: 15rem;
        padding-top: 5rem;
        background-attachment: fixed;
        gap: 2rem;
        background-position: left;
        background: url(/src/assets/images/enter-code/finger-white.png) rgba(211, 211, 211, 0) 50% / cover no-repeat;

        .error_code {
            font-size: 18px;
            color: red;
            font-weight: 400;
        }

        @media (max-width: 1200px) {
            gap: 1rem;
            padding-inline: 100px 220px;
        }

        @media (max-width: 950px) {
            padding-inline: 50px 100px;
            min-height: 650px;
        }

        @media (max-width: 800px) {
            padding-inline: 50px;
        }

        @media (max-width: 750px) {
            padding-top: 5rem;
            padding-inline: 70px;
            padding-bottom: 12rem;
            min-height: 0;
        }

        @media (max-width: 600px) {
            padding-inline: 10px;
        }

        .buttons {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: row;

            button {
                padding: 10px 25px;
                font-size: 24px;
            }
        }

        .lock {
            position: absolute;
            width: 440px;
            height: 460px;
            top: -5%;
            left: -17%;

            @media (max-width: 1200px) {
                gap: 1rem;
                top: 0;
            }

            @media (max-width: 900px) {
                left: -27%;
                width: 400px;
                height: 420px;
                top: -5%;
            }

            @media (max-width: 750px) {
                left: -30%;
                width: 300px;
                height: 320px;
                top: -15%;
            }

            @media (max-width: 550px) {
                left: -20%;
                width: 200px;
                height: 220px;
                top: -5%;
            }

            @media (max-width: 350px) {
                left: -40%;
                width: 200px;
                height: 220px;
                top: -5%;
            }
        }

        .lupa {
            position: absolute;
            width: 220px;
            height: 250px;
            bottom: 18%;
            right: 10%;

            @media (max-width: 1200px) {
                width: 220px;
                height: 240px;
                bottom: 15%;
            }

            @media (max-width: 950px) {
                width: 180px;
                height: 200px;
                bottom: 10%;
            }

            @media (max-width: 750px) {
                width: 150px;
                height: 170px;
                bottom: 15%;
                right: 0%;
            }

            @media (max-width: 550px) {
                width: 100px;
                height: 120px;
                bottom: 15%;
            }
        }

        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: var(--text-dark);
            text-align: center;
            font-family: 'Roboto';
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
            z-index: 2;

            @media (max-width: 1200px) {
                font-size: 36px;
            }

            @media (max-width: 750px) {
                font-size: 28px;
            }

            @media (max-width: 550px) {
                font-size: 22px;
            }

            img {
                @media (max-width: 750px) {
                    width: 25px;
                    height: 25px;
                }
            }
        }

        p {
            color: var(--text-dark);
            text-align: center;
            font-family: 'Roboto';
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
            max-width: 480px;

            @media (max-width: 1200px) {
                font-size: 18px;
            }

            @media (max-width: 750px) {
                font-size: 16px;
            }

            @media (max-width: 550px) {
                font-size: 14px;
            }
        }

        .enter {
            width: 250px;
            height: 100px;
            border-radius: 11px;
            background: linear-gradient(180deg, #CF0000 0%, #650000 100%), #D9D9D9;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;

            @media (max-width: 750px) {
                width: 175px;
                padding: 1rem;
                height: 60px;
            }

            img {
                @media (max-width: 750px) {
                    height: 40px;
                }
            }

            input {
                width: 50%;
                max-height: 50px;
                height: 100%;
                color: white;
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 42px;
                z-index: 2;

                @media (max-width: 750px) {
                    font-size: 24px;
                }

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                &[type=number] {
                    -moz-appearance: textfield;
                }
            }
        }
    }
}
</style>