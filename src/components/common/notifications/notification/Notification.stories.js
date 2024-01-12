import AppNotification from './Notification.vue'

export default {
  title: 'Notification',
  component: AppNotification,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    duration: {
      control: 'number',
    },
    icon: {
      options: ['info', 'check', 'exclamation'],
      control: 'inline-radio',
    },
    dataE2eName: {
      control: 'text',
    },
    palette: {
      options: ['purple', 'green', 'red'],
      control: 'inline-radio',
    },
  },
  args: {
    title: '',
    description: '',
    duration: 0,
    icon: 'info',
    dataE2eName: 'alert',
    palette: 'purple',
  },
}

const Template = (args) => ({
  components: { AppNotification },
  data: () => ({ args }),
  template: '<AppNotification v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  title: 'Default notification',
}

export const Info = Template.bind({})
Info.args = {
  icon: 'info',
  title: 'Info notification',
}

export const Success = Template.bind({})
Success.args = {
  icon: 'check',
  title: 'Success notification',
  palette: 'green',
}

export const Error = Template.bind({})
Error.args = {
  icon: 'exclamation',
  title: 'Error notification',
  palette: 'red',
}
