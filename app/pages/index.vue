<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const date = shallowRef(new CalendarDate(2022, 2, 3))
</script>

<template>
  <div class="px-4 md:px-10">
    <UCard variant="subtle">
      <template #header>
        <UInputDate v-model="date" />
      </template>

      <div class="flex items-stretch justify-center gap-4 lg:gap-8">
        <div class="hidden lg:flex flex-1 relative overflow-hidden min-w-[250px]">
          <JournalCard class="hidden 2xl:block" />
          <JournalCard2 class="block 2xl:hidden" />
        </div>
        <div class="w-full max-w-[768px] min-w-[320px]">
          <UCard>
            <UEmpty class="h-[500px]" />
          </UCard>
        </div>
      </div>

      <template #footer>
        this is tag
      </template>
    </UCard>
  </div>
</template>
