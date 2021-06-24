<template>
        <swiper class="swiper h-full w-full" :options="swiperOption">
                <swiper-slide class="swiper-slide m-auto flex justify-center items-center" :key="banner" v-for="banner in banners">
                        <img class="m-auto" :src="require(`../assets/slides/${banner}`)" />
                        <<!-- LazyImage :data-src="require(`../assets/slides/${banner}`)" class="aspect-ratio-16/9"  :ignore-img-base-path="false"/> -->
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
</template>

<script>
        import { directive } from "vue-awesome-swiper";
        import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
        import "swiper/css/swiper.css"

        export default {

                name: "Slider",

                directives: {
                        swiper: directive
                },

                components: {
                        Swiper,
                        SwiperSlide
                },

                mounted() {
                        this.importAll(require.context('../assets/slides/', true, /\.png$/));
                },

                methods: {
                        importAll(r) {
                                r.keys().forEach(key => (this.images.push(key.substring(2))));
                        },
                },

                data() {
                        return {
                                images: [],
                                swiperOption: {
                                        spaceBetween: 30,
                                        loop: true,
                                        centeredSlides: true,
                                        autoplay: {
                                                delay: 2500,
                                                disableOnInteraction: false
                                        },
                                        pagination: {
                                                el: '.swiper-pagination',
                                                clickable: true
                                        },
                                        navigation: {
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev'
                                        }
                                }
                        };
                },

                computed: {
                        banners() { return this.$_.shuffle(this.images) },
                }
        };
</script>