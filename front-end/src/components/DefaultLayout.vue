<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue"
import Header from "./Header.vue"
const showSidebar = ref(false)


</script>


<template>
    <div class="flex relative min-h-screen py-4 px-4">
        <!-- Sidebar -->
        <div class="
        bg-[#f5f5f5]
        text-black-100
        w-64
        rounded-xl
        absolute
        left-0
        md:relative
        md:-translate-x-0
        transform
        -translate-x-full
        transition
        duration-200
        ease-in-out
        " :class="{ 'relative -translate-x-0': showSidebar }">
            <Sidebar />
        </div>
        <!-- /Sidebar -->

        <div class="flex-1">
            <div class="bg-white rounded-xl px-2 py-4 ml-5">
                <button @click="showSidebar = !showSidebar" class="block sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Header/>
            </div>

            <div class="px-2 py-4 ml-5 text-black font-extrabold">
                Content
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>