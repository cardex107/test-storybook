import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ListItemsBlock from '~/modules/portal/components/ListItemsBlock';

const blocks = [
    {
        contextId: 1,
        title: 'Second Medical Opinion',
        content:
            '<p>For any health concerns you have or even if you want help to quit smoking, our experienced Doctors are available to speak to you wherever you are in the world, 24 hours a day, 7 days a week. For more complex medical cases you can seek a Second Medical Opinion.</p>',
        image: '/stories/assets/medical.jpg',
        links: [
            {
                text: 'More information',
                link: '/emo',
            },
        ],
    },
    {
        contextId: 2,
        title: 'Medical',
        content:
            '<p>Are you looking to achieve or maintain a healthy body weight? Do you want to change your eating habits both at home and at the workplace? Our team of nutritional experts are here to support you all the way.</p>',
        image: '/stories/assets/destacado3327693.jpg',
        links: [
            {
                text: 'GP Consultation',
                link: '/omc-general',
            },
            {
                text: 'Symptom checker',
                link: '/sc',
            },
            {
                text: 'Sports',
                link: '/omc-sports',
            },
            {
                text: 'Dermatology',
                link: '/omc-dermatology',
            },
            {
                text: 'Dear',
                link: '/omc-pediatric',
            },
            {
                text: 'Gynecological',
                link: '/omc-gynecological',
            },
            {
                text: 'Endocrinology',
                link: '/omc-endocrinology',
            },
            {
                text: 'Otorhinolaryngology',
                link: '/omc-otorhinolaryngology',
            },
            {
                text: 'Pneumology',
                link: '/omc-pneumology',
            },
            {
                text: 'Geriatric',
                link: '/omc-geriatric',
            },
            {
                text: 'Traveler',
                link: '/omc-traveler',
            },
            {
                text: 'omc_midwife.home.title',
                link: '/omc-midwife',
            },
            {
                text: 'Immunoallergology',
                link: '/omc-immunoallergology',
            },
            {
                text: 'Women Care',
                link: '/omc-women-care',
            },
            {
                text: 'Chronics light',
                link: '/omc-chronics-light',
            },
            {
                text: 'Ophthalmology',
                link: '/omc-ophthalmology',
            },
            {
                text: 'Pregnancy Program',
                link: '/omc-pregnant-program',
            },
            {
                text: 'Hospital discharge',
                link: '/omc-hospital-discharge',
            },
            {
                text: 'Elder Program',
                link: '/omc-elder-program',
            },
        ],
    },
    {
        contextId: 3,
        title: 'Wellbeing',
        content:
            '<p>If a life event knocks you sideways, you’re struggling with sleeping or work is getting on top of you. Speak to our team of mental health professionals in complete confidence and get back on track.</p>',
        image: '/stories/assets/wellbeing.jpg',
        links: [
            {
                text: 'Mental Health Support',
                link: '/omc-mental-health-support',
            },
            {
                text: 'Psychological',
                link: '/omc-psychological',
            },
            {
                text: 'Burn Out Prevention',
                link: '/omc-burn-out-prevention',
            },
            {
                text: 'Life Events Counselling',
                link: '/omc-life-events-counselling',
            },
            {
                text: 'Mental Health Program',
                link: '/omc-mental-health-program',
            },
            {
                text: 'Coaching',
                link: '/omc-coaching',
            },
            {
                text: 'Dementia support',
                link: '/omc-dementia-support',
            },
            {
                text: 'Stress management',
                link: '/omc-stress-management',
            },
            {
                text: 'Parenting Advice',
                link: '/omc-parenting-advice',
            },
        ],
    },
    {
        contextId: 4,
        title: '',
        content: '<p></p>',
        image: '',
        links: [],
    },
];

const meta = {
    component: ListItemsBlock,
    args: {
        blocks,
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} initialEntries={['/']}>
                    <Routes>
                        <Route path="/" element={<Story />}></Route>
                    </Routes>
                </MemoryRouter>
            );
        },
    ],
} satisfies Meta<typeof ListItemsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
