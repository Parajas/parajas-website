import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from './Button';
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}