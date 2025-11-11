import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import PhoneNumberInput from '~/modules/user/shared/components/form/PhoneNumberInput';

const meta = {
    component: PhoneNumberInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: 'phone',
        label: 'Phone',
    },
    decorators: [
        (Story) => (
            <Formik initialValues={{ phone: { prefix: '', phone: '' } }} onSubmit={() => {}}>
                <Story />
            </Formik>
        ),
    ],
} satisfies Meta<typeof PhoneNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
