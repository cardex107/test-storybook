import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Formik } from 'formik';
import { t } from 'i18next';
import SubmitButton from '~/modules/user/shared/components/form/SubmitButton';
import TextInput from '~/modules/user/shared/components/form/TextInput';
import Link from '~/shared/components/Link';

const LoginPage = () => {
    return (
        <>
            <div className="o-grid__inner">
                <div className="l-site-content o-grid__span--24 o-grid__span-sm--8">
                    <h1 className="a-text-style-1 h-margin-bottom-10 title-login">Log in or register to access your online account</h1>
                    <p className="a-paragraph h-margin-bottom-10">Send us securely your medical questions.</p>
                    <p className="a-paragraph h-margin-bottom-20">Login if you already have an account with us or proceed to register it this is the first time you request our services.</p>
                    <TextInput 
                        label="E-mail address" 
                        name="email" 
                        type="email"
                        className="h-margin-bottom-20"
                    />
                    <TextInput
                        label={t('fields.password.label')}
                        name="password"
                        type="password"
                        link={{
                                label: t('login.recover_password'),
                                to: '/forgot-password',
                        }}
                        className="h-margin-bottom-30"
                    />
                    <SubmitButton label="LOG IN" type="submit" className="h-width-100 h-margin-bottom-30" />
                    <p className="a-paragraph">Don't have an account?</p>
                    <Link to="http://example.com/register" className="a-text-link">
                        <div className="icon h-inline-block h-margin-right-10">
                            <img src="/images/icons/icon--arrow-right.svg" />
                        </div>
                    CREATE YOUR ACCOUNT</Link>
                </div>
                <div className="l-site-content o-grid__span--24 o-grid__span-sm--16 h-hide h-show-sm bg-login"></div>
            </div>
        </>
    );
};

const meta = {
    component: LoginPage,
    tags: ['autodocs'],
    globals: {
        backgrounds: { value: 'white', grid: false },
    },
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => {
            return (
                <MemoryRouter initialEntries={['/']}>
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
                </MemoryRouter>
            );
        },
    ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
