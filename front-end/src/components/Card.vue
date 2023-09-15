<script setup>
const props = defineProps({
    custom_class: String,
    back: '',
    forward: ''
})

</script>
<template>
    <div class="row-start-1 row-span-2 flex  animate-fade-in-down">
        <div class="container mx-auto">
            <div class="block rounded-md p-4  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                :class="custom_class">
                <slot></slot>
                <div class="go-to-page">
                    <div v-if="back">
                        <router-link :to="{ name: back }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </router-link>
                    </div>
                    <div v-else-if="forward">
                        <router-link :to="{ name: forward }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                            </svg>
                        </router-link>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>