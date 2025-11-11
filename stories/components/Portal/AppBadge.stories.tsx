import type { Meta, StoryObj } from '@storybook/react';
import AppBadge from '~/modules/portal/components/AppBadge';

const meta = {
    component: AppBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        text: 'FOO',
        text2: 'BAR',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: 200, width: 200, background: '#ccc' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof AppBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomImage: Story = {
    args: {
        text: 'FOO',
        text2: 'BAR',
        image: '/stories/assets/529-25x37.jpg',
    },
};
