<template>
        <swiper
                class="swiper h-full w-full translate-z0"
                :modules="modules"
                :space-between="30"
                :loop="true"
                :centered-slides="true"
                :autoplay="{
                        delay: 10000,
                        disableOnInteraction: false
                }"
        >
                <swiper-slide 
                        v-for="banner in banners" 
                        :key="banner" 
                        class="swiper-slide m-auto flex justify-center items-center translate-z0 bg-FFECD6"
                >
                        <NuxtImg
                                :src="`/slides/${banner}`"
                                class="m-auto mix-blend-multiply filter will-change-opacity translate-z0"
                                loading="lazy"
                                format="webp"
                        />
                </swiper-slide>
        </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

defineProps({
        banners: {
                required: true,
                type: Array
        },
        forceUpdate: {
                type: Boolean,
                required: true
        }
})

const modules = [Autoplay, Pagination, Navigation]
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