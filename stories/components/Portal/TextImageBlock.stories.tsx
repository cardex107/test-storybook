import type { Meta, StoryObj } from '@storybook/react';
import { TextImageBlock } from '~/modules/portal/components';

const meta = {
    component: TextImageBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    args: {
        title: 'Title',
        image: '/assets/images/vfz/website/1300x634_article_healthy-portions.jpg',
        content:
            'Qui voluptate nostrud nostrud ex consequat velit in ea aliqua officia consectetur. Velit amet dolore sed ea consectetur deserunt occaecat culpa enim magna ad et do officia. Veniam quis ex consequat fugiat deserunt in commodo nisi eiusmod enim velit cillum tempor occaecat lorem deserunt mollit id adipiscing.',
    },
} satisfies Meta<typeof TextImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
