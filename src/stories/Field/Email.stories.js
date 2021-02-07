import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Email',
  component: Field.Email,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Field.Email {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  readOnly: true
}
