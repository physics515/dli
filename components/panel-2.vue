<template>
        <div class="flex w-screen 2xl:h-screen items-center justify-center">
                <div class="grid grid-flow-row 2xl:grid-flow-col justify-items-center 2xl:grid-template-cols-40vw-40vw">
                        <div class="flex items-center m-auto h-screen 2xl:h-full">
                                <!-- <img class="mix-blend-multiply m-auto max-h-full" src="../assets/map/map.png"> -->
                                <iframe class="mix-blend-multiply filter grayscale m-auto ratio-1/1 w-screen max-w-full xl:h-full xl:max-w-1200px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.755008117658!2d-80.22689148391737!3d36.14817801182689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853ac49111ad445%3A0xfab32d877a04ab7d!2sDLI%20Services!5e0!3m2!1sen!2sus!4v1624418796440!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="flex items-center m-auto h-screen 2xl:h-full px-8">
                                <div class="m-auto">
                                        <div class="grid grid-cols-2 grid-template-cols-16-auto">
                                                <div class="grid grid-rows-2 mr-12">
                                                        <div class="border-b border-gray-900"></div>
                                                        <div></div>
                                                </div>
                                                <div class="text-3xl font-bold">Contact</div>
                                                <div></div>
                                                <p class="mt-8 max-w-2xl font-Fira-Sans">
                                                        David Icenhour<br>
                                                        david<b>dlis</b>@gmail.com<br>
                                                        336.391.3154<br><br>
                                                        4301 Old Walkertown Road,<br>
                                                        Winston-Salem, NC 27105
                                                </p>
                                        </div>
                                </div>
                        </div>
                        
                </div>
        </div>
</template>

<style>
        @media (min-width: 1280px) {
                .xl\:max-h-1200px {
                        max-height: 1200px;
                }
        }

        .grid-template-rows-16-auto {
                grid-template-columns: 24rem auto;
        }

        .grid-template-cols-40vw-40vw {
                grid-template-columns: 40vw 40vw;
        }

        .max-h-1200px {
                max-height: 1200px;
        }

        .max-w-1200px{
                max-width: 1200px;
        }

        .ratio-1\/1 {
                aspect-ratio: 1 / 1 !important;
        }
</style>