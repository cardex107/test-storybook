import type { Meta, StoryObj } from '@storybook/react';
import Alert from '~/modules/user/shared/components/Alert';

const meta = {
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        message: 'Warning message',
        buttonLink: 'http://google.com',
        buttonLabel: 'Ok',
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
