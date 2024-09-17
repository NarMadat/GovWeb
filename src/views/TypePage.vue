<template>
    <div class="flex flex-col gap-4 w-full px-4 md:px-44 py-4 mt-8">
      <h2 class="text-2xl md:text-3xl">What type of site?</h2>
      
      <h3 class="text-sm md:text-base">Select the required items</h3>
      
      <AppRadio 
        label="Text"           
        id="one"
        value="One"
        v-model="picked"
        name="siteType"
      />
      <AppRadio 
        label="Text"
        id="two"
        value="Two"
        v-model="picked"
        name="siteType"
      />
      <AppRadio 
        label="Text"
        id="three"
        value="Three"
        v-model="picked"
        name="siteType"
      />
      
      <div class="mt-8 md:mt-12">
        <Button class="w-28 h-10 px-4 py-2 bg-blue-100 border-blue-700 text-sm" variant="secondary" @click="router.push('/title')" :disabled="!picked">
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
  import AppRadio from '../components/AppRadio.vue'
  import Button from '../components/AppButton.vue'
  import { useRouter } from 'vue-router'
  import AppIcon from '../components/AppIcon.vue'
  import { ref, watch } from 'vue'
  import { useUserStore } from '../stores/user.js'

  const store = useUserStore();
  
  const picked = ref(null)
  
  const router = useRouter()
  
  watch(picked, (newValue) => {
    store.type = newValue;
  });
</script>