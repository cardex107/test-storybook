import type { Meta, StoryObj } from '@storybook/react';
import TopAlertBar from '~/modules/portal/components/TopAlertBar';

const meta = {
    component: TopAlertBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    args: {
        message:
            'Qui voluptate nostrud nostrud ex consequat velit in ea aliqua officia consectetur. Velit amet dolore sed ea consectetur deserunt occaecat culpa enim magna ad et do officia. Veniam quis ex consequat fugiat deserunt in commodo nisi eiusmod enim velit cillum tempor occaecat lorem deserunt mollit id adipiscing.',
        link: 'https://www.teladochealth.com',
        linkLabel: 'Link',
    },
} satisfies Meta<typeof TopAlertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithStrongText = {
    args: {
        ...meta.args,
        strongText: 'Strong text',
    },
};
