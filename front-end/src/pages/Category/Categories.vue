<script setup>
import { computed, ref } from 'vue';
import store from '../../store';
import Card from '../../components/Card.vue'
import CategoryItem from '../../components/CategoryItem.vue'
const showToolsBox = ref(false)
const permissions = computed(() => store.state.user.permissions)

const categories = computed(() => store.state.categories)

store.dispatch('getCategories')
function deleteCategory(category) {
  alert(category.id)
}
// function updateCategory(category){
//   alert(category)
// }
</script>

<template>
  <div v-if="permissions.includes('category-show')">
    <div
      class="flex absolute z-[-1] left-[80px]  translate-y-[-120px] transform
        transition
        duration-200
        ease-in-out
         container w-[90%] mx-auto bg-block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-4 mb-4"
      :class="{ '!relative translate-y-[full] z-[1] animate-fade-in-down !left-[0px]': showToolsBox }">
      <router-link :to="{ name: 'CreateCategory' }"
        class="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init>
        Create
      </router-link>
      <div class="absolute right-[29px] top-[21px] text-[gray] cursor-pointer" @click="showToolsBox = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>
    </div>
    <button @click="showToolsBox = !showToolsBox"
      class="bg-white rounded-md top-[73px]  z-10 right-[90px] cursor-pointer w-[33px] p-1 absolute">
      <div v-if="!showToolsBox">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 mt-[3px] mb-[-5px]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

    </button>
    <Card class="mb-3" custom_class="bg-[#fff7d8]">
      Categories
    </Card>
    <div v-if="categories.loading" class="flex justify-center">Loading...</div>

    <Card v-else custom_class="bg-white">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" class="px-6 py-4">#</th>
                    <th scope="col" class="px-6 py-4">Title</th>
                    <th scope="col" class="px-6 py-4">Sub Count</th>
                    <th scope="col" class="px-6 py-4">Created At</th>
                    <th scope="col" class="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(category, index) in categories.data" :key="category.id"
                    class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <CategoryItem :category="category" :index="index" @delete="deleteCategory(category)"
                      @update="updateCategory(category)" />

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Card>

  </div>
</template>
