import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ConfirmButton from '~/modules/user/shared/components/ConfirmButton';

const meta = {
    component: ConfirmButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        confirmTitle: 'confirm',
        confirmMessage: 'Confirm?',
        buttonLabel: 'Confirm button',
    },
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        styleType: 'outlined',
        onAccept: fn(),
        confirmTitle: 'confirm',
        confirmMessage: 'Confirm?',
    },
};
