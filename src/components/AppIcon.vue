<template>
  <i
    class="app-icon select-none"
    :data-icon-name="icon"
    :style="{ fontSize: size }"
  ></i>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  size?: string;
}

defineProps<Props>();
</script>

<style>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-feature-settings: "liga";
  min-width: 1em;
  width: 1em;
  height: 1em;
  letter-spacing: normal;
  line-height: 1;
  text-indent: 0;
  text-align: center;
  vertical-align: middle;
}

.app-icon::before {
  content: attr(data-icon-name);
  display: inline-block;
  font: normal normal normal 1em/1 'Material Symbols Outlined' !important;
  text-rendering: auto;
  text-decoration: inherit;
  -webkit-font-smoothing: antialiased;
}
</style>
