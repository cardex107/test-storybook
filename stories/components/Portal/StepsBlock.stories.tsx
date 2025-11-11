import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { StepsBlock } from '~/modules/portal/components';

const meta = {
    component: StepsBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
    args: {
        title: 'the title',
        content:
            'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
        steps: [
            {
                title: 'First step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
            {
                title: 'Second step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
            {
                title: 'Third step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
            {
                title: 'Fourth step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
            {
                title: 'Fifth step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
            {
                title: 'Sixth step title',
                content:
                    'Enim cupidatat do lorem nostrud reprehenderit duis eiusmod ex occaecat dolore tempor sit ipsum. Deserunt laborum cupidatat exercitation in veniam sunt in aute excepteur. Consequat nulla cillum aliquip velit exercitation non tempor veniam eu dolore magna elit labore qui veniam.',
                showAppButtons: false,
            },
        ],
    },
} satisfies Meta<typeof StepsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverted: Story = {
    args: {
        styleType: 'inverted',
    },
};
