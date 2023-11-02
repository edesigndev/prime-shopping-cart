<template>
  <div class="px-5 py-5 md:px-2 lg:px-5 surface-50">
    <div class="border-bottom-1 pb-3 surface-border">
      <span class="text-900 font-medium text-xl">Categories</span>
    </div>
    <Listbox v-model="selected" :options="props.options" class="w-full mt-2" />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import Listbox from 'primevue/listbox';

const selected = ref(null);

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['selected']);

watch(
  () => selected.value,
  (value) => {
    selected.value = value;
    emit('selected', value);
  }
);
</script>
