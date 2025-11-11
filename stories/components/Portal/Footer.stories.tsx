import type { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Footer from '~/modules/portal/components/Footer';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';

const meta = {
    component: Footer,
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);
            appProps.project.resources.logos.footerServiceLogo = '/stories/assets/teladochealth_logo_grey-small.svg';
            appProps.project.consents = [
                { document_type: 'terms_and_conditions' },
                { document_type: 'privacy_notice' },
                { document_type: 'legal_notice' },
            ];
            appProps.project.use_legal_notice = true;

            return (
                <AppProvider initialProps={appProps}>
                    <MemoryRouter
                        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                        initialEntries={['/test']}
                    >
                        <Routes>
                            <Route path="/test" element={<Story />}></Route>
                        </Routes>
                    </MemoryRouter>
                </AppProvider>
            );
        },
    ],
};

export const WithoutLogoAndLessConsents: Story = {
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);
            appProps.project.resources.logos.footerServiceLogo = null;
            appProps.project.consents = [{ document_type: 'terms_and_conditions' }];

            return (
                <AppProvider initialProps={appProps}>
                    <MemoryRouter
                        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                        initialEntries={['/test']}
                    >
                        <Routes>
                            <Route path="/test" element={<Story />}></Route>
                        </Routes>
                    </MemoryRouter>
                </AppProvider>
            );
        },
    ],
};
