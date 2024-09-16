<template lang="">
    <header :class="{'shrink': isShrunk}">
        <div class="container">
            <nav :class="{'toggled': isToggled}">
                <div class="authorization" :class="{'visible-shrunk': isAuthOpen && isShrunk, 'visible-nonshrunk': isAuthOpen && !isShrunk}">
                    <span @click.prevent="isAuthOpen = false"><img src="/src/assets/icons/nav-close.svg" alt=""></span>
                    <p>Войти</p>
                    <a href="https://t.me/rouqot" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path d="M38.2767 8.60372C38.5439 6.86874 36.9019 5.49931 35.3663 6.17662L4.7822 19.6665C3.68102 20.1523 3.76157 21.8281 4.90366 22.1934L11.2108 24.2112C12.4147 24.5964 13.7181 24.3971 14.7693 23.6676L28.9894 13.798C29.4182 13.5004 29.8856 14.113 29.5192 14.4923L19.2833 25.0941C18.2904 26.1227 18.4874 27.8654 19.6819 28.6178L31.142 35.8375C32.4274 36.6472 34.0809 35.8339 34.3213 34.2733L38.2767 8.60372Z" fill="white"/>
                    </svg>
                    Log in with Telegram</a>
                </div>
                <ul class="menu">
                    <li><a href="#main" @click.prevent="scrollTo('main')">Главная</a></li>
                    <li><a href="#faq" @click.prevent="scrollTo('faq')">FAQ</a></li>
                    <li><a href="#magasine" @click.prevent="scrollTo('magasine')">Магазин</a></li>
                    <li><a href="#footer" @click.prevent="scrollTo('footer')">Контакты</a></li>
                    <li @click.prevent="openLoginModal()">
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M1 17C1 13.5636 3.91015 10.7778 7.5 10.7778C11.0899 10.7778 14 13.5636 14 17M11.2143 4.55556C11.2143 6.51924 9.55131 8.11111 7.5 8.11111C5.44866 8.11111 3.78571 6.51924 3.78571 4.55556C3.78571 2.59188 5.44866 1 7.5 1C9.55131 1 11.2143 2.59188 11.2143 4.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{isUserLoggedIn ? isUserLoggedIn : "Авторизация"}}</li>
                <img @click="() => {
                    handleToggle('open')
                    this.isAuthOpen = false
                    }" class="toggler" src="/src/assets/icons/nav-close.svg" alt="">
                </ul>
                <img @click="() => handleToggle('close')" class="toggler" src="/src/assets/icons/nav-toggle.svg" alt="">
            </nav>
        </div>
    </header>
</template>
<script>
import { nextTick } from 'vue';
export default {
    data() {
        return {
            isShrunk: false,
            isToggled: false,
            isAuthOpen: false,
            isUserLoggedIn: localStorage.getItem("username")
        }
    },
    methods: {
        handleScroll() {
            this.isShrunk = window.scrollY > 100;
        },
        handleToggle(action) {
            this.isToggled = action === 'close' ? true : false;
        },
        scrollTo(sectionId) {
            if (this.$route.name !== "Home") {
                this.$router.push('/').then(() => {
                    nextTick(() => {
                        const element = document.getElementById(sectionId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                });
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        },
        openLoginModal() {
            if (this.isUserLoggedIn) {
                this.$router.push("/profile")
            } else {
                this.isAuthOpen = true
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 0;
    height: 180px;
    transition: .1s linear;
    z-index: 99999;

    &.shrink {
        width: 100%;
        height: 80px;
        backdrop-filter: blur(10px);

        nav {
            height: 80px !important;
        }
    }

    nav {
        width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .1s linear;
        height: 180px;
        position: relative;

        @media (max-width: 750px) {
            justify-content: end;
        }

        .authorization {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1.5rem;
            width: 250px;
            height: 150px;
            position: absolute;
            top: 0px;
            right: 0%;
            flex-shrink: 0;
            border-radius: 30px;
            background: rgba(30, 30, 30, 0.92);
            backdrop-filter: blur(5.0071940422058105px);
            transition: all .3s linear;
            opacity: 0;
            visibility: hidden;

            @media (max-width: 750px) {
                top: 50%;
                left: 50%;
                transform: translate(-50%, 50%);
            }

            &.visible-shrunk {
                top: 85px;
                opacity: 1;
                z-index: 9;
                visibility: visible;
            }

            &.visible-nonshrunk {
                top: 185px;
                opacity: 1;
                z-index: 9;
                visibility: visible;
            }

            p {
                color: #FFF;
                font-family: 'Roboto';
                font-size: 26px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            span {
                position: absolute;
                right: 15px;
                top: 15px;
                cursor: pointer;

                img {
                    width: 15px;
                    height: 15px;
                }
            }

            a {
                cursor: pointer;
                text-decoration: none;
                svg {
                    width: 25px;
                    height: 25px;
                }

                display: inline-flex;
                padding: 10px 18px;
                align-items: center;
                gap: 26px;
                border-radius: 15px;
                background: #54A9EB;
                color: #FFF;
                font-family: 'Roboto';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
            }
        }

        .toggler {
            width: 35px;
            height: 35px;
            float: right;
            cursor: pointer;
            display: none;

            @media (max-width: 750px) {
                display: block;
            }
        }

        &.toggled {
            ul.menu {
                @media (max-width: 750px) {
                    right: 0;
                }
            }
        }

        ul.menu {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .toggler {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            @media (max-width: 750px) {
                flex-direction: column;
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100vh;
                background-color: var(--bg-color);
                justify-content: center;
                gap: 3rem;
                transition: .3s linear;
            }

            li {
                color: #FFF;
                text-align: center;
                font-family: 'Another Danger';
                letter-spacing: 5px;
                font-size: 24px;
                font-style: normal;
                font-weight: 100;
                line-height: normal;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .5rem;
                cursor: pointer;

                a {
                    text-decoration: none;
                    color: #FFF;
                }

                @media (max-width: 1100px) {
                    font-size: 18px !important;
                }
            }
        }
    }
}
</style>