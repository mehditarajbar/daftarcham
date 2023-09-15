<script setup>
import { useRoute, useRouter } from "vue-router";
import store from "../../store/index";
import { computed, ref, watch } from "vue";
import NotAccess from "../../components/NotAccess.vue"
import toast from "../../components/lib/Toast";
import Card from '../../components/Card.vue'
const route = useRoute();
const categoryLoading = computed(() => store.state.category.loading)
const permissions = computed(() => store.state.user.permissions)
let model = ref({
    title: '',
});

watch(
    () => store.state.category.data,
    (newVal, oldVal) => {
        model.value = {
            ...JSON.parse(JSON.stringify(newVal.data))
        }
    }
)

if (route.params.id) {
    store.dispatch('getCategory', route.params.id)
}

function update() {
    store.dispatch('updateCategory', model.value)
        .then((res) => {
            toast(res.message, 'bottom', 'success');
        })
        .catch(error => {
            console.log(error);
            toast(error, 'bottom', 'error');
        })
}
</script>

<template>
    <div v-if="permissions.includes('category-edit')" class="animate-fade-in-down">
        <Card class="mb-3" custom_class="bg-[#fff7d8]" back="Categories">
            Edit Categories
        </Card>
        <div v-if="!model.title" class="flex justify-center">Loading...</div>
        <div v-else class="row-start-1 row-span-2 flex">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-3 md:grid-cols-1">
                    <!-- Column 1 -->
                    <div
                        class="block rounded-md p-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <form @submit.prevent="update">
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
    </div>
    <div v-else>
        <NotAccess />
    </div>
</template>