import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import { BottomBanner } from '~/modules/portal/components';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { cloneDeep } from 'lodash';

const meta = {
    component: BottomBanner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        title: 'The title',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.',
        list: ['item1', 'item2', 'item3'],
        key: 'the key',
        note: 'the note',
    },
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);
            appProps.project.settings_ios_vsee_app = 'http://apple.com';
            appProps.project.settings_android_vsee_app = 'http://google.com';

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
} satisfies Meta<typeof BottomBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showAppButtons: false,
        showServiceButtons: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText('The title')).toBeTruthy();
        expect(canvas.getByText('item1')).toBeTruthy();
        expect(canvas.getByText('item2')).toBeTruthy();
        expect(canvas.getByText('item3')).toBeTruthy();
        expect(canvas.getByText('the note')).toBeTruthy();
    },
};

export const WithButtons: Story = {
    args: {
        buttons: [
            { text: 'button 1', target: 'http://www.teladochealth.com', link: 'link 1', icon: '' },
            { text: 'button 2', target: 'http://www.teladochealth.com', link: 'link 2', icon: '' },
            { text: 'button 3', target: 'http://www.teladochealth.com', link: 'link 3', icon: '' },
        ],
        showServiceButtons: true,
        showAppButtons: true,
    },
};
