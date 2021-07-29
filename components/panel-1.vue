<template>
        <div class="flex w-screen 2xl:h-screen items-center justify-center">
                <div class="grid grid-flow-row 2xl:grid-flow-col justify-items-center 2xl:grid-template-cols-40vw-40vw">
                        <div class="flex items-center m-auto h-screen 2xl:h-full px-8">
                                <div class="m-auto" v-lazy-container="{ selector: 'img' }">
                                        <Logo width="600px" />
                                        <div class="2xl:grid 2xl:grid-cols-2 2xl:grid-template-cols-16-auto">
                                                <div></div>
                                                <p class="mt-8 max-w-2xl">
                                                        Since 1998, DLI Services has been a local leader in the metal
                                                        fabrication industry, focused on the most challenging custom &
                                                        bespoke metalworks. Our community has entrusted us with repairing
                                                        and maintaining some of its most valued cultural landmarks and
                                                        artifacts. For twenty-three years local business and industry 
                                                        come to us when quality, safety, and reliability matter.
                                                </p>
                                                <div></div>
                                                <div class="h-12"></div>
                                                <div></div>
                                                <div class="border-l h-24 border-gray-900"></div>
                                        </div>
                                </div>
                        </div>
                        <div class="flex items-center m-auto order-first 2xl:order-last h-screen 2xl:h-full">
                                <slider v-if="loadedImages" :forceUpdate="swipeForceUpdate" :banners="banners" class="grayscale w-screen max-h-600px max-w-600px" />
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                mounted() {
                        this.importAll(require.context("../assets/slides/", true, /\.png$/));

                        setTimeout(() => {
                                this.swipeForceUpdate = false;
                        }, 2000);
                },

                methods: {
                        importAll(r) {
                                r.keys().forEach(key => this.images.push(key.substring(2)));
                        }
                },

                data() {
                        return {
                                images: [],
                                swipeForceUpdate: true,
                        }
                },

                computed: {
                        banners() {
                                return this.$_.shuffle(this.images);
                        },
                        loadedImages() {
                                if(this.banners.length > 0) return true; else return false;
                        },
                },

                computed: {
                        banners() {
                                return this.$_.shuffle(this.images);
                        },
                        loadedImages() {
                                if(this.banners.length > 0) return true; else return false;
                        }
                }
        };
</script>



<style>
        @media (min-width: 1536px) {

                .\32 xl\:grid-template-cols-40vw-40vw {
                        grid-template-columns: 40vw 40vw;
                }

                .\32 xl\:grid-template-cols-16-auto {
                        grid-template-columns: 8rem auto;
                }
        }

        .grid-template-cols-16-auto {
                grid-template-columns: 8rem auto;
        }

        .grid-template-cols-40vw-40vw {
                grid-template-columns: 40vw 40vw;
        }

        .max-h-600px {
                max-height: 600px;
        }

        .max-w-600px {
                max-width: 600px;
        }
</style>
