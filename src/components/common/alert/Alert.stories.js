import AppAlert from './Alert.vue'

export default {
  title: 'Alert',
  component: AppAlert,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: {
        type: 'inline-radio',
      },
      options: ['none', 'inline', 'array', 'arraySingleOption'],
      mapping: {
        none: '',
        inline: 'Description as string',
        array: [
          'Array of options - the first item',
          'Array of options - the second item',
          'Array of options - the third item',
        ],
        arraySingleOption: ['Array of options - the only option'],
      },
    },
    variant: {
      options: ['info', 'error'],
      control: 'inline-radio',
    },
  },
  args: {
    title: '',
    description: 'array',
    variant: 'info',
  },
}

const Template = (args) => ({
  components: { AppAlert },
  data: () => ({ args }),
  template: '<AppAlert v-bind="args" />',
})

export const Default = Template.bind({})

export const Array = Template.bind({})
Array.args = {
  description: ['test', 'test1', 'test2'],
}
