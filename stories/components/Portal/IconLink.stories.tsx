import type { Meta, StoryObj } from '@storybook/react';
import IconLink from '~/modules/portal/components/IconLink';
import { MemoryRouter, Route, Routes } from 'react-router';

const meta = {
    component: IconLink,
    tags: ['autodocs'],
    args: {
        to: '/',
        text: 'Request service',
        iconPosition: 'left',
        styleType: 'primary',
        icon: 'h-icon--phone-consultation',
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
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
    args: {
        styleType: 'secondary',
    },
};

export const Fluid: Story = {
    args: {
        styleType: 'fluid',
    },
};

export const White: Story = {
    args: {
        styleType: 'white',
    },
};

export const Ghost: Story = {
    args: {
        styleType: 'ghost',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const WithIconOnTheRight: Story = {
    args: {
        iconPosition: 'right',
    },
};
