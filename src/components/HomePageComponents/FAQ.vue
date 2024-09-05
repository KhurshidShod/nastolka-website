<template lang="">
    <section>
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
    }
}
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    background-image: url(/src/assets/images/faq/faqbg.png);
    padding-top: 124px;
    padding-bottom: 170px;

    .faq {
        width: 100%;
        display: flex;
        justify-content: space-between;
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
            flex-shrink: 0;
            max-width: 382px;
            border-radius: 15px;
            background: var(--flags-color);
            box-shadow: inset 0px 0px 31.6px 0px rgba(0, 0, 0, 0.7);
            gap: 20px;
            padding: 1rem;
            h1 {
                color: #FFF;
                text-align: center;
                font-family: "Another Danger";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 4.4px;
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
            }
        }
    }
}
</style>