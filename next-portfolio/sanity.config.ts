import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
    projectId: 'y1q7yws8',
    dataset: 'production',
    title: 'Veni Mitev Dev Portfolio',
    apiVersion: '2023-04-23',
    basePath: '/studio',
    plugins: [deskTool()],
})
