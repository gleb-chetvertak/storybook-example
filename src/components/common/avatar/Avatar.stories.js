import AppAvatar from './Avatar.vue'

export default {
  title: 'Avatar',
  component: AppAvatar,
  argTypes: {
    src: {
      control: 'text',
      description: 'Absolut url to the image',
    },
    size: {
      options: ['sm', 'md', 'base', 'lg', 'xl'],
      control: 'inline-radio',
    },
    rect: {
      options: [true, false],
      control: 'boolean',
      description: "If false, avatar is completely round, if true - it's a rectangle with a bit rounded angles",
    },
  },
  args: {
    src: '',
    size: 'base',
    rect: false,
  },
}

const Template = (args) => ({
  components: { AppAvatar },
  data: () => ({ args }),
  template: '<AppAvatar v-bind="args" />',
})

export const Default = Template.bind({})

export const ForTables = Template.bind({})
ForTables.args = {
  size: 'base',
}

export const LargeRect = Template.bind({})
LargeRect.args = {
  size: 'xl',
  rect: true,
}
