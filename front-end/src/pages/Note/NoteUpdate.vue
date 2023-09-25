<script setup>
import store from "../../store/index";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import toast from "../../components/lib/Toast";
import Card from '../../components/Card.vue'
const route = useRoute();
const noteLoading = computed(() => store.state.note.loading)
const permissions = computed(() => store.state.user.permissions)
const {note}=defineProps({
    note:Object
})

let model = ref({
    title: '',
    image:''

});

watch(
    () => store.state.note.data,
    (newVal, oldVal) => {
        model.value = {
            ...JSON.parse(JSON.stringify(newVal))
        }
    }
)

if (route.params.id) {
    store.dispatch('getNote', route.params.id)
}

</script>

<template>
    <Card class="mb-3" custom_class="bg-[#fff7d8]" back="Notes">
      Update Note
    </Card>
    {{ model.title }}
</template>