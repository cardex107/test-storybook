import type { Meta, StoryObj } from '@storybook/react';
import { ColumnList } from '~/modules/portal/components';

const meta = {
    component: ColumnList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        list: ['item1', 'item2', 'item3'],
    },
} satisfies Meta<typeof ColumnList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
