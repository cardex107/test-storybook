import type { Meta, StoryObj } from '@storybook/react';
import BannerList from '~/modules/portal/components/BannerList';

const meta = {
    component: BannerList,
    parameters: {
        layout: 'centered',
    },
    args: {
        image: '/stories/assets/how-does-it-work.jpeg',
        title: 'How does it work?',
        list: [
            'Request an Expert Medical Opinion.',
            'Intake interview and collection of medical files.',
            'Evaluation of the medical files.',
            'Selection of the best specialist.',
            'Analysis of the case.',
            'Sharing the final report.',
        ],
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BannerList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
