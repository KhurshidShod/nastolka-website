<template lang="">
    <section>
        <div class="container">
            <div class="task">
                <h2>Вы можете доказать невиновность Джейка Робинсона?</h2>
                <span>Выберите 2
                    документа, которые опровергают его вину</span>
                <ul>
                    <li>
                        <input type="checkbox" name="" id="1">
                        <label for="1">Ответ на запрос Питеру Грину</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="2">
                        <label for="2">Ответ на запрос Питеру Грину</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="3">
                        <label for="3">Ответ на запрос Питеру Грину</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="4">
                        <label for="4">Ответ на запрос Питеру Грину</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="5">
                        <label for="5">Ответ на запрос Питеру Грину</label>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="6">
                        <label for="6">Ответ на запрос Питеру Грину</label>
                    </li>

                    <li>
                        <input type="checkbox" name="" id="7">
                        <label for="7">Ответ на запрос Питеру Грину</label>
                    </li>
                </ul>
                <div class="helps">
                    <div class="help" :class="{'open': firstHelpOpen}">
                        <div class="top" @click.prevent="firstHelpOpen = !firstHelpOpen"><h1>Подсказка 1<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3361 23.067C28.1392 23.8701 29.4413 23.8701 30.2444 23.067C31.0475 22.2639 31.0475 20.9618 30.2444 20.1587L17.9057 7.82002C17.1026 7.01693 15.8005 7.01693 14.9974 7.82002L2.65868 20.1587C1.85559 20.9618 1.85559 22.2639 2.65868 23.067C3.46178 23.8701 4.76385 23.8701 5.56694 23.067L16.4515 12.1824L27.3361 23.067Z" fill="white"/>
</svg></h1></div>
                        <div class="bottom">Обратите внимание 
                            на запрос Питеру Грину</div>
                    </div>
                    <div class="help" :class="{'open': secondHelpOpen}">
                        <div class="top" @click.prevent="secondHelpOpen = !secondHelpOpen"><h1>Подсказка 1<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3361 23.067C28.1392 23.8701 29.4413 23.8701 30.2444 23.067C31.0475 22.2639 31.0475 20.9618 30.2444 20.1587L17.9057 7.82002C17.1026 7.01693 15.8005 7.01693 14.9974 7.82002L2.65868 20.1587C1.85559 20.9618 1.85559 22.2639 2.65868 23.067C3.46178 23.8701 4.76385 23.8701 5.56694 23.067L16.4515 12.1824L27.3361 23.067Z" fill="white"/>
</svg></h1></div>
                        <div class="bottom">Обратите внимание 
                            на запрос Питеру Грину</div>
                    </div>
                </div>
                <span>
                    При выборе подсказки к вашему времени прохождения добавится 15мин
                </span>
            </div>
        </div>
    </section>
</template>
<script>
import { cases } from '../assets/data';
export default {
    data() {
        return {
            firstHelpOpen: false,
            secondHelpOpen: false,
            case: null,
        }
    },
    mounted() {
        console.log(this.case)
        this.case = cases.find(cs => cs.title.toLowerCase() === this.$route.params.case.toLowerCase().split("-").join(" "))
            ?.caseQuestions.find(ques => ques.id == this.$route.params.taskNum)
    }
}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    padding-block: 150px;
    background: url(/src/assets/images/handbg.png) lightgray 50% / cover no-repeat;

    .container {
        @media (max-width: 750px) {
            padding: 0;
        }
    }

    .task {
        width: 100%;
        background: url(/src/assets/images/task/taskbg.png) rgba(211, 211, 211, 0) 50% / cover no-repeat;
        padding: 2rem;
        gap: 2rem;
        display: flex;
        background-size: 100% 100%;
        padding-left: 25px;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-right: 200px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        @media (max-width: 750px) {
            padding-right: 10px;
            padding-left: 10px;
            background-size: 150% 100%;
        }

        ul {
            margin-top: 50px;
            margin-bottom: 50px;

            li {
                color: var(--text-dark);
                font-family: 'Roboto';
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 110%;
                margin-bottom: 20px;

                font-size: 24px;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;
                cursor: pointer;

                @media (max-width: 750px) {
                    font-size: 18px;
                }

                @media (max-width: 550px) {
                    font-size: 14px;
                }

                input {
                    appearance: none;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    border: 1px solid black;
                    padding: 3px;
                    cursor: pointer;


                    &:checked {
                        background-color: black;
                    }

                    p {
                        cursor: pointer;
                    }
                }
            }
        }

        .helps {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 85px;

            @media (max-width: 450px) {
                width: 95%;
                flex-direction: column;
                align-items: stretch;
                gap: 20px;
            }

            .help {
                position: relative;
                background: linear-gradient(180deg, #CF0000 0%, #650000 100%);
                border-radius: 9px;

                @media (max-width: 450px) {
                    width: 100%;
                }

                .top {
                    color: #FFF;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    padding: 10px 25px;
                    height: 65px;
                    border-radius: 9px;
                    background: linear-gradient(180deg, #CF0000 0%, #650000 100%);
                    cursor: pointer;


                    @media (max-width: 850px) {
                        padding: 7px 10px;
                        height: 50px;
                    }

                    @media (max-width: 450px) {
                        width: 100%;
                    }

                    h1 {
                        display: flex;
                        align-items: center;
                        font-family: 'Roboto';
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;

                        @media (max-width: 450px) {
                            width: 100%;
                        }

                        svg {
                            @media (max-width: 850px) {
                                width: 25px;
                                height: 25px;
                            }
                        }

                        @media (max-width: 850px) {
                            font-size: 16px;
                            padding: 7px 15px;
                            height: 50px;
                        }
                    }
                }

                .bottom {
                    position: absolute;
                    color: #FFF;
                    text-align: center;
                    font-family: 'Roboto';
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 110%;
                    border-radius: 8px;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    background: linear-gradient(180deg, rgba(207, 0, 0, 0.87) 0%, rgba(101, 0, 0, 0.87) 100%);
                    backdrop-filter: blur(3.2123777866363525px);
                    height: 0;
                    padding: 0;
                    overflow: hidden;
                    z-index: 5;
                }

                &.open {
                    .bottom {
                        padding: 80px 10px;
                        height: auto;

                        @media (max-width: 1050px) {
                            padding: 50px 10px;
                        }
                    }
                }
            }
        }

        h2 {
            color: var(--text-dark);
            text-align: center;
            font-family: 'Roboto';
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%;

            @media (max-width: 1050px) {
                font-size: 38px;
            }

            @media (max-width: 750px) {
                font-size: 32px;
            }

            @media (max-width: 550px) {
                font-size: 24px;
            }
        }

        span {
            color: var(--text-dark);
            text-align: center;
            font-family: 'Roboto';
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            display: inline-flex;
            padding: 14px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 13px;
            border: 1px solid #202020;

            @media (max-width: 1050px) {
                font-size: 18px;
                padding: 10px;
            }

            @media (max-width: 550px) {
                font-size: 14px;
                padding: 5px;
            }
        }
    }
}
</style>