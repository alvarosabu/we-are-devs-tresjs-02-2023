<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Warning',
  },
)
</script>
<template>
  <div class="w-full my-4 border-1 border-yellow-500 bg-yellow-100 text-yellow-500 rounded-sm px-2">
    <p class="font-bold"><i class="i-carbon:warning-alt-filled mr-4" />{{ title }}</p>
    <p class="text-sm">
      <slot />
    </p>
  </div>
</template>
