export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events--studio-qrb9xdyg',
                  apiId: '13cee8bb-3965-42a8-a137-edb6514b719e'
                },
                {
                  buildHookId: '5cd43759419369b8477b3723',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events--web-dv9sasab',
                  apiId: 'cb8afdbb-bb1c-41ef-bf52-0d0a1e76d15d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nuxt-events-',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events--web-dv9sasab.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
