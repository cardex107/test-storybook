import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LanguageSelector from '~/modules/portal/components/LanguageSelector';

const meta = {
    component: LanguageSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story) => {
            return (
                <MemoryRouter
                    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                    initialEntries={['/test']}
                >
                    <Routes>
                        <Route path="/test" element={<Story />}></Route>
                    </Routes>
                </MemoryRouter>
            );
        },
    ],
};
