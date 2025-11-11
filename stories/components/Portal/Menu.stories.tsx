import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Menu from '~/modules/portal/components/Menu';

const meta = {
    component: Menu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        type: 'desktop',
        menu: [
            {
                name: 'Dropdown 1',
                contextId: 1,
                items: [
                    {
                        name: 'item 1',
                        id: 'item-1',
                        disabled: false,
                        link: 'http://www.google.com',
                        target: '',
                        pageName: 'google-page',
                    },
                    {
                        name: 'item 2',
                        id: 'item-2',
                        disabled: false,
                        link: 'http://www.apple.com',
                        target: '',
                        pageName: 'apple-page',
                    },
                ],
            },
            {
                name: 'Dropdown 2',
                contextId: 2,
                items: [
                    {
                        name: 'item 3',
                        id: 'item-3',
                        disabled: false,
                        link: 'http://www.teladochealth.es',
                        target: '',
                        pageName: 'teladoc-es-page',
                    },
                    {
                        name: 'item 4',
                        id: 'item-4',
                        disabled: false,
                        link: 'http://www.teladochealth.com',
                        target: '',
                        pageName: 'teladoc-us-page',
                    },
                ],
            },
            {
                name: 'item 5',
                id: 'item-5',
                disabled: false,
                link: 'http://www.globalcareondemand.com/v2',
                target: '',
                pageName: 'teladoc-us-page',
                contextId: 5,
            },
        ],
    },
};

export const Mobile: Story = {
    args: {
        menu: Desktop.args.menu,
        type: 'mobile',
    },
};
