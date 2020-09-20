import React from 'react';
import Tag from './tag';

export default {
  title: 'component/Tag',
  component: Tag,
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});

Default.argTypes = {
  variant: {
    defaultValue: 'outlined',
    control: {
      type: 'inline-radio',
      options: ['outlined', 'solid'],
    },
  },
  size: {
    defaultValue: 'small',
    control: {
      type: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
  closable: {
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  onClick: {
    action: 'onClick',
  },
  onActionClick: {
    action: 'onActionClick',
  },
};
