import type { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import AppButtons from '~/modules/portal/components/AppButtons';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';

const meta = {
    component: AppButtons,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);

            appProps.project.settings_ios_vsee_app = 'https://google.com';
            appProps.project.settings_android_vsee_app = 'https://google.com';

            return (
                <AppProvider initialProps={appProps}>
                    <Story />
                </AppProvider>
            );
        },
    ],
} satisfies Meta<typeof AppButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
