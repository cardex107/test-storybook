import type { Meta, StoryObj } from '@storybook/react';
import { Reviews } from '~/modules/portal/components';

const meta = {
    component: Reviews,
    tags: ['autodocs'],
    args: {
        title: 'Tempor reprehenderit tempor mollit amet aliquip et qui exercitation minim reprehenderit est quis id.',
        reviews: [
            {
                name: 'M. C.',
                image: '/assets/images/vfz/website/review-1.png',
                text: 'Lorem et non anim laboris eu velit.',
            },
            {
                name: 'C. R.',
                image: '/assets/images/vfz/website/review-2.png',
                text: 'Sunt incididunt adipisicing occaecat id aliquip non veniam dolor nisi.',
            },
        ],
    },
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
