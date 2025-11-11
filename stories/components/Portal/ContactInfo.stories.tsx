import type { Meta, StoryObj } from '@storybook/react';
import ContactInfo from '~/modules/portal/components/ContactInfo';

const meta = {
    component: ContactInfo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        link: 'http://www.teladochealth.com',
        linkLabel: 'Link',
        email: 'test@test.com',
        phone: '666444222',
    },
    decorators: (Story) => (
        <div style={{ background: 'grey', padding: 20 }}>
            <Story />
        </div>
    ),
} satisfies Meta<typeof ContactInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLinks: Story = {
    args: {
        link: undefined,
        linkLabel: undefined,
    },
};

export const WithoutEmailAndPhone: Story = {
    args: {
        email: undefined,
        phone: undefined,
    },
};
