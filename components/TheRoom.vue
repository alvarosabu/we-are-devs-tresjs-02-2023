<script setup lang="ts">
import { Color, sRGBEncoding } from 'three'

import { OrbitControls, GLTFModel } from '@tresjs/cientos'

const bgColor = new Color('#111')
</script>

<template>
  <TresCanvas :clear-color="bgColor" shadows alpha power-preference="high-performance" :output-encoding="sRGBEncoding">
    <OrbitControls />
    <TresPerspectiveCamera :position="5" :fov="45" :near="0.1" :far="1000" />
    <TresScene :fog="bgColor">
      <GLTFModel ref="akuAkuRef" draco path="/level.glb" />
      <TresDirectionalLight ref="lightRef" :position="[0, -1, 0]" :intensity="2" />
      <TresDirectionalLightHelper v-if="false" :args="[lightRef, 5]" />
    </TresScene>
  </TresCanvas>
</template>
