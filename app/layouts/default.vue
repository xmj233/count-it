<template>
  <div class="grid grid-rows-[auto_1fr] h-screen w-full overflow-hidden">
    <header>
      <LayoutNav />
    </header>
    <div class="overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
