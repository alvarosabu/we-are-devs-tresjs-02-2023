<script setup lang="ts">
import { ref } from 'vue'

const iframeRef = ref()
</script>
<template>
  <iframe
    ref="iframeRef"
    :width="$attrs.width | 860"
    :height="$attrs.width | 450"
    style="border-radius: 8px; overflow: hidden"
    :src="$attrs.src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>
