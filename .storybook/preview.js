import { app } from "@storybook/vue3"

import mitt from 'mitt'
import Maska from 'maska'

import '../src/assets/base.css'

const emitter = mitt()
app.config.globalProperties.emitter = emitter

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  backgrounds: {
    values: [
      { name: 'white', value: '#FFFFFF' },
      { name: 'grey', value: '#F3F4F6' },
      { name: 'purple', value: '#2E0359' },
    ],
  },
}

app.use(Maska)

app.directive('maska', Maska.maska)