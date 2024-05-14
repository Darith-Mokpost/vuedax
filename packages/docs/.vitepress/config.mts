import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuedax",
  description: "Vuedax Framework Components For Vuejs",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", media: '(prefers-color-scheme:dark)', href: "/assets/favicon/logo_white.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", media: '(prefers-color-scheme:light)', href: "/assets/favicon/logo.png" }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
    ['meta', { name: 'author', content: 'Digitals X' }],
    ['meta', { hid: 'description', name: 'description', content: 'Vuedax Framework Components for Vuejs' }],
    ['meta', { property: 'og:description', content: 'Vuedax Framework Components for Vuejs' }],
    ['meta', { property: 'og:title', content: 'Vuedax - Framework for Vuejs' }],
    ['meta', { property: 'og:url', content: 'https://vuedax.com/' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        ...getNav()
      }
    },
    km: {
      label: 'Khmer',
      lang: 'km',
      themeConfig: {
        ...getNav('/km/')
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Digitals-X/vuedax' }
    ]
  }
})

function getNav(lang = '/') {
  return {
    nav: [
      { text: lang !== '/' ? `ទំព័រដើម` : 'Home', link: lang },
      {
        text: lang !== '/' ? `ណែនាំ` : `Guide`,
        items: [
          { text: lang !== '/' ? `ការណែនាំ` : `Introduction`, link: `${lang}docs/guide/introduction` },
          { text: lang !== '/' ? `ការចាប់ផ្តើម` : `Getting Started`, link: `${lang}docs/guide/gettingStarted` }
        ]
      },
      {
        text: lang !== '/' ? `ឯកសារ` : `Documentation`,
        items: [
          {
            text: lang !== '/' ? `ស្បែក` : `Theme`, items: [
              { text: `Color`, link: `${lang}docs/theme/colors` },
            ]
          },
          {
            text: lang !== '/' ? `Components` : `Components`, items: [
              { text: `Button`, link: `${lang}docs/components/Button` },
              { text: `Alert`, link: `${lang}docs/components/Alert` },
              { text: `Loading`, link: `${lang}docs/components/Loading` },
              { text: `Input`, link: `${lang}docs/components/Input` },
              { text: 'Checkbox', link: `${lang}docs/components/Checkbox` },
              { text: 'Switch', link: `${lang}docs/components/Switch` },
              { text: 'Select', link: `${lang}docs/components/Select` },
              { text: 'Avatar', link: `${lang}docs/components/Avatar` },
              { text: 'Notification', link: `${lang}docs/components/Notification` },
              { text: 'Radio', link: `${lang}docs/components/Radio` },
              { text: 'Tooltip', link: `${lang}docs/components/Tooltip` },
              { text: 'Dialog', link: `${lang}docs/components/Dialog` },
              { text: 'Pagination', link: `${lang}docs/components/Pagination` },
              { text: 'Table', link: `${lang}docs/components/Table` },
              { text: 'Navbar', link: `${lang}docs/components/Navbar` },
              { text: 'Sidebar', link: `${lang}docs/components/Sidebar` },
              { text: 'Card', link: `${lang}docs/components/Card` }
            ]
          }
        ]
      },
      { text: lang !== '/' ? `ឧទាហរណ៍` : 'Examples', link: `${lang}/markdown-examples` }
    ]
  }
}
