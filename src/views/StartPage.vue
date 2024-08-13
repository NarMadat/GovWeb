<template>
    <div class="w-full px-4 md:px-44 py-4 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center md:max-w-10xl">
            <div class="text-center md:text-left mb-4 md:mb-0">
                <h1 class="text-2xl md:text-4xl">Create a new public website</h1>
                <h3 class="mt-4 md:mt-8 text-lg md:text-2xl">New website in two clicks</h3>
            </div>
            <img src="/Cloud.svg" alt="Cloud" class="w-16 md:w-32 lg:w-48">
        </div>

        <img src="/Polos.svg" alt="Polos" class="mt-8 w-full">

        <div class="mt-12">
            <h2 class="text-xl md:text-2xl font-medium">Before you start:</h2>
            
            <div class="wysiwyg regular mt-4">
                <ul>
                    <li  class="flex items-center">
                        <span class="text-orange-500 mr-2">&#8226;</span>
                        <p dir="ltr" role="presentation">Text</p>
                    </li>
                    <li  class="flex items-center">
                        <span class="text-orange-500 mr-2">&#8226;</span>
                        <p dir="ltr" role="presentation">Text</p>
                    </li>
                    <li  class="flex items-center">
                        <span class="text-orange-500 mr-2">&#8226;</span>
                        <p dir="ltr" role="presentation">Text</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-12 mb-12 flex justify-center md:justify-start"> 
            <Button class="but w-32 h-10 px-4 py-2 text-sm text-white flex items-center justify-center" variant="start" @click="router.push('/email')">
                Սկսել 
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
import Button from '../components/AppButton.vue'
import { useRouter, useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'


const router = useRouter()
const route = useRoute()
</script>

<style scoped>
.but {
    border-color: #0F420F;
    background-color: #167F16;
}

.wysiwyg ul {
        list-style-type: none; 
        padding: 0;
    }

    .wysiwyg li {
        margin-bottom: 8px; 
    }

</style>