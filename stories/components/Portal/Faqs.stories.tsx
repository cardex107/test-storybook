import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent } from '@storybook/test';
import { Faqs } from '~/modules/portal/components';
import { cloneDeep } from 'lodash';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';

const meta = {
    component: Faqs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        topics: [
            {
                name: 'section 1',
                questions: [
                    {
                        question: 'section 1 question 1',
                        answer: 'section 1 answer 1',
                    },
                    {
                        question: 'section 1 question 2',
                        answer: 'section 1 answer 2',
                    },
                    {
                        question: 'section 1 question 3',
                        answer: 'section 1 answer 3',
                    },
                ],
            },
            {
                name: 'section 2',
                questions: [
                    {
                        question: 'section 2 question 1',
                        answer: 'section 2 answer 1',
                    },
                    {
                        question: 'section 2 question 2',
                        answer: 'section 2 answer 2',
                    },
                    {
                        question: 'section 2 question 3',
                        answer: 'section 2 answer 3',
                    },
                ],
            },
            {
                name: 'section 3',
                questions: [
                    {
                        question: 'section 3 question 1',
                        answer: 'section 3 answer 1',
                    },
                    {
                        question: 'section 3 question 2',
                        answer: 'section 3 answer 2',
                    },
                    {
                        question: 'section 3 question 3',
                        answer: 'section 3 answer 3',
                    },
                ],
            },
        ],
    },
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);
            appProps.project.use_cookie_pro = true;
            return (
                <AppProvider initialProps={appProps}>
                    <div style={{ width: 400 }}>
                        <Story />
                    </div>
                </AppProvider>
            );
        },
    ],
} satisfies Meta<typeof Faqs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const firstQuestion = canvas.getByText('section 1 question 1');
        await expect(firstQuestion).toBeTruthy();

        await userEvent.click(firstQuestion);
        await expect(firstQuestion).toHaveClass('faq-open');

        const secondQuestion = canvas.getByText('section 1 question 2');
        await expect(secondQuestion).toBeTruthy();

        await userEvent.click(secondQuestion);
        await expect(secondQuestion).toHaveClass('faq-open');
    },
};
