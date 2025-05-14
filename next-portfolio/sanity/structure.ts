import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .id('home')
                .title('Home')
                .schemaType('homePage')
                .child(
                    S.editor()
                        .id('home')
                        .title('Home')
                        .schemaType('homePage')
                        .documentId('home')
                ),

            S.divider(),

            S.listItem()
                .id('projects')
                .title('Projects')
                .schemaType('project')
                .child(
                    S.documentTypeList('project')
                        .id('projects')
                        .title('Projects')
                        .schemaType('project')
                        .filter('_type == $type')
                        .params({ type: 'project' })
                ),

            S.listItem()
                .id('technologies')
                .title('Technologies')
                .schemaType('technologies')
                .child(
                    S.documentTypeList('technologies')
                        .id('technologies')
                        .title('Technologies')
                        .schemaType('technologies')
                        .filter('_type == $type')
                        .params({ type: 'technologies' })
                ),

            S.listItem()
                .id('experience')
                .title('Experience')
                .schemaType('experience')
                .child(
                    S.documentTypeList('experience')
                        .id('experience')
                        .title('Experience')
                        .schemaType('experience')
                        .filter('_type == $type')
                        .params({ type: 'experience' })
                ),

            S.listItem()
                .id('socials')
                .title('Socials')
                .schemaType('socials')
                .child(
                    S.documentList()
                        .id('socials')
                        .title('Socials')
                        .schemaType('socials')
                        .filter('_type == $type')
                        .params({ type: 'socials' })
                ),
            S.divider(),
        ])

        .showIcons(true);
