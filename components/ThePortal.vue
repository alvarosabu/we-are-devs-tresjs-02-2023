<script setup lang="ts">
import { sRGBEncoding, DoubleSide, MeshBasicMaterial, ShaderMaterial, Color, Mesh } from 'three'
import { useRenderLoop, useTexture } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'

import PortalVertex from '../shaders/portal/vertex.glsl'
import PortalFragment from '../shaders/portal/fragment.glsl'

const experiment = {
  portalColorStart: '#7030eb',
  portalColorEnd: '#ddc0ff',
}

const { scene: portal } = await useGLTF(
  'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/portal/portal.glb',
  {
    draco: true,
  },
)

const bakedTexture = await useTexture([
  'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/portal/baked.jpg',
])

bakedTexture.flipY = false
bakedTexture.encoding = sRGBEncoding

// Baked material
const bakedMaterial = new MeshBasicMaterial({
  map: bakedTexture,
  side: DoubleSide,
})

const portalLightMaterial = new ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColorStart: { value: new Color(experiment.portalColorStart) },
    uColorEnd: { value: new Color(experiment.portalColorEnd) },
  },
  vertexShader: PortalVertex,
  fragmentShader: PortalFragment,
  side: DoubleSide,
})

const portalObj = portal
const bakedMesh = portalObj.children.find(child => child.name === 'baked')
;(bakedMesh as Mesh).material = bakedMaterial
const portalCircle = portalObj.children.find(child => child.name === 'portalCircle')
;(portalCircle as Mesh).material = portalLightMaterial

const { onLoop } = useRenderLoop()

onLoop(({ _delta, elapsed }) => {
  portalLightMaterial.uniforms.uTime.value = elapsed
})
</script>
<template>
  <TresMesh v-bind="portal" />
</template>
