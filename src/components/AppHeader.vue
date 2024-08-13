<template>
  <AppViewport
    parentElement="header"
    class="py-4 bg-primary border-b border-text-400"
    :innerClass="[ 'justify-center xl:justify-start items-center' ]"
  >
    <button
      ref="headerButtonElement"
      class="flex items-center text-left bg-transparent"
      @click="router.push('/')"
    >
    
      <img
        class="max-w-24 h-14"
        src="/isaa_logo.svg"
        alt="Coat of arms"
      />

      <div class="w-px h-10 md:h-14 bg-white mx-2 md:mx-4"></div>

      <div class="text-white text-sm md:text-base font-bold leading-normal py-1 max-w-xs md:max-w-sm">
        <span class="hidden md:flex">
          Հայաստանի տեղեկատվական<br>համակարգերի գործակալություն
        </span>
        <span class="md:hidden">
          Հայաստանի տեղեկատվական<br>համակարգերի գործակալություն        
        </span>
      </div>
    </button>

    <div class="flex-grow"></div>
  </AppViewport>
</template>

<script setup lang="ts">
import AppViewport from '../components/AppViewport.vue' 

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>


  