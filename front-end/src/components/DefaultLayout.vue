<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue"
import Header from "./Header.vue"

const showSidebar = ref(false)

</script>


<template>
    <div class="flex relative  py-4 px-4">
        <!-- Sidebar -->
        <div class="
        bg-[#f5f5f5]
        text-black-100
        w-64
        rounded-xl
        absolute
        left-0
        absolute
        sm:relative
        -translate-x-full
        transform
        transition
        duration-200
        ease-in-out
        translate-x-0
        min-h-screen
        
        " :class="{ '-translate-x-full left-2 z-10': showSidebar }">
            <button @click="showSidebar = !showSidebar" class="block sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
            <Sidebar />
        </div>
        <!-- /Sidebar -->

        <div class="flex-1 relative">
            <div class="bg-white rounded-xl px-2 py-4 ml-5">
                <button @click="showSidebar = !showSidebar" class="block sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Header />
            </div>

            <div class="px-2 py-4 ml-5 text-black font-extrabold mt-6">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>