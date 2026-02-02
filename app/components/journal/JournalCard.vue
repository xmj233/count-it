<script setup lang="ts">
const heights = [320, 480, 640, 800]

function getHeight(index: number) {
  const seed = (index * 11 + 7) % 17
  return heights[seed % heights.length]!
}

const items = Array.from({ length: 20 }).map((_, index) => {
  const height = getHeight(index)

  return {
    id: index,
    title: `Item ${index + 1}`,
    src: `https://picsum.photos/640/${height}?v=${index}`,
    width: 640,
    height
  }
})
</script>

<template>
  <UScrollArea v-slot="{ item, index }" :items="items" orientation="vertical" :virtualize="{
    gap: 16,
    lanes: 3,
    estimateSize: 480
  }" class="absolute inset-0 w-full h-full p-4">
    <img :src="item.src" :alt="item.title" :width="item.width" :height="item.height"
      :loading="index > 8 ? 'lazy' : 'eager'" class="rounded-md size-full object-cover">
  </UScrollArea>
</template>
