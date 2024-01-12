import AppButton from './Button.vue'
import { XIcon, ArrowSmRightIcon } from '@heroicons/vue/outline'

export default {
  title: 'Button',
  component: AppButton,
  subcomponents: { XIcon, ArrowSmRightIcon },
  argTypes: {
    classes: {
      control: 'text',
    },
    size: {
      options: ['none', 'xs', 'sm', 'md', 'base', 'lg'],
      control: 'inline-radio',
    },
    form: {
      options: ['rect', 'oval', 'circle'],
      control: 'inline-radio',
    },
    filling: {
      options: ['filled', 'outlined'],
      control: 'inline-radio',
    },
    palette: {
      options: ['primary', 'secondary', 'red', 'gray'],
      control: 'inline-radio',
    },
    variant: {
      options: ['config', 'gradient', 'unstyled', 'icon'],
      control: 'inline-radio',
    },
    type: {
      options: ['button', 'submit'],
      control: 'inline-radio',
    },
    disabled: {
      options: [true, false],
      control: 'boolean',
    },

    default: {
      control: 'text',
    },

    slotDefaultTemplate: {
      options: ['text', 'text-icon', 'icon-text', 'icon'],
      control: 'inline-radio',
    },
    slotDefaultIcon: {
      control: {
        type: 'inline-radio',
      },
      options: ['none', 'XIcon', 'ArrowSmRightIcon'],
      mapping: {
        none: null,
        XIcon,
        ArrowSmRightIcon,
      },
    },
  },
  args: {
    classes: '',
    size: 'base',
    form: 'rect',
    filling: 'filled',
    palette: 'primary',
    variant: 'config',
    type: 'button',
    disabled: false,

    default: '',

    slotDefaultTemplate: 'text',
    slotDefaultIcon: 'none',
  },
}

const Template = (args) => ({
  components: { AppButton, XIcon, ArrowSmRightIcon },
  data: () => ({ args }),
  template: `
    <AppButton v-bind="args">
      <component
        v-if="args.slotDefaultTemplate === 'icon-text' && args.slotDefaultIcon"
        :is="args.slotDefaultIcon"
        class="w-5 h-5"
        aria-hidden="true"
      />

      <template v-if="args.slotDefaultTemplate === 'icon'">
        <component v-if="args.slotDefaultIcon" :is="args.slotDefaultIcon" class="w-5 h-5" aria-hidden="true" />
      </template>

      <template v-else>{{ args.default }}</template>

      <component
        v-if="args.slotDefaultTemplate === 'text-icon' && args.slotDefaultIcon"
        :is="args.slotDefaultIcon"
        class="w-5 h-5"
        aria-hidden="true"
      />
    </AppButton>
  `,
})

export const Default = Template.bind({})
Default.args = {
  default: 'Button',
}

export const ModalConfirm = Template.bind({})
ModalConfirm.args = {
  size: 'md',

  default: 'Confirm',
}

export const ModalCancel = Template.bind({})
ModalCancel.args = {
  size: 'md',
  filling: 'outlined',

  default: 'Cancel',
}

export const CustomButton = Template.bind({})
CustomButton.args = {
  classes:
    'border-gray-600 bg-transparent text-gray-600 transition-colors duration-300 active:border-gray-400 active:text-gray-400',
  variant: 'unstyled',

  default: 'Custom Button',
}

export const GradientArrow = Template.bind({})
GradientArrow.args = {
  size: 'lg',
  variant: 'gradient',
  type: 'submit',
  classes: 'w-72',

  default: 'Next',

  slotDefaultTemplate: 'text-icon',
  slotDefaultIcon: 'ArrowSmRightIcon',
}

export const CircleIcon = Template.bind({})
CircleIcon.args = {
  size: 'none',
  form: 'circle',
  palette: 'red',

  slotDefaultTemplate: 'icon',
  slotDefaultIcon: 'XIcon',
}
