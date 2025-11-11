import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SwiperCombo } from '~/modules/portal/components';

const meta = {
    component: SwiperCombo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter
                future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                initialEntries={['/omc-nutrition']}
            >
                <Routes>
                    <Route
                        path="/omc-nutrition"
                        element={
                            <div style={{ width: '95vw' }}>
                                <Story />
                            </div>
                        }
                    />
                </Routes>
            </MemoryRouter>
        ),
    ],
    args: {
        title: 'The Title',
        subtitle:
            'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
        image: '/assets/images/vfz/website/1300x634_article_healthy-portions.jpg',
        slides: [
            {
                image: '/assets/images/vfz/website/screenshots/app-dietitian-1.jpg',
                text: 'Text 1',
            },
            {
                image: '/assets/images/vfz/website/screenshots/app-dietitian-2.jpg',
                text: 'Text 2',
            },
            {
                image: '/assets/images/vfz/website/screenshots/app-dietitian-3.jpg',
                text: 'Text 3',
            },
        ],
    },
} satisfies Meta<typeof SwiperCombo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
