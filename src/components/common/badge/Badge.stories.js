import AppBadge from './Badge.vue'

export default {
  title: 'Badge',
  component: AppBadge,
  argTypes: {
    background: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    size: {
      options: ['base', 'lg', 'xl'],
      control: 'inline-radio',
    },
    palette: {
      options: ['grey', 'blue', 'purple', 'green', 'red', 'secondary'],
      control: 'inline-radio',
    },
    rect: {
      options: [true, false],
      control: 'boolean',
    },
    showDot: {
      options: [true, false],
      control: 'boolean',
    },
    showClose: {
      options: [true, false],
      control: 'boolean',
    },
    nowrap: {
      options: [true, false],
      control: 'boolean',
    },

    default: {
      control: 'text',
    },
  },
  args: {
    background: '',
    text: '',
    size: 'base',
    palette: 'grey',
    rect: false,
    showDot: false,
    showClose: false,
    nowrap: false,

    default: '',
  },
  decorators: [() => ({ template: '<div><story /></div>' })],
}

const Template = (args) => ({
  components: { AppBadge },
  data: () => ({ args }),
  template: '<AppBadge v-bind="args">{{ args.default }}</AppBadge>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Badge',
}
