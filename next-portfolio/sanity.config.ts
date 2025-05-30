import { defineConfig } from 'sanity';
import { schemaTypes } from './sanity/schemas';
import { structureTool } from 'sanity/structure';
import { structure } from './sanity/structure';

export default defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    title: 'Veni Mitev Dev Portfolio',
    apiVersion: '2023-04-23',
    basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH || '/studio',

    schema: { types: schemaTypes },
    plugins: [structureTool({ structure })],
});
