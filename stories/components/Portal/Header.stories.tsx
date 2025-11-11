import type { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import { MemoryRouter, Route, Routes } from 'react-router';
import Header from '~/modules/portal/components/Header';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import menu from '~/shared/fixtures/menu';

const meta = {
    component: Header,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);

            appProps.project.settings_ios_vsee_app = 'https://google.com';
            appProps.project.settings_android_vsee_app = 'https://google.com';
            appProps.menu = menu;

            return (
                <AppProvider initialProps={appProps}>
                    <div className="l-site-wrapper" style={{ height: 500 }}>
                        <MemoryRouter
                            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                            initialEntries={['/omc-general']}
                        >
                            <Routes>
                                <Route path="/omc-general" element={<Story />} />
                            </Routes>
                        </MemoryRouter>
                    </div>
                </AppProvider>
            );
        },
    ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
