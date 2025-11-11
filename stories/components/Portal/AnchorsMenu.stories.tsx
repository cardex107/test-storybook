import type { Meta, StoryObj } from '@storybook/react';
import { AnchorsMenu } from '~/modules/portal/components';

const WrappedAnchorsMenu = (props: React.ComponentProps<typeof AnchorsMenu>) => (
    <div style={{ position: 'relative', width: 1000, height: 100, marginTop: 60 }}>
        <AnchorsMenu {...props} />
    </div>
);

const menu = [
    { label: 'option 1', href: 'https://www.testanchors.com/option1' },
    { label: 'option 2', href: 'https://www.testanchors.com/option2' },
    { label: 'option 3', href: 'https://www.testanchors.com/option3' },
];

const meta = {
    component: WrappedAnchorsMenu,
    tags: ['autodocs'],
    args: {
        menu,
    },
} satisfies Meta<typeof AnchorsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
