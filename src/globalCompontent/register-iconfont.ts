import type { App } from 'vue'

import { createFromIconfontCN } from '@ant-design/icons-vue'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3845314_mdds9fxttfn.js'
})

export default function (app: App) {
  app.component('IconFont', IconFont)
}
