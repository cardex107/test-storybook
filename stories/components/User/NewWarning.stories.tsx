import { Meta, StoryObj } from '@storybook/react';

const NewWarning = () => {
    return (
        <>
            <h1>Hi, put here you warning component code</h1>
        </>
    );
};

const meta = {
    component: NewWarning,
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
