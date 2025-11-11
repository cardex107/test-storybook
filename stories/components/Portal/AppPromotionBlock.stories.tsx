import type { Meta, StoryObj } from '@storybook/react';
import AppPromotionBlock from '~/modules/portal/components/AppPromotionBlock';

const meta = {
    component: AppPromotionBlock,
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Title',
        content:
            'Voluptate occaecat in excepteur laborum dolore sunt mollit deserunt adipisicing sunt commodo fugiat sit cillum.',
        image: '/stories/assets/app-image.png',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppPromotionBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
