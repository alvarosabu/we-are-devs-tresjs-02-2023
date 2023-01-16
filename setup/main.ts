import Tres from '@tresjs/core'
import '../styles/main.css'
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(Tres)
})
