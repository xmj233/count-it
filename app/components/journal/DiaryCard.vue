<script setup lang="ts">
import { Time } from '@internationalized/date'
const time = shallowRef(new Time(12, 30, 0))
</script>

<template>
  <UCard class="border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
    <template #header>
      <div class="p-4 pb-3">
        <UInputTime v-model="time" />
      </div>
    </template>
    <div class="px-4 pb-4">
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
        this is diary.
      </p>
    </div>
    <template #footer>
      <div class="p-4 pt-3 text-sm text-gray-600 dark:text-gray-400">
        this is tag
      </div>
    </template>
  </UCard>
</template>