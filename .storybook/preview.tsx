import React from 'react';
import type { Preview } from '@storybook/react';
import 'stories/assets/variables.scss';
import { I18nextProvider } from 'react-i18next';
import AppProvider from '../app/modules/user/shared/infrastructure/context/AppProvider';
import defaultAppProps from '../app/modules/user/shared/fixtures/appProps.ts';
import i18next from 'i18next';
import translations from '../stories/assets/en-UK.json';

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: translations,
    },
  },
});

const customViewports = {
    mobile: {
        name: 'Mobile',
        styles: {
            width: '500px',
            height: '963px',
        },
    },
    tablet: {
        name: 'Tablet',
        styles: {
            width: '1100px',
            height: '834px',
        },
    },
    desktop: {
        name: 'Desktop',
        styles: {
            width: '1280px',
            height: '720px',
        },
    },
    large: {
        name: 'Large screen',
        styles: {
            width: '1800px',
            height: '1200px',
        },
    },
};

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        stylesheetToggle: {
            default: '/css/v2/styles.css',
            Modern: '/css/v2-theme-modern/styles.css',
        },
        viewport: {
            viewports: customViewports,
            defaultViewport: 'desktop',
        },
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#efefef',
                },
                {
                    name: 'dark',
                    value: '#484848',
                },
                {
                    name: 'movistar',
                    value: '#3b5998',
                },
            ],
        },
    },
    decorators: [
        (Story) => {
            return (
                <I18nextProvider i18n={i18next}>
                    <AppProvider initialProps={defaultAppProps}>
                        <Story />
                    </AppProvider>
                </I18nextProvider>
            );
        },
    ],
};

export default preview;
