<template>
    <label
      class="app-radio flex items-center cursor-pointer"
      :class="size"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-2">
          <input
            class="shrink-0"
            type="radio"
            id="one"
            value="One"
            v-model="picked"
          />
          <label for="one">Yes</label>
        </div>
        
        <div class="flex flex-row gap-2">
          <input
            class="shrink-0"
            type="radio"
            id="two"
            value="Two"
            v-model="picked"
          />
          <label for="two">No</label>
        </div>
        
    </div>
  
  
  
      <div>
        <slot name="label">
          <div class="flex flex-col gap-1">
            <span class="text-base">
              {{ label }}
            </span>
  
            <span
              v-if="sublabel"
              class="text-base text-text-600"
            >
              {{ sublabel }}
            </span>
          </div>
        </slot>
      </div>
    </label>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const picked = ref('One')
  
  export type AppRadioSizes = 'regular' | 'large';
  
  interface Props {
    modelValue?: any | null;
    value: any;
    name: string;
    label?: string;
    sublabel?: string;
    size?: AppRadioSizes;
  }
  
  interface Emit {
    (e: 'update:modelValue', value: Props['modelValue']): void;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    size: 'regular'
  });
  
  const emit = defineEmits<Emit>();
  
  
  
  
  </script>
  
  <style scoped>
  .app-radio input[type="radio"] {
    @apply grid place-content-center appearance-none bg-white m-0 border-2 border-black rounded-full;
  }
  

  
  .app-radio input[type="radio"]::before {
    @apply content-[''] rounded-full scale-0 transition-transform;
  }
  
  .app-radio input[type="radio"]:checked::before {
    @apply scale-100;
  }
  
  /* Large */
  .app-radio.large {
    @apply gap-4;
  }
  
  .app-radio.large input[type="radio"] {
    @apply w-10 h-10;
  }
  
  .app-radio.large input[type="radio"]::before {
    @apply w-5 h-5 shadow-[inset_0_20px_20px_#000000];
  }
  
  /* Regular */
  .app-radio.regular {
    @apply gap-2;
  }
  
  .app-radio.regular input[type="radio"] {
    @apply w-6 h-6;
  }
  
  .app-radio.regular input[type="radio"]::before {
    @apply w-3 h-3 shadow-[inset_0_12px_12px_#000000];
  }
  </style>