<template>
    <component
      :is="props.parentElement"
      class="w-full"
      :class="[ variant === 'full_screen' ? '' : 'flex justify-center px-4 md:px-8' ]"
      :style="{ backgroundColor }"
      v-bind="props.parentAttrs"
    >
      <section class="flex flex-col w-viewport-mobile md:w-viewport-standard">
        <div class="w-full h-0">
          <slot name="cmsControls"></slot>
        </div>

        <section
          class="flex gap-8 h-full"
        >
          <component
            :is="props.innerElement"
            class="flex basis-full"
            :class="[
              {
                'flex-col': props.col,
                'xl:basis-viewport-narrow': variant === 'narrow',
                'xl:basis-viewport-standard': variant === 'standard'
              },
              ...props.innerClass,
            ]"
            v-bind="props.innerAttrs"
          >
            <slot></slot>
          </component>

          <div
            v-if="variant === 'narrow'"
            class="flex-1 items-start relative hidden xl:flex"
          >
            <slot name="asideArea"></slot>
          </div>
        </section>
      </section>
    </component>
  </template>

  <script setup lang="ts">
  import type { DefineComponent } from 'vue';

  export type AppViewportVariants = 'full_screen' | 'standard' | 'narrow';

  type Props = {
    variant?: AppViewportVariants;
    backgroundColor?: string;
    col?: boolean;
    parentElement?: string | DefineComponent;
    parentAttrs?: Record<string, unknown>;
    innerElement?: string | DefineComponent;
    innerAttrs?: Record<string, unknown>;
    innerClass?: string | string[];
  }

  const props = withDefaults(defineProps<Props>(), {
    parentElement: 'div',
    innerElement: 'div',
    innerClass: '',
    parentAttrs: () => ({}),
    innerAttrs: () => ({}),
    variant: 'standard'
  });
  </script>
  