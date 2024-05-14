// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from './Layout copy.vue'
import './style.css'

export default {
  Layout: DefaultTheme,
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.prototype.$vdTheme = {
      mobileActive: false,
      openCode: false,
      themeDarken: false,
      sidebarCollapseOpen: true
    }
    app.prototype.$codesandbox = {
      url: null
    }
  }
};
