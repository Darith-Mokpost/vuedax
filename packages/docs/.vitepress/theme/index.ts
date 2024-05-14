// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import themeVuedax from '../theme-vuedax'
import './style.css'
import Vuedax from '../../../vuedax/src/index'
import colors from '../components/colors/default.vue'
import button from '../components/button/default.vue'

export default {
  extends: DefaultTheme,
  ...DefaultTheme,
  Layout: themeVuedax,
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('colors-default', colors),
    app.component('button-default', button),
    app.use(Vuedax)
    // ...
  }
} satisfies Theme
