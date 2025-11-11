import type { Meta, StoryObj } from '@storybook/react';
import { SwiperReviews } from '~/modules/portal/components';

const meta = {
    component: SwiperReviews,
    tags: ['autodocs'],
    args: {
        reviews: [
            {
                quote: 'Qui voluptate nostrud nostrud ex consequat velit in ea aliqua officia consectetur. Velit amet dolore sed ea consectetur deserunt occaecat culpa enim magna ad et do officia. Veniam quis ex consequat fugiat deserunt in commodo nisi eiusmod enim velit cillum tempor occaecat lorem deserunt mollit id adipiscing.',
            },
            {
                quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            },
        ],
    },
} satisfies Meta<typeof SwiperReviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
