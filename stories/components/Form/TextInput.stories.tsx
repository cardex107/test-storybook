import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import TextInput from '~/modules/user/shared/components/form/TextInput';

const meta = {
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: 'text',
        label: 'Label',
    },
    decorators: [
        (Story) => (
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Story />
            </Formik>
        ),
    ],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
    },
};

export const Nubmer: Story = {
    args: {
        label: 'Age',
        type: 'number',
    },
};

export const Email: Story = {
    args: {
        label: 'Email',
        type: 'email',
    },
};
