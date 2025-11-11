import type { Meta, StoryObj } from '@storybook/react';
import i18next from 'i18next';
import { cloneDeep } from 'lodash';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router';
import CookiesBar from '~/modules/portal/components/CookiesBar';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import { setCookie } from '~/modules/user/shared/utils/cookies';

const meta = {
    component: CookiesBar,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);
            appProps.app.embeddingConfiguration = {
                ...defaultAppProps.app.embeddingConfiguration,
                hideCookieAlert: false,
            };

            setCookie('accept-use-cookies', '', -1);

            return (
                <I18nextProvider i18n={i18next}>
                    <AppProvider initialProps={appProps}>
                        <div className="l-site-wrapper">
                            <div className="l-site-content">
                                <MemoryRouter initialEntries={['/']}>
                                    <Routes>
                                        <Route path="/" element={<Story />} />
                                    </Routes>
                                </MemoryRouter>
                            </div>
                        </div>
                    </AppProvider>
                </I18nextProvider>
            );
        },
    ],
} satisfies Meta<typeof CookiesBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
