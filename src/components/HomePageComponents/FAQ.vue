<template lang="">
    <section id="faq">
        <img class="question_mark1" src="/src/assets/icons/quest1.svg" alt="">
        <img class="question_mark2" src="/src/assets/icons/quest2.svg" alt="">
        <div class="container">
            <div class="faq">
                <div class="faq_card" v-for="ques in questions" :key="ques.id">
                    <h1>{{ques.question}}</h1>
                    <p>{{ques.answer}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { questions } from '../../assets/data';
export default {
    data() {
        return {
            questions: questions
        }
    },
    mounted() {
        this.handleMouseMove();
    },
    methods: {
        handleMouseMove() {
            const questionMark1 = this.$el.querySelector('.question_mark1');
            const questionMark2 = this.$el.querySelector('.question_mark2');

            document.addEventListener('mousemove', (event) => {
                const { clientX: x, clientY: y } = event;
                questionMark1.style.transform = `translate(${(x - window.innerWidth / 2) * 0.05}px, ${(y - window.innerHeight / 2) * 0.05}px)`;
                questionMark2.style.transform = `translate(${(x - window.innerWidth / 2) * 0.05}px, ${(y - window.innerHeight / 2) * 0.05}px)`;
            });
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    background-image: url(/src/assets/images/faq/faqbg.png);
    padding-top: 124px;
    padding-bottom: 170px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.938);

    .question_mark1 {
        position: absolute;
        left: 45px;
        bottom: 145px;

        @media (max-width: 1150px) {
            width: 50px;
            left: 45px;
            bottom: 110px;
        }
    }

    .question_mark2 {
        position: absolute;
        right: 51px;
        top: 81px;

        @media (max-width: 1150px) {
            width: 50px;
            right: 51px;
            top: 51px;
        }
    }

    .faq {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;

        &_card {
            width: calc(100% / 3 - 15px);
            height: 285px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 15px;
            background: var(--flags-color);
            box-shadow: inset 0px 0px 31.6px 0px rgba(0, 0, 0, 0.7);
            gap: 20px;
            padding: 1rem;
            min-width: 250px;
            flex-grow: 1;
            z-index: 2;

            h1 {
                color: #FFF;
                text-align: center;
                font-family: "Another Danger";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 4.4px;
                max-width: 382px;
            }

            p {
                color: #FFF;
                text-align: center;
                leading-trim: both;
                text-edge: cap;
                font-family: 'Roboto';
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                max-width: 382px;

            }
        }
    }
}
</style>