<template lang="">
    <section>
        <img class="image" ref="image" src="/src/assets/images/case/image.png" alt="">
        <img class="sculpture" ref="sculpture" src="/src/assets/images/case/sculpture.png" alt="">
        <div class="container">
            <div class="case_cards">
                <div class="cards">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
                <div class="buttons">
                    <button>
                        OZON
                    </button>
                    <button>
                        WILDBERRIES
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
export default {
    mounted() {
        this.animateSculpture()
        this.animateImage()
    },
    methods: {
        animateSculpture() {
            gsap.fromTo(
                this.$refs.sculpture,
                { x: 300 },
                {
                    x: 0,
                    opacity: 1,
                    ease: "power1.out",
                    duration: 5,
                    scrollTrigger: {
                        trigger: this.$refs.sculpture,
                        start: "top 100%",
                        end: "bottom 50%",
                        scrub: 1.1,
                        toggleActions: "play none none reverse"
                    }
                }
            )
        },
        animateImage() {
            gsap.fromTo(
                this.$refs.image,
                { y: 500 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power1.out",
                    duration: 5,
                    scrollTrigger: {
                        trigger: this.$refs.image,
                        start: "top 100%",
                        end: "bottom 50%",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    padding: 150px 50px;
    background: url(/src/assets/images/case/howtoplaybg.png) lightgray 0px -10px / 100.062% 99.695% no-repeat;
    background-color: black;
    background-size: contain 100%;
    background-attachment: local;
    z-index: 2;

    @media (max-width: 850px) {
        padding: 150px 0;
    }

    .image {
        position: absolute;
        left: 0;
        width: 580px;
        top: 8%;
        z-index: -1;

        @media (max-width: 1150px) {
            width: 420px;
        }

        @media (max-width: 950px) {
            width: 300px;
        }

        @media (max-width: 750px) {
            width: 220px;
            top: 25%;
        }
    }

    .sculpture {
        position: absolute;
        width: 430px;
        right: 0;
        top: 40%;
        z-index: -1;

        @media (max-width: 1150px) {
            width: 350px;
        }

        @media (max-width: 950px) {
            width: 250px;
        }

        @media (max-width: 750px) {
            width: 180px;
            top: 50%;
        }
    }

    .case_cards {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 100px;
        z-index: 2;

        .cards {
            width: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 90px;
            padding: 1rem;

            @media (max-width: 850px) {
                padding: 0;
            }

            @media (max-width: 750px) {
                width: 100%;
            }

            .card {
                width: 100%;
                height: 375px;
                border-radius: 55px;
                background: #D9D9D9;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                min-width: 550px;

                @media (max-width: 750px) {
                    width: 85%;
                    height: 250px;
                    min-width: 200px;
                }

            }
        }

        .buttons {
            width: 65%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 750px) {
                width: 100%;
                justify-content: space-evenly;
            }

            button {
                display: inline-flex;
                padding: 20px 44px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                color: #FFF;
                text-align: center;
                font-family: 'Roboto';
                font-size: 42px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;

                @media (max-width: 1100px) {
                    padding: 15px 35px;
                    font-size: 36px;
                }

                @media (max-width: 950px) {
                    padding: 10px 25px;
                    font-size: 28px;
                }

                @media (max-width: 550px) {
                    padding: 12px 25px;
                    font-size: 18px;
                }

                &:first-child {
                    border-radius: 11px;
                    background: #005BFF;
                    box-shadow: 0px 0px 45px 0px #005BFF;
                }

                &:last-child {
                    border-radius: 11px;
                    background: linear-gradient(90deg, #E23AC3 0%, #791BED 100%);
                    box-shadow: 0px 0px 45px 0px #AD20B5;
                }
            }
        }
    }
}
</style>