<template>
  <div class="app-input-field">
    <label class="flex flex-col gap-1">
      <div v-if="label" class="font-semibold">
        {{ label }}
      </div>
      <div :class="['app-input-field-content relative', { 'border-red-500': showError }]">
        <div v-if="prefix" class="px-3 py-2 border-r border-black bg-text-200 rounded-s-[3px]">
          <div>{{ prefix }}</div>
        </div>
        <input
          v-model="input"
          ref="inputFieldElement"
          :type="type"
          @input="onInput"
          :placeholder="placeholder"
          :class="{'border-red-500': showError}"
        />
        
      </div>
    </label>
    <div v-if="showError" class="absolute w-1 h-[72px] left-[195px] top-[249px]  bg-[#CC0000]"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits, computed } from 'vue';

const props = withDefaults(defineProps<{
  placeholder?: string;
  type?: string;
  modelValue: string;
  label?: string;
  prefix?: string;
  showError?: boolean;
}>(), {
  type: 'text'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const inputFieldElement = ref<HTMLInputElement | null>(null);
const input = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  input.value = newValue;
});

const onInput = () => {
  if (inputFieldElement.value) {
    emit('update:modelValue', inputFieldElement.value.value);
  }
};
</script>

<style>
.app-input-field-content {
  display: flex;
  border: 1px solid black;
  border-radius: 0.375rem; /* rounded */
}

.app-input-field-content.border-red-500 {
  border-color: #CC0000;
}

.app-input-field-content input {
  padding: 0.5rem; /* p-2 */
  width: 100%; /* w-full */
  border-radius: 0.375rem; /* rounded */
}

/* Chrome, Safari, Edge, Opera */
.app-input-field-content input::-webkit-outer-spin-button,
.app-input-field-content input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

/* Firefox */
.app-input-field-content input[type=number] {
  appearance: textfield;
}

.app-input-field-content .bg-red-500 {
  background-color: #CC0000;
}
</style>
