<script setup>
import { ref } from "vue";

const showToolsBox = ref(false)

</script>

<template>
    
    <div
        class="flex absolute z-[-1] left-[80px]  translate-y-[-120px] transform
        transition
        duration-200
        ease-in-out
         container w-[90%] mx-auto bg-block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-4 mb-4"
        :class="{'!relative translate-y-[full] z-[1] animate-fade-in-down !left-[0px]':showToolsBox}"
        >
        <router-link :to="{ name: 'CreateNote' }"
            class="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>
            New Note
        </router-link>
        
    </div>
    <button @click="showToolsBox = !showToolsBox" class="bg-white rounded-md top-[73px]  z-10 right-[90px] cursor-pointer w-[33px] p-1 absolute">
        
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mt-[3px] mb-[-5px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
    <div class="row-start-1 row-span-2 flex  animate-fade-in-down">

        <!-- Grid -->
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-4">
                <!-- Column 1 -->
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/1.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Are you ready?
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            A great adventure is ahead of us! Get ready for a fascinating
                            journey into the world of web design 🚀
                        </p>
                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Count me in!
                        </button>
                    </div>
                </div>
                <!-- Column 1 -->

                <!-- Column 2 -->
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/103.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            UI and UX
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            We will explore the unknown lands of creating great interfaces and
                            designing the perfect user experience
                        </p>
                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Oh, I want it too
                        </button>
                    </div>
                </div>
                <!-- Column 2 -->

                <!-- Column 3 -->
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/56.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Future of web dev
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            You know the saying that the future is today? There is no need to
                            delay, let's start our journey
                        </p>

                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Let's start!
                        </button>
                    </div>
                </div>
                <!-- Column 3 -->
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/56.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Future of web dev
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            You know the saying that the future is today? There is no need to
                            delay, let's start our journey
                        </p>

                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Let's start!
                        </button>
                    </div>
                </div>

                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/56.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Future of web dev
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            You know the saying that the future is today? There is no need to
                            delay, let's start our journey
                        </p>

                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Let's start!
                        </button>
                    </div>
                </div>

                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">
                        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/56.jpg" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Future of web dev
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            You know the saying that the future is today? There is no need to
                            delay, let's start our journey
                        </p>

                        <button type="button"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Let's start!
                        </button>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>