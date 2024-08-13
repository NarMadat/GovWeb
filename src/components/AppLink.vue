<template>
  <NuxtLink
    ref="linkElement"
    :to="to"
    :target="openNewTab ? '_blank' : '_self'"
    class="group/link inline no-underline"
    @click="removeLinkFocus"
  >  
    <slot>
      <span class="underline group-hover/link:decoration-[3px]">
        {{ text }}
      </span>
    </slot>

    <AppIcon
      v-if="!hideOpenNewTabIcon && openNewTab"
      icon="open_in_new"
      size="16px"
      class="ml-1"
    />
  </NuxtLink>
</template>
  
<script setup lang="ts">  
interface Props {
  to: string;
  openNewTab?: boolean;
  hideOpenNewTabIcon?: boolean;
}

const props = defineProps<Props>();

// const linkElement = ref<ComponentPublicInstance | null>();

const removeLinkFocus = () => {
  if (!linkElement.value) return;

  linkElement.value.$el.blur();
}
</script>