<template lang="">
    <section>
        <div class="container">
            <div class="best_detectives">
                <h1><span>ЛУЧШИЕ</span> ДЕТЕКТИВЫ <img src="/src/assets/images/best-detectives/d25914a2a059b9bdc9a4eb22ac03c56d.png" alt=""></h1>
                <div class="ratings">
                    <div :class="{'gold': index+1 === 1, 'silver': index+1 === 2, 'bronze': index+1 === 3}" class="rating" v-for="(player, index) in players" :key="player.id">
                        <img v-if="index + 1 === 1" class="number" src="/src/assets/images/best-detectives/Gold.svg" alt="">
                        <img v-else-if="index + 1 === 2" class="number" src="/src/assets/images/best-detectives/Silver.svg" alt="">
                        <img v-else-if="index + 1 === 3" class="number" src="/src/assets/images/best-detectives/Bronze.svg" alt="">
                        <p v-else class="number">{{index+1}}.</p>
                        <p class="name">{{player.name}}</p>
                        <p class="best">{{player.best}}</p>
                    </div>
                </div>
                <div class="login">
                    <!-- <img src="/src/assets/images/best-detectives/medals.png" alt=""> -->
                    <h1>Авторизуйтесь</h1>
                    <p> чтобы соревноваться с лучшими!</p>
                    <main-button text="АВТОРИЗОВАТЬСЯ"></main-button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { players } from '../../assets/data';
export default {
    data() {
        return {
            players: players
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    padding-top: 90px;
    padding-bottom: 150px;
    background: url(/src/assets/images/best-detectives/bestbg.png) rgba(0, 0, 0, 0.843) 100% / cover no-repeat;

    .best_detectives {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            position: relative;
            text-align: center;
            font-family: "Another Danger";
            font-size: 74px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 16.28px;
            color: white;

            span {
                background: linear-gradient(180deg, #CF0000 50%, #650000 99.59%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            img {
                position: absolute;
                top: -85%;
                right: -30%;
            }
        }

        .ratings {
            margin-top: 100px;
            width: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .rating {
                width: 100%;
                height: 80px;
                border-radius: 20px;
                opacity: 0.8;
                display: flex;
                justify-content: start;
                align-items: center;
                padding: 1rem;
                opacity: 0.8;
                box-shadow: 0px -4px 15.6px 0px rgba(0, 0, 0, 0.42);

                &.gold {
                    background: #3A2F05 !important;
                }

                &.silver {
                    background: #292E37 !important;
                }

                &.bronze {
                    background: #271304 !important;
                }

                &:nth-child(even) {
                    background: #0A0A0A;
                }

                &:nth-child(odd) {
                    background: #292929;
                }

                p {
                    color: #FFF;
                    text-align: center;
                    font-family: 'Roboto';
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: -0.48px;

                    &.number {
                        width: 10%;
                        text-align: center;
                    }

                    &.name {
                        width: 35%;
                    }

                    &.best {
                        flex-grow: 1;
                        text-align: center;
                    }
                }
            }
        }

        .login {
            position: relative;
            width: 70%;
            padding: 2rem;
            height: 450px;
            margin-top: 220px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            background: url(/src/assets/images/best-detectives/loginbg.png) 0px -0.975px / 100% 100.179% no-repeat;
            box-shadow: 0px 56px 56px 0px rgba(0, 0, 0, 0.17), 0px 14px 31px 0px rgba(0, 0, 0, 0.20);
            img{
                position: absolute;
                right: 0;
                top: 50%;
            }
            h1 {
                text-align: center;
                font-family: "Another Danger";
                font-size: 74px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 16.28px;
                background: linear-gradient(180deg, #CF0000 50%, #650000 99.59%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            p {
                color: #272727;
                text-align: center;
                font-family: 'Roboto';
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            button {
                margin-top: 2rem;
            }
        }
    }
}
</style>