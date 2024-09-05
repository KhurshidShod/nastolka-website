<template lang="">
    <section>
        <img class="dnevnik" src="/src/assets/images/howtoplay/dnevnik.png" alt="">
        <div class="container">
            <div class="howToPlay">
                <h1 class="howToPlay_header">КАК ИГРАТЬ?</h1>
                <div class="howToPlay_tips">
                    <div class="howToPlay_tips_group">
                        <div class="howToPlay_tips_group_tip" v-for="rule in allRules.slice(0, 2)" :key="rule.id">
                        <span>{{rule.id + 1}}.</span>
                        <h1>{{rule.title}}</h1>
                        <p>{{rule.content}}</p>
                    </div>
                    </div>
                    <div class="howToPlay_tips_group">
                        <div class="howToPlay_tips_group_tip" v-for="rule in allRules.slice(2, 4)" :key="rule.id">
                        <span>{{rule.id + 1}}.</span>
                        <h1>{{rule.title}}</h1>
                        <p>{{rule.content}}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { rules } from '../../assets/data';
export default {
    data() {
        return {
            allRules: rules
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    padding-top: 130px;
    padding-bottom: 150px;
    background: url(/src/assets/images/howtoplay/howtoplaybg.png) lightgray 0px 0px / 100.312% 99.038% no-repeat;
    background-position: center;
    background-color: black;
    background-size: cover;
    background-attachment: local;
    background-repeat: no-repeat;
    overflow: hidden;

    .dnevnik {
        position: absolute;
        top: 0%;
        left: 0;
        width: 40%;
    }

    .howToPlay {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 122px;

        &_header {
            color: #27221B;
            text-align: center;
            font-family: "Another Danger";
            font-size: 74px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 16.28px;

            @media (max-width: 900px) {
                font-size: 64px;
            }

            @media (max-width: 580px) {
                font-size: 56px;
                font-weight: 700;
            }
        }

        &_tips {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 150px;

            @media (max-width: 850px) {
                width: 100%;
                flex-direction: column;
                align-items: center;
            }

            &_group {
                width: calc(100% / 2 - 100px);
                display: flex;
                flex-direction: column;
                gap: 100px;
                justify-content: space-between;

                @media (max-width: 850px) {
                    width: 100%;
                }

                &_tip {
                    display: flex;
                    justify-content: start;
                    align-items: start;
                    flex-direction: column;
                    position: relative;
                    width: 100%;
                    max-width: 650px;
                    min-width: 200px;

                    @media (max-width: 850px) {
                        width: 100%;
                    }

                    :last-child {
                        order: 1;
                    }

                    span {
                        position: absolute;
                        right: -10%;
                        top: -50%;
                        color: rgba(130, 120, 107, 0.27);
                        text-align: center;
                        leading-trim: both;
                        text-edge: cap;
                        font-family: "LT Remark";
                        font-size: 250px;
                        font-style: italic;
                        font-weight: 700;
                        line-height: normal;

                        @media (max-width: 850px) {
                            font-size: 200px;
                            right: 0;
                        }
                    }

                    h1 {
                        font-family: 'Roboto';
                        color: #272727;
                        font-size: 42px;
                        font-style: normal;
                        font-weight: 700;
                        z-index: 2;

                        @media (max-width: 850px) {
                            font-size: 36px;
                            font-weight: 700;
                        }
                    }

                    p {
                        color: #272727;
                        font-family: 'Roboto';
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                        z-index: 2;

                        &::first-letter {
                            text-transform: uppercase;
                        }

                        @media (max-width: 850px) {
                            font-size: 22px;
                        }
                    }
                }
            }


            .tip1 {
                order: 1;
            }
        }

    }
}
</style>