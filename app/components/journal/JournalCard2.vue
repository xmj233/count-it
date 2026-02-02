<script setup lang="ts">
const items = [
  'https://picsum.photos/468/200?random=1',
  'https://picsum.photos/468/300?random=2',
  'https://picsum.photos/468/400?random=3',
  'https://picsum.photos/468/500?random=4',
  'https://picsum.photos/468/600?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <UCarousel orientation="vertical" v-slot="{ item }" loop wheel-gestures :items="items"
    :ui="{ item: 'basis-1/3', container: 'h-full', viewport: 'h-full' }" class="absolute inset-0 w-full">
    <img :src="item" width="468" class="rounded-lg">
  </UCarousel>
</template>
