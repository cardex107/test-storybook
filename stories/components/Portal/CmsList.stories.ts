import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { CmsList } from '~/modules/portal/components';

const meta = {
    component: CmsList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        title: 'the title',
        subtitle: 'the subtitle',
        featured: 'the featured',
        list: ['item1', 'item2', 'item3'],
    },
} satisfies Meta<typeof CmsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText('item1')).toBeTruthy();
        expect(canvas.getByText('item2')).toBeTruthy();
        expect(canvas.getByText('item3')).toBeTruthy();
    },
};

export const WithoutTitleAndSubtitle: Story = {
    args: {
        title: undefined,
        subtitle: undefined,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.queryByText('the title')).not.toBeTruthy();
        expect(canvas.queryByText('the subtitle')).not.toBeTruthy();
    },
};

export const WithoutListAndFeatured: Story = {
    args: {
        list: undefined,
        featured: undefined,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.queryByText('item1')).not.toBeTruthy();
        expect(canvas.queryByText('item2')).not.toBeTruthy();
        expect(canvas.queryByText('item3')).not.toBeTruthy();
    },
};
