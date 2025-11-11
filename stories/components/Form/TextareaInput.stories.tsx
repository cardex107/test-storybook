import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import TextareaInput from '~/modules/user/shared/components/form/TextareaInput';

const meta = {
    component: TextareaInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: 'text',
        label: 'Reason',
    },
    decorators: [
        (Story) => (
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Story />
            </Formik>
        ),
    ],
} satisfies Meta<typeof TextareaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
