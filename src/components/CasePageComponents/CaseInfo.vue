<template lang="">
    <section>
        <div class="container">
            <div class="case">
                <!-- <h1>{{currentCase?.title.split(" ").slice(0,1).join("")}} <span>{{currentCase?.title.split(" ").slice(1,2).join("")}}</span> {{currentCase?.title.split(" ").slice(2).join(" ")}}</h1>
                <p>{{currentCase?.description}}</p>
                <main-button @click="redirect()" text="НАЧАТЬ" :fontSize="42" :padInline="44" :padBlock="20"></main-button>
                <h3>КАК ИГРАТЬ?</h3> -->
                <h1>загадочное <span>убийство</span> на вилле кортни</h1>
                <p>11 июля 2020 года в маленьком городке Роадленд произошло шокирующее убийство Оливии Грин. Девушка была убита в собственном доме. Полиция арестовала Джейка Робинсона. Суд приговорил его к смертной казне. Ваша работа – изучить материалы дела, опровергнуть вину Джейка и найти настоящего убийцу.</p>
                <main-button @click="redirect()" text="НАЧАТЬ" :fontSize="42" :padInline="44" :padBlock="20"></main-button>
                <h3>КАК ИГРАТЬ?</h3>
            </div>
        </div>
    </section>
</template>
<script>
import { cases } from '../../assets/data';
export default {
    data() {
        return {
            currentCase: null
        }
    },
    watch: {
        '$route'() {
            this.findCurrentCase();
        }
    },
    mounted() {
        this.findCurrentCase()
    },
    methods: {
        // findCurrentCase() {
            // const path = this.$route.params.case.split("-").join(" ");
            // this.currentCase = cases.find((cs) => cs.title.toLowerCase() === path)
            // console.log(this.currentCase)
        // },
        redirect() {
            this.$router.push(`/${this.currentCase.title.toLowerCase().split(" ").join("-")}/confirmation`)
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    padding: 200px 5rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.73) 0%, rgba(0, 0, 0, 0.73) 100%), url(/src/assets/images/case/808feb3d2aa6a887c31c4f714e41ad3e.png) no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

    @media (max-width: 950px) {
        padding: 200px 2rem;
    }

    @media (max-width: 850px) {
        padding: 200px 0;
    }

    .case {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;

        h1 {
            color: #FFF;
            text-align: center;
            font-family: "Downcome(RUS BY LYAJKA)";
            font-size: 120px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            @media (max-width: 1300px) {
                font-size: 100px;
            }

            @media (max-width: 1150px) {
                font-size: 85px;
            }

            @media (max-width: 950px) {
                font-size: 75px;
            }

            @media (max-width: 850px) {
                font-size: 65px;
            }

            @media (max-width: 700px) {
                font-size: 50px;
            }

            @media (max-width: 590px) {
                font-size: 40px;
            }

            span {
                background: linear-gradient(180deg, #CF0000 33.7%, #650000 63.71%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: "Another Danger";
                letter-spacing: 14.4px;

                @media (max-width: 950px) {
                    letter-spacing: 10px;
                }

                @media (max-width: 700px) {
                    letter-spacing: 5px;
                }
            }
        }

        p {
            color: #FEFEFF;
            text-align: center;
            font-family: 'Roboto';
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            @media (max-width: 950px) {
                font-size: 18px;
            }

            @media (max-width: 850px) {
                font-size: 16px;
            }

            @media (max-width: 590px) {
                font-size: 14px;
            }

        }

        button {
            color: #FFF;
            text-align: center;
            font-family: 'Roboto';
            font-size: 42px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            @media (max-width: 950px) {
                font-size: 20px;
            }
        }

        h3 {
            color: #7C7C7C;
            text-align: center;
            font-family: "Another Danger";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 8.8px;
            text-decoration-line: underline;

            @media (max-width: 850px) {
                font-size: 35px;
            }

            @media (max-width: 550px) {
                font-size: 30px;
            }

            @media (max-width: 450px) {
                font-size: 20px;
            }
        }
    }
}
</style>