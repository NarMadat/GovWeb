<template>
    <div class="px-4 md:px-16 lg:px-40 py-4 mt-10">
        <div>
            <h3 class="text-lg md:text-xl lg:text-2xl">Do you want demo content?</h3>
        </div>

        <div class="mt-6 w-full md:w-40">
            <Alert>Recomended</Alert>
        </div>

        <div class="mt-16 flex flex-col gap-4">
            <AppRadio 
                label="Yes"           
                id="one"
                value="One"
                v-model="picked"
                name="siteType"
            />
            <AppRadio 
                label="No"
                id="two"
                value="Two"
                v-model="picked"
                name="siteType"
            />
        </div>

        <div class="mt-8">
            <Button class="w-full md:w-28 h-10 px-4 py-2 bg-blue-100 border-blue-700 text-sm" @click="router.push('/anim')" variant="secondary">
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
import Alert from '../components/AppAlert.vue'
import AppRadio from '../components/AppRadio.vue'
import Button from '../components/AppButton.vue'
import AppIcon from '../components/AppIcon.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useUserStore } from '../stores/user.js'

const store = useUserStore()
  
const picked = ref('One') 

const router = useRouter()
const route = useRoute()

watch(picked, (newValue) => {
    store.demo = newValue;
});
</script>