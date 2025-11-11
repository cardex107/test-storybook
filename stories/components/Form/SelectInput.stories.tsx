import type { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import SelectInput from '~/modules/user/shared/components/form/SelectInput';

const meta = {
    component: SelectInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: 'option',
        label: "What's your preference",
        placeholder: '-- Select an option --',
        options: [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 },
        ],
    },
    decorators: [
        (Story) => (
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Story />
            </Formik>
        ),
    ],
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
