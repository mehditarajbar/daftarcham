<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ref,computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../../store';
import toast from '../../components/lib/Toast';
import Card from '../../components/Card.vue'
const route = useRoute()
const router = useRouter()
const categories = computed(() => store.state.categories)

store.dispatch('getCategories')
let model = ref({
    title: null,
    description: null,
    image: null,
    category_id: null,
    visibility: null,
    continuation_story: null,
    story_type: null,
})

function onImageChose(ev) {
    const file = ev.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
        model.value.image = reader.result
    }
    reader.readAsDataURL(file)
}
function create() {
    if(model.value.category_id!=='3'){
        delete model.value.continuation_story
    }   
    store.dispatch('createNote', model.value)
        .then((res) => {
            toast(res.message, 'bottom', 'success')
            router.push({name:'Notes'})
        })
        .catch(error => {
            console.log(error)
            toast(error, 'bottom', 'error')
        })
}

function updateType(e){
    if(e.target.value==1){
        model.value.story_type=null
        model.value.continuation_story=null
    }
}
</script>

<template>
    <Card class="mb-3" custom_class="bg-[#fff7d8]" back="Notes">
        Create Note
    </Card>
    <div v-if="categories.loading" class="flex justify-center">Loading...</div>
    <div v-else class="row-start-1 row-span-2 flex  animate-fade-in-down">
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
                                    <div class="sm:col-span-3">
                                        <label for="title"
                                            class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                        <div class="mt-2">
                                            <input v-model="model.title" type="text" name="title" id="title"
                                                autocomplete="title"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <!-- /Title -->

                                    <!-- Category -->
                                    <div class="sm:col-span-3">
                                        <label for="category"
                                            class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                        <div class="mt-2">
                                            <select  v-model="model.category_id" @change="updateType" id="categort" name="category"
                                                autocomplete="category"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option v-for="category in categories.data" :key="category.id" :value="category.id">
                                                {{ category.title}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /Category -->
                                    <!-- Story type -->
                                    <div class="sm:col-span-3"
                                    :class="model.category_id==3?'block':'hidden'"
                                    >
                                        <label for="story_type"
                                            class="block text-sm font-medium leading-6 text-gray-900">Story Type</label>
                                        <fieldset>
                                            <div class="mt-6">
                                                <div class="flex items-center gap-x-3">
                                                    <input v-model="model.story_type" value="new" id="new-story"

                                                        name="story-type" type="radio"
                                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                    <label for="new-story"
                                                        class="block text-sm font-medium leading-6 text-gray-900">New</label>
                                                </div>
                                                <div class="flex items-center gap-x-3">
                                                    <input id="continuation-story" v-model="model.story_type"
                                                        value="continuation" name="story-type" type="radio"
                                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                    <label for="continuation_story"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Continuation
                                                        story</label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="sm:col-span-3"
                                    :class="model.story_type=='continuation' && model.category_id=='3'?'block':'hidden'"
                                    >
                                        <label for="continuation-select"
                                            class="block text-sm font-medium leading-6 text-gray-900">Continuation of which
                                            story </label>
                                        <div class="mt-2">
                                            <select v-model="model.continuation_story" id="continuation-story"
                                                name="continuation-story" autocomplete="continuation-story"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                                                <option>Story 1</option>
                                                <option>Story 2</option>
                                                <option>Story 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /Story Type -->


                                    <div class="col-span-full">
                                        <label for="about"
                                            class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                        <div class="mt-2">
                                            <textarea id="about" v-model="model.description" name="about" rows="5"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm font-medium leading-6 text-gray-900">Cover
                                            photo</label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label for="file-upload"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input @change="onImageChose" id="file-upload" name="image"
                                                            type="file" class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">

                                <div class="mt-10 space-y-10">
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">Visibility
                                        </legend>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="visibility-private" v-model="model.visibility" value="private"
                                                    name="visibility" type="radio"
                                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="visibility-private"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Private</label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="visibility-public" v-model="model.visibility" value="public"
                                                    name="visibility" type="radio"
                                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="visibility-public"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Public</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                            <button type="submit"
                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
