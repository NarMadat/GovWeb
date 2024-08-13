<template>
  <article
    class="app-alert flex gap-4 items-center p-4 border-l-8"
    :class="[ variant ]"
  >
    <div v-if="icon || image">
      <AppIcon
        v-if="icon"
        :icon="icon"
        size="24px"
      />

      <AppImg
        v-if="image"
        alt=""
        class="h-[13.5px]"
        role="presentation"
        :src="getCmsAsset(image)"
      />
    </div>

    <div class="flex flex-col">
      <div class="text-base font-semibold">
        {{ title }}
      </div>

      <AppWysiwyg
        v-if="description"
        :content="description"
      />

      <slot></slot>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Image } from '~/plugins/01.directus';

export type AppAlertVariants =  'success' | 'info' | 'warning' | 'error' | 'yesem' | 'standard';

export interface AppAlert {
  icon?: string;
  image?: Image;
  title: string;
  description?: string;
  variant?: AppAlertVariants;
}

interface Props extends AppAlert {}

withDefaults(defineProps<Props>(), {
  variant: 'standard'
});
</script>

<style>
.app-alert.success {
  @apply bg-systemMessage-successLight border-systemMessage-success;
}

.app-alert.info {
  @apply bg-systemMessage-infoLight border-systemMessage-info;
}

.app-alert.warning {
  @apply bg-systemMessage-warningLight border-systemMessage-warning;
}

.app-alert.error {
  @apply bg-systemMessage-errorLight border-systemMessage-error;
}

.app-alert.yesem {
  @apply bg-white border-yesem-primary;
}

.app-alert.standard {
  @apply bg-systemMessage-infoLight border-primary;
}
</style>
