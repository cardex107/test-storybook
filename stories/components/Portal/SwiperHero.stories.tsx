import type { Meta, StoryObj } from '@storybook/react';
import { SwiperHero } from '~/modules/portal/components';
import { MemoryRouter, Route, Routes } from 'react-router';

const meta = {
    component: SwiperHero,
    tags: ['autodocs'],
    args: {
        slides: [
            {
                title: 'Expert Medical Opinion',
                subtitle: 'Provided by world renowned medical experts.',
                video: {
                    source: '/assets/images/teladoc/hero.mp4',
                    poster: '/assets/images/teladoc/hero-poster.jpg',
                    type: 'video/mp4',
                },
                showServiceButtons: false,
            },
        ],
    },
} satisfies Meta<typeof SwiperHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSeviceButton: Story = {
    args: {
        slides: [
            {
                title: 'Expert Medical Opinion',
                subtitle: 'Provided by world renowned medical experts.',
                video: {
                    source: '/assets/images/teladoc/hero.mp4',
                    poster: '/assets/images/teladoc/hero-poster.jpg',
                    type: 'video/mp4',
                },
                showServiceButtons: true,
            },
        ],
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
