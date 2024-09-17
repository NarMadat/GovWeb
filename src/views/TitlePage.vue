<template>
    <div class="px-4 md:px-8 lg:ml-40 py-4 mt-10">
        <div class="w-full">
            <h3 class="text-center md:text-left">Give your site title</h3>
        </div>

        <div class="w-full md:w-72 mt-6 md:mt-12">
            <Input placeholder="Enter a title" v-model="title"/>
        </div>

        <div class="mt-6 md:mt-12 w-full md:w-64">
            <Alert>
                <div class="flex flex-col">
                    <b class="text-sm md:text-base">This will appear on header</b>
                    <span class="text-xs md:text-sm">You always can change it.</span>
                </div>
            </Alert>
        </div>

        <div class="mt-6 md:mt-12">
            <Button 
                class="w-full md:w-28 h-10 px-4 py-2 bg-blue-100 border-blue-700 text-sm" 
                variant="secondary"
                :disabled="!title"
                @click="router.push('/section')"
            >
                Հաջորդ
                <AppIcon
                    icon="chevron_right"
                    size="24px"
                    class="ml-2"
                /> 
            </Button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Input from '../components/AppInputField.vue'
import Button from '../components/AppButton.vue'
import Alert from '../components/AppAlert.vue'
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()
const router = useRouter()
const title = ref('')

watch(title, (newValue) => {
    store.title = newValue;
});
</script>