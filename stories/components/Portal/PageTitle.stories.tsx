import type { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from '~/modules/portal/components';

const meta = {
    component: PageTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'the title',
        subtitle: 'the title',
        styleType: 'reduced',
    },
};

export const WithoutSubtitle: Story = {
    args: {
        title: 'the title',
        styleType: 'reduced',
    },
};
