import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    title: 'Veni Mitev Dev Portfolio',
    apiVersion: '2023-04-23',
    basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH || '/studio',

    plugins: [deskTool()],

    schema: { types: schemaTypes },
});
