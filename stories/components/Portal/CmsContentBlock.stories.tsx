import type { Meta, StoryObj } from '@storybook/react';
import CmsContentBlock from '~/modules/portal/components/CmsContentBlock';

const meta = {
    component: CmsContentBlock,
    parameters: {
        layout: 'centered',
    },
    args: {
        content:
            '<p>Incididunt aliquip ut laborum dolor eiusmod ullamco. Aliquip velit nisi nisi culpa laborum. Incididunt ipsum eiusmod duis minim. Labore velit quis ipsum tempor dolor quis. Adipisicing fugiat esse aliqua minim laboris eiusmod labore dolor in.</p>',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CmsContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PlainText: Story = {
    args: {
        content:
            'Reprehenderit ea ad qui incididunt aliquip. Cupidatat aliquip ex quis eu occaecat labore voluptate sint ex labore. Esse deserunt laboris mollit occaecat. Eu aliquip quis incididunt esse eu minim do in est mollit deserunt. Adipisicing ea nisi non id in esse ut ea et reprehenderit dolor. Cupidatat eu laborum veniam nulla id.',
    },
};

export const Padded: Story = {
    args: {
        styleType: 'padded',
        content:
            '<p>Qui irure exercitation sit cillum. Ex in aute nisi incididunt in veniam ipsum. Duis anim tempor reprehenderit ullamco quis ut aute sit eu consectetur nulla sit amet culpa. Cillum Lorem excepteur esse ad ullamco qui. Minim ut do ex labore Lorem ullamco.</p>',
    },
};

export const White: Story = {
    args: {
        styleType: 'white',
        content:
            '<p>Do consequat dolore nostrud ea ipsum pariatur ea. Exercitation nostrud enim velit anim ad anim cillum. Magna et incididunt Lorem veniam nulla proident incididunt nulla est in.</p>',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Big: Story = {
    args: {
        styleType: 'big',
        content:
            '<p>Ea nostrud tempor velit veniam aute ipsum ad eiusmod nisi deserunt magna. In et enim pariatur amet dolore id magna ad reprehenderit. Ad quis nostrud ipsum ut. Velit incididunt sit aliqua consequat sit ex. In laborum fugiat sit officia exercitation minim incididunt elit. Voluptate fugiat eu non mollit Lorem quis ex reprehenderit velit fugiat fugiat.</p>',
    },
};
