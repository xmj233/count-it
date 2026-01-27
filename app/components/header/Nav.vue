<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Where It Went',
    icon: 'i-lucide-book-open',
    to: '',
    children: [
      {
        label: 'Now',
        description: 'What’s happening lately.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Then',
        description: 'What happened before.',
        icon: 'i-lucide-cloud-download'
      },
    ]
  },
  {
    label: 'Inside',
    icon: 'i-lucide-book-open',
    to: '',
    children: [
      {
        label: 'Labels',
        description: 'How you name what matters.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Mood',
        description: 'Patterns of how you feel.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Wishes',
        description: 'What you’re quietly hoping for.',
        icon: 'i-lucide-cloud-download'
      },
    ]
  },
  {
    label: 'Settings',
    icon: 'i-lucide-book-open',
    to: '',
  }
])
</script>

<template>
  <UNavigationMenu arrow content-orientation="vertical" :items="items" class="w-full justify-center" />
</template>
