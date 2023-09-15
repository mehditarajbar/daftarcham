<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../../store';
import toast from '../../components/lib/Toast';
import Card from '../../components/Card.vue'
const route = useRoute();
const router = useRouter();

let model = ref({
    title: '',

})

function create() {
    store.dispatch('createCategory', model.value)
        .then((res) => {
            toast(res.message, 'bottom', 'success')
            router.push({
                'name': 'Categories'
            })
        })
        .catch(error => {
            console.log('sss')
            toast(error, 'bottom', 'error')
        })
}

</script>

<template>
    <Card class="mb-3" custom_class="bg-[#fff7d8]" back="Categories">
        Create Categories
    </Card>
    <div class="row-start-1 row-span-2 flex  animate-fade-in-down">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-1">
                <!-- Column 1 -->
                <div
                    class="block rounded-md p-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <form @submit.prevent="create">
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <!-- Tite -->
                                    <div class="sm:col-span-12">
                                        <label for="title"
                                            class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                        <div class="mt-2">
                                            <input v-model="model.title" type="text" name="title" id="title"
                                                autocomplete="title"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <!-- /Title -->
                                </div>
                                <div class="mt-6 flex items-center justify-end gap-x-6">

                                    <button type="submit"
                                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>