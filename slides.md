---
# try also 'default' to start simple
theme: penguin
colorSchema: light
themeConfig:
  logoHeader: https://res.cloudinary.com/alvarosaburido/image/upload/v1666359605/as-portfolio/Pixel_Avatar_lhbjva.png
  eventLogo: 'https://www.wearedevelopers.com/logo.png'
  eventUrl: 'https://www.wearedevelopers.com/event/vue-js-day-february-2023'
  twitter: '@alvarosabu'
  twitterUrl: 'https://twitter.com/alvarosabu'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
css: unocss
layout: intro
drawings:
  persist: false
---

# TresJS ▲ ■ ●

## A declarative way of using ThreeJS as Vue components

---
layout: presenter
twitter: '@alvarosabu'
twitterUrl: https://twitter.com/alvarosabu
presenterImage: https://res.cloudinary.com/alvarosaburido/image/upload/v1673193768/the-astronaut-color_el2jle.png
---

# Alvaro Saburido

DevRel Engineer at <a href="https://www.storyblok.com/"><logos-storyblok-icon /> Storyblok</a>

- Barcelona, Spain 🇻🇪 🇪🇸
- I often write at <a href="https://dev.to/alvarosaburido"> dev.to/@alvarosabu</a>
- Creating content on <a href="https://www.youtube.com/channel/AlvaroDevLabs" ><logos-youtube-icon mr-1 />AlvaroDevLabs</a>
- Blog & Portfolio <a href="https://alvarosaburido.dev">alvarosaburido.dev</a>
- Say hi at <a href="https://twitter.com/alvarosabu"><logos-twitter mr-1 />@alvarosabu</a>
- <a href="https://elk.zone/mas.to/@alvarosabu">@alvarosabu@mas.to</a>

---

<iframe width="860" height="450" style="border-radius: 8px; overflow:hidden;" src="https://tresjsportalthreejsjourney-02rc--5173.local-credentialless.webcontainer.io/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <Suspense>
  <TheExperience style="width: 660px; height: auto; aspect-ratio: 16/9; height: auto; margin: 2rem 0; border-radius: 8px; overflow:hidden;"/>
</Suspense> -->

---

# What if I told you...

```vue
<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
import ThePortal from './ThePortal.vue'
import TheFireFlies from './TheFireFlies.vue'
</script>

<template>
  <TresCanvas clear-color="#201919" shadows alpha >
    <OrbitControls />
    <TresPerspectiveCamera :position="[5, 5, 5]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
    <TresScene>
      <TresFog :args="['#201919', 0.1, 75]" />
      <ThePortal />
      <TheFireFlies />
      <TresAmbientLight :position="[10, 10, 10]" :intensity="1.5" color="#00ff00" />
    </TresScene>
  </TresCanvas>
</template>
```



---
layout: two-cols
---

# TresJS

Is a Vue library that allows you to create 3D scenes **declaratively** by using ThreeJS as Vue components.

Tres (Spanish 🇪🇸 word for "three", pronounced `/tres/` ) in reference to the **ThreeJS library**. I'm latin and the french word was already used for another library 🥸.

::right::

<LoveVueThreeJS />

---
layout: text-image
media: /threejs-journey.png

---

# Motivation

ThreeJS is a wonderfull library to create awesome **WebGL 3D websites**. Is also a constantly updated library that makes hard for wrapper mantainers like **TroisJS** to keep up with all the enhancements.

---
layout: text-image
media: https://docs.pmnd.rs/_next/static/media/react-three-fiber.f038c399.jpg

---

# React-three-fiber

React-three-fiber is a **custom React renderer for three.js**. Is made by **pmndrs** and is a very popular library for React developers.

I played with it while doing Bruno's [Simon ThreeJS Journey course](https://threejs-journey.com/) and I really liked the declarative way of creating 3D scenes.

---
layout: two-cols
---

# Vue threejs 

In my search for something similar in the VueJS ecosystem, I found this amazing library called [Lunchbox](https://lunchboxjs.com/) which works with the same concept that R3F, it provides a custom Vue3 Renderer.

The only problem is, mixing different renderers in Vue 3 is something the Vue community is still working on - see here for more information.

Until there is a solution similar to React Reconciliation you will need to create 2 separate Apps which might be not ideal.

::right::

```ts
// Example Vite setup
import { createApp } from 'vue'
import { createApp as createLunchboxApp } from 'lunchboxjs'
import App from './App.vue'
import LunchboxApp from './LunchboxApp.vue'

// html app
const app = createApp(App)
app.mount('#app')

// lunchbox app
const lunchboxApp = createLunchboxApp(LunchboxApp)
// assuming there's an element with ID `lunchbox` in your HTML app
lunchboxApp.mount('#lunchbox')

```

---
layout: text-image
media: /conversation.png
---

# Inspiration

So I was inspired by both libraries to create something that wouldn't require creating a custom renderer.

Intelligent enough to generate Vue components based on the ThreeJS constructors with 0-to-none manteinance using  `three:latest`. 

Special mention to [0xca0a](https://twitter.com/0xca0a) to spark the idea on a conversation we had on Twitter.



That's TresJS.

---
layout: text-image
media: https://media.giphy.com/media/GgcusW5RLS9Nu/giphy.gif
---

# The Challenge


- Up to date with ThreeJS with low maintenance 😃
- No custom renderer 🧐
- Performant even with reactivity ⚡️
- Verbose and easy to use 🤓

---
layout: two-cols
---

# Getting started

```bash
pnpm add @tresjs/core three -D
```

or play with it on [Stackblitz](https://stackblitz.com/edit/tresjs-basic?file=README.md)

::right::

<iframe width="400" height="450" style="border-radius: 8px; overflow:hidden;" src="https://playground.tresjs.org/vue/tres-basic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---


# Plugin


```ts
import Tres from '@tresjs/core'

const app = createApp(App)
app.use(Tres, {
  // options
})
app.mount('#app')

```

---
layout: two-cols
---

# Setting up the Canvas

Before we can create an Scene, we need a DOM element to render it to.

With **TresJS** you only need to add the default component `<TresCanvas />` to the template of your Vue component.

::right::

```html
<template>
  <TresCanvas> 
    // Your scene is going to live here
  </TresCanvas>
</template>
```

<Warning>
It's important that all components related to the scene live between the <b>TresCanvas</b> component. 

</Warning>
---
layout: two-cols
---

# Setting up the Scene

![](/scene-diagram.png)


::right::

Every 3D experience needs at least the following components:

- Objects
- A **Camera** to see the objects
- An **Scene** to put all together
- A **Renderer** to render it to the canvas (DOM)

---
layout: two-cols
---

# Setting up the Scene

So if you were using plain ThreeJS you would need to do something like this:

```ts
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera()

const renderer = new THREE.WebGLRenderer({
  canvas: _canvas,
})

renderer.render(scene, camera)
```
---
layout: two-cols
---

# Da TresJS way 🤓

```html
<template>
  <TresCanvas>
    <TresPerspectiveCamera />
    <TresScene>
      // All your objects live here
    </TresScene>
  </TresCanvas>
</template>
```

::right::

Notice that we added a `<TresPerspectiveCamera />` and a `<TresScene />` component. Thats because they are the bare minimum to create a [`WebGLRenderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)

```ts
const renderer = new THREE.WebGLRenderer({
  canvas: _canvas,
})

renderer.render(scene, camera)
```

---

# Adding an Object

If we where using plain ThreeJS:

```ts
const geometry = new THREE.TorusGeometry(1, 0.5, 16, 32)

const material = 
  new THREE.MeshBasicMaterial({ color: 'orange' })

const donut = new THREE.Mesh(geometry, material)
scene.add(donut)
```

---
layout: two-cols
---

# Adding an Object

With TresJS:

```html
<TresCanvas>
  <TresPerspectiveCamera />
  <TresScene>
    <TresMesh />
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    <TresMesh />
  </TresScene>
</TresCanvas>
```
::right::

<v-click>

![](https://media.giphy.com/media/ck5JRWob7folZ7d97I/giphy.gif)

Say what??? 🤯

</v-click>


---

# From ThreeJS Instances to Components

<div class="grid grid-cols-3 w-full">
  <img src="/three-latest.png"/>
  <img src="/magic.png" v-click />
  <img src="/vue-components.png" v-click />
</div>

--- 
layout: two-cols
---

# Arguments

```html
<TresPerspectiveCamera 
  :args="[45, width/ height, 1, 1000]"
/>
```

::right::

<br />
<br />



<v-click>
```ts
const camera = 
  new PerspectiveCamera(45, width/ height, 1, 1000)

scene.add(camera)
```
</v-click>

---
layout: two-cols
---

# Props

```html
<TresPerspectiveCamera 
  :fov="45"
  :aspect="width/ height"
  :near="1"
  :far="1000"
/>
```

::right::

<br />
<br />



<v-click>
```ts
const camera = 
  new PerspectiveCamera()

camera.fov = 45
camera.aspect = width/ height
camera.near = 1
camera.far = 1000

scene.add(camera)
```
</v-click>

---
layout: two-cols
---

# Slots

```html
<TresMesh />
  <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
  <TresMeshBasicMaterial color="orange" />
<TresMesh />
```

::right::

<br />
<br />


<v-click>
```ts
const geometry = 
  new TorusGeometry(1, 0.5, 16, 32)

const material = 
  new MeshBasicMaterial({ color: 'orange' })

const donut = new Mesh(geometry, material)
// same as donut.geometry = geometry and
// donut.material = material
scene.add(donut)
```

</v-click>

---
layout: two-cols
---

# Challenges

With this theorically you can create any ThreeJS scene with TresJS and

- Keep Up to date with ThreeJS  ☑️ 
- Verbose and easy to use  ☑️

::right::

<iframe width="400" height="250" style="border-radius: 8px; overflow:hidden;" src="https://playground.tresjs.org/vue/tres-donut/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


