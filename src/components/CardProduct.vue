<template>
  <div
    class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border"
  >
    <img :src="props.item.image" class="w-8rem h-8rem flex-shrink-0" :alt="props.item.title" />
    <div class="flex-auto mt-1 md:ml-3 lg:w-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <span class="text-900 font-medium">{{ props.item.title }}</span>
        <Badge
          v-if="props.item.quantity > 1"
          :value="props.item.quantity"
          severity="success"
          size="small"
        />
      </div>
      <div class="text-600 text-sm mb-3">{{ props.item.category }}</div>
      <div class="flex flex-auto justify-content-between align-items-center">
        <span class="text-900 font-bold">$ {{ props.item.price }}</span>
        <Button
          icon="pi pi-times"
          severity="danger"
          text
          raised
          rounded
          aria-label="Cancel"
          @click="emit('remove', item)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from 'primevue/button';
import Badge from 'primevue/badge';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['remove']);
</script>
