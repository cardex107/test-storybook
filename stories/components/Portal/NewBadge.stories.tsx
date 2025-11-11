import type { Meta, StoryObj } from '@storybook/react';
import NewBadge from '~/modules/portal/components/NewBadge';

const meta = {
    component: NewBadge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        text: 'New!',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: 200, width: 200, background: '#ccc' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof NewBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
