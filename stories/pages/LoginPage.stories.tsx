import { Meta, StoryObj } from '@storybook/react';
import { Formik } from 'formik';
import TextInput from '~/modules/user/shared/components/form/TextInput';

const LoginPage = () => {
    return (
        <>
            <h1>Hi, put here your login page code</h1>
            <TextInput label="my label" name="name" />
        </>
    );
};

const meta = {
    component: LoginPage,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <Formik
                    initialErrors={{ name: 'some error' }}
                    initialTouched={{ name: true }}
                    initialValues={{ name: 'some value' }}
                    onSubmit={(values) => {
                        console.log('Submitted!', values);
                    }}
                >
                    <Story />
                </Formik>
            );
        },
    ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
