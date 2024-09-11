<template lang="">
    <section>
        <div class="container">
            <div class="task">
                <div class="more__choosen" :class="{'open': moreChoosen}">
                    <div class="error">
                        <h1>Ошибка!</h1>
                        <p>Выбрано больше двух документов</p>
                        <svg @click.prevent="moreChoosen = false" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M9.48531 23.3988C9.07781 23.8063 9.07781 24.4669 9.48531 24.8744C9.89281 25.2819 10.5535 25.2819 10.961 24.8744L9.48531 23.3988ZM17.9175 17.9179C18.325 17.5104 18.325 16.8498 17.9175 16.4423C17.51 16.0347 16.8494 16.0347 16.4419 16.4423L17.9175 17.9179ZM16.4419 16.4423C16.0344 16.8498 16.0344 17.5104 16.4419 17.9179C16.8494 18.3254 17.51 18.3254 17.9175 17.9179L16.4419 16.4423ZM24.8741 10.9614C25.2816 10.5539 25.2816 9.89318 24.8741 9.48568C24.4665 9.07818 23.8059 9.07818 23.3984 9.48568L24.8741 10.9614ZM17.9175 16.4423C17.51 16.0347 16.8494 16.0347 16.4419 16.4423C16.0344 16.8498 16.0344 17.5104 16.4419 17.9179L17.9175 16.4423ZM23.3984 24.8744C23.8059 25.2819 24.4665 25.2819 24.8741 24.8744C25.2816 24.4669 25.2816 23.8063 24.8741 23.3988L23.3984 24.8744ZM16.4419 17.9179C16.8494 18.3254 17.51 18.3254 17.9175 17.9179C18.325 17.5104 18.325 16.8498 17.9175 16.4423L16.4419 17.9179ZM10.961 9.48568C10.5535 9.07818 9.89281 9.07818 9.48531 9.48568C9.07781 9.89318 9.07781 10.5539 9.48531 10.9614L10.961 9.48568ZM10.961 24.8744L17.9175 17.9179L16.4419 16.4423L9.48531 23.3988L10.961 24.8744ZM17.9175 17.9179L24.8741 10.9614L23.3984 9.48568L16.4419 16.4423L17.9175 17.9179ZM16.4419 17.9179L23.3984 24.8744L24.8741 23.3988L17.9175 16.4423L16.4419 17.9179ZM17.9175 16.4423L10.961 9.48568L9.48531 10.9614L16.4419 17.9179L17.9175 16.4423Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <h2>{{task?.question}}</h2>
                <span>{{task?.condition}}</span>
                <ul>
                    <li v-for="opt in task?.options" :key="opt.id">
                        <input @change="(e) => addToAnswers(e)" :value="opt.id" type="checkbox" name="" id="1">
                        <label for="1">{{opt.option}}</label>
                    </li>
                    
                </ul>
                <div class="helps">
                    <div class="help" v-for="(hlp, index) in task?.help" :key="index" :class="{'open': firstHelpOpen}">
                        <div class="top" @click.prevent="firstHelpOpen = !firstHelpOpen"><h1>Подсказка {{index}}<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3361 23.067C28.1392 23.8701 29.4413 23.8701 30.2444 23.067C31.0475 22.2639 31.0475 20.9618 30.2444 20.1587L17.9057 7.82002C17.1026 7.01693 15.8005 7.01693 14.9974 7.82002L2.65868 20.1587C1.85559 20.9618 1.85559 22.2639 2.65868 23.067C3.46178 23.8701 4.76385 23.8701 5.56694 23.067L16.4515 12.1824L27.3361 23.067Z" fill="white"/>
</svg></h1></div>
                        <div class="bottom">{{hlp}}</div>
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
            task: null,
            selectedAnswers: [],
            moreChoosen: false
        }
    },
    methods: {
        addToAnswers(e) {
            if (this.selectedAnswers.length < 2) {
                if (this.selectedAnswers.includes(e.target.value)) {
                    this.selectedAnswers = this.selectedAnswers.filter(ans => ans !== e.target.value)
                } else {
                    this.selectedAnswers.push(e.target.value)
                }
            } else {
                this.moreChoosen = true;
                return;
            }
            console.log(this.selectedAnswers)
        },
        findCurrentCase() {
            const path = this.$route.params.case.split("-").join(" ");
            this.task = cases.find((cs) => cs.title.toLowerCase() === path).caseQuestions.find(ques => ques.id == this.$route.params.taskNum)
        }
    },
    watch: {
        '$route'() {
            this.findCurrentCase();
        }
    },
    mounted() {
        this.findCurrentCase()
        console.log(this.task)
    }
}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    padding-block: 150px;
    background: url(/src/assets/images/handbg.png) rgb(43, 43, 43) 50% / cover no-repeat;

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

        .more__choosen {
            display: none;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            backdrop-filter: blur(2px);
            position: fixed;
            z-index: 999999;
            justify-content: center;
            align-items: center;

            &.open {
                display: flex;
            }

            .error {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 0.5rem;
                padding: 2rem 1.5rem;
                border-radius: 40px;
                background: rgba(30, 30, 30, 0.92);
                backdrop-filter: blur(5.0071940422058105px);

                svg {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    cursor: pointer;
                }

                h1 {
                    color: #FFF;
                    font-family: 'Roboto';
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }

                p {
                    color: #FFF;
                    text-align: center;
                    font-family: 'Roboto';
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }

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