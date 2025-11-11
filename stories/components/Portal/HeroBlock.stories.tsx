import type { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import HeroBlock from '~/modules/portal/components/HeroBlock';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import { MemoryRouter, Route, Routes } from 'react-router';

const meta = {
    component: HeroBlock,
    args: {
        image: '/stories/assets/01_247_helpline_1800x560.jpg',
        title: 'Qui Lorem labore tempor labore elit fugiat culpa.',
        subtitle: 'Nostrud cupidatat qui culpa ut ea elit laborum ex.',
        styleType: 'service',
        buttons: [{ link: 'tel:02045870494', text: 'Call us', icon: '' }],
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);

            appProps.project.settings_ios_vsee_app = 'https://google.com';
            appProps.project.settings_android_vsee_app = 'https://google.com';

            return (
                <AppProvider initialProps={appProps}>
                    <MemoryRouter
                        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                        initialEntries={['/omc-general']}
                    >
                        <Routes>
                            <Route path="/omc-general" element={<Story />} />
                        </Routes>
                    </MemoryRouter>
                </AppProvider>
            );
        },
    ],
} satisfies Meta<typeof HeroBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAppButtons: Story = {
    args: {
        buttons: undefined,
        showAppButtons: true,
        appButtonsTitle: 'Download the app here!',
    },
};

export const WithServiceButtons: Story = {
    args: {
        buttons: undefined,
        showServiceButtons: true,
    },
};
