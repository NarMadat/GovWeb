<template>


  <button
    
    ref="buttonElement"
    class="app-button"
    :class="buttonClasses"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Link } from '~/plugins/01.directus';
import AppLink from '../components/AppLink.vue' 
const  buttonElement = ref()

export type AppButtonSizes = 'regular' | 'large';
export type AppButtonVariants = 'primary' | 'secondary' | 'outlined' | 'icon' | 'toTop' | 'yesem' | 'start';

interface Props {
  link?: Link;
  disabled?: boolean;
  variant?: AppButtonVariants;
  size?: AppButtonSizes;
}

interface Emit {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'regular'
});

const emit = defineEmits<Emit>();

const buttonClasses = computed(() => [
  props.disabled ? 'pointer-events-none select-none opacity-30' : 'opacity-100',
  props.variant, props.size
]);



const onClick = () => {
  if (!buttonElement.value) return;

  buttonElement.value.blur();

  emit('click');
}
</script>

<style>
.app-button {
  @apply rounded border-2
    w-full md:w-auto no-underline flex items-center justify-center transition-[background-color,border-color,box-shadow];
}

.app-button.start {
  @apply bg-button-default text-white border-button-stroke
    hover:bg-button-hover
    active:bg-button-active;
}

.app-button.primary {
  @apply bg-primary text-white border-blue-600
    hover:bg-blue-900
    active:bg-blue-1000 active:border-blue-1100;
}

.app-button.secondary {
  @apply bg-blue-200 text-text-800 border-blue-700
    hover:bg-blue-300 hover:border-blue-900
    active:bg-blue-500 active:border-blue-1200 focus:!text-text-800;
}

.app-button.outlined {
  @apply bg-text-100 text-text-800 border-text-400
    hover:bg-text-200 hover:border-text-700
    active:bg-text-300 active:border-text-800;
}

.app-button.icon {
  @apply border-none bg-text-100 text-text-800
    hover:bg-text-200 active:bg-text-300;
}

.app-button.toTop {
  @apply bg-blue-100 text-blue-1200 border-blue-1100
    hover:bg-blue-200
    active:bg-blue-300;
}

.app-button.yesem {
  @apply bg-yesem-primary text-white border-yesem-blue-600
    hover:bg-blue-900
    active:bg-blue-1000 active:border-blue-1100;
}

.app-button.regular {
  @apply text-sm px-3 md:px-4 py-2;
}

.app-button.regular.icon {
  @apply text-sm p-2;
}

.app-button.large {
  @apply text-base font-bold px-3 md:px-4 py-3;
}
</style>
