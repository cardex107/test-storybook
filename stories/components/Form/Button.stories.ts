import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect, userEvent } from '@storybook/test';
import Button from '~/modules/user/shared/components/Button';

const clickSpy = fn(() => console.log('click'));

const meta = {
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: clickSpy },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        await expect(button).toBeTruthy();

        await userEvent.click(button);
        await expect(clickSpy).toHaveBeenCalled();
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        styleType: 'primary',
        label: 'Primary Button',
        disabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        expect(button).not.toBeDisabled();
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        styleType: 'secondary',
        disabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        await expect(button.classList.values()).toContain('a-button--secondary');
    },
};

export const Outlined: Story = {
    args: {
        styleType: 'outlined',
        label: 'Secondary Button',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        await expect(button.classList.values()).toContain('a-button--outlined');
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Button',
        disabled: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        await expect(button).toBeDisabled();
    },
};
