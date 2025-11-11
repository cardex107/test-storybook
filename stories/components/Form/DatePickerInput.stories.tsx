import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { Formik } from 'formik';
import DatePickerInput from '~/modules/user/shared/components/form/DatePickerInput';

const meta = {
    component: DatePickerInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        name: 'date',
        label: 'Date',
    },
    decorators: [
        (Story) => (
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Story />
            </Formik>
        ),
    ],
} satisfies Meta<typeof DatePickerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = await canvas.findByTestId('datepicker-input');
        await userEvent.click(input);

        const calendar = document.querySelector('.flatpickr-calendar');
        expect(calendar!.classList.values()).toContain('open');
    },
};
