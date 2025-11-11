import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import BannerHighlight from '~/modules/portal/components/BannerHighlight';

const meta = {
    component: BannerHighlight,
    parameters: {
        layout: 'centered',
    },
    args: {
        image: '/stories/assets/banner-app.png',
        title: 'Who can use this service?',
        content: 'You have unlimited access to this service at no additional cost.',
        showServiceButtons: false,
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BannerHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithServiceButtons: Story = {
    args: {
        image: '/stories/assets/banner-app.png',
        title: 'Who can use this service?',
        content: 'You have unlimited access to this service at no additional cost.',
        showServiceButtons: true,
    },
    decorators: [
        (Story) => (
            <MemoryRouter
                future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                initialEntries={['/omc-general']}
            >
                <Routes>
                    <Route path="/omc-general" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
};
