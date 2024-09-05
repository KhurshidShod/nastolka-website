<template lang="">
    <header :class="{'shrink': isShrunk}">
        <div class="container">
            <nav>
                <ul class="menu">
                    <li>Главная</li>
                    <li>FAQ</li>
                    <li>Магазин</li>
                    <li>Контакты</li>
                    <li>
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M1 17C1 13.5636 3.91015 10.7778 7.5 10.7778C11.0899 10.7778 14 13.5636 14 17M11.2143 4.55556C11.2143 6.51924 9.55131 8.11111 7.5 8.11111C5.44866 8.11111 3.78571 6.51924 3.78571 4.55556C3.78571 2.59188 5.44866 1 7.5 1C9.55131 1 11.2143 2.59188 11.2143 4.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Авторизация</li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isShrunk: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            console.log('object')
            this.isShrunk = window.scrollY > 100; // Adjust 100 to the scroll position you want
        },
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
        height: 100px;
        backdrop-filter: blur(10px);

        nav {
            height: 100px !important;
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

        ul.menu {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

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

                @media (max-width: 1100px) {
                    font-size: 18px !important;
                }
            }
        }
    }
}
</style>