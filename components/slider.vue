<template>
        <swiper class="swiper h-full w-full translate-z0" :options="swiperOption">
                <swiper-slide class="swiper-slide m-auto flex justify-center items-center translate-z0 bg-FFECD6" :key="banner" v-for="banner in banners" v-lazy-container="{ selector: 'img' }">
                        <picture>
                                <source :srcSet="require(`../assets/slides/${banner}?webp`)" type="image/webp" />
                                <img class="m-auto mix-blend-multiply filter will-change-opacity translate-z0" :data-src="require(`../assets/slides/${banner}?png`)" :data-loading="require(`../assets/slides/${banner}?lqip`)" rel="preload" />
                        </picture>
                </swiper-slide>
        </swiper>
</template>

<!-- <swiper-slide class="swiper-slide m-auto flex justify-center items-center" :key="banner" v-for="banner in banners">
        <img class="m-auto" :src="require(`../assets/slides/${banner}`)" />
</swiper-slide> -->

<!-- <img class="m-auto" :data-src="require(`../assets/slides/${banner}`)" :data-loading="require(`../assets/slides/${banner}`)" /> -->

<!-- <div class="swiper-pagination" slot="pagination"></div> -->

<!-- <swiper-slide class="swiper-slide m-auto flex justify-center items-center" :key="banner" v-for="banner in banners" v-lazy-container="{ selector: 'img' }">
        <img class="m-auto" :src="require(`../assets/slides/${banner}`)" />
</swiper-slide> -->

<!-- <swiper-slide class="swiper-slide m-auto flex justify-center items-center" :key="banner" v-for="banner in banners" :auto-update="true" :auto-destroy="true">
        <picture>
                <img class="m-auto" :src="require(`../assets/slides/${banner}?webp`)" />
        </picture>
</swiper-slide> -->

<script>
        import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
        import 'swiper/css/swiper.css'

        export default {
                name: "Slider",

                components: {
                        Swiper,
                        SwiperSlide
                },

                directives: {
                        swiper: directive
                },

                props: {
                        banners: {
                                required: true,
                                type: [],
                        },
                        forceUpdate: {
                                type: Boolean,
                                required: true,
                        }
                },

                mounted() {
                        /* if(this.forceUpdate) {
                                setTimeout(() => {
                                        this.$forceUpdate();
                                }, 2500);
                        } */
                },

                data() {
                        return {
                                swiperOption: {
                                        spaceBetween: 30,
                                        loop: true,
                                        centeredSlides: true,
                                        autoplay: {
                                                delay: 10000,
                                                disableOnInteraction: false
                                        },
                                        pagination: {
                                                el: ".swiper-pagination",
                                                clickable: true
                                        },
                                        navigation: {
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev"
                                        }
                                }
                        };
                },
        };
</script>
<style scoped>
        
        img[lazy='loading'] {
                filter: blur(15px);
        }


        .will-change-opacity {
                will-change: opacity;
                transform: translateZ(0);
                -webkit-mix-blend-mode: multiply;
                -moz-mix-blend-mode: multiply;
                -o-mix-blend-mode: multiply;
                -ms-mix-blend-mode: multiply;
                mix-blend-mode:multiply;
        }
        .translate-z0 {
                transform: translateZ(0);
                will-change: opacity;
        }
        .bg-FFECD6 {
                background-color: #FFECD6;
        }
</style>