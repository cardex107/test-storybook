import type { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import PortalSwiperSlider from '~/modules/portal/components/PortalSwiperSlider';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import { MemoryRouter, Route, Routes } from 'react-router';

const meta = {
    component: PortalSwiperSlider,
    args: {
        title: 'Aute qui proident',
        slides: [
            {
                title: 'Aute velit nostrud eu adipisicing esse exercitation occaecat ut anim nulla Lorem aliqua cupidatat.',
                content:
                    'Elit laborum commodo esse consequat. Eiusmod exercitation occaecat Lorem ut id et nisi. Voluptate laboris minim labore velit Lorem occaecat.',
                image: '/assets/images/movistar/main/consulta-medica-lg.jpg',
                className: 's-cms-content--white',
                appImage: '/assets/images/movistar/main/app-consulta.png',
                showAppButtons: true,
            },
            {
                title: 'Qui laboris eiusmod laborum eiusmod.',
                content:
                    'Est aliqua ea nisi dolor deserunt nulla consequat tempor do consequat ut deserunt non anim. Adipisicing laborum veniam enim deserunt velit sunt elit consectetur aliquip adipisicing amet anim. Do sit irure reprehenderit Lorem.',
                image: '/assets/images/movistar/main/especialidades-lg.jpg',
                className: 's-cms-content--white',
                button: {
                    text: 'Learn more',
                    link: '/specialties',
                },
                appImage: '/assets/images/movistar/main/app-especialidades.png',
                appBadge: {
                    text: 'Exclusive',
                    text2: 'APP',
                },
            },
            {
                title: 'Ullamco qui velit aliqua incididunt dolore cillum minim est cupidatat occaecat nisi cupidatat qui velit.',
                content:
                    'Eu Lorem incididunt incididunt nulla sunt Lorem. Cillum labore laboris est laboris esse sit ad excepteur proident fugiat. Aliquip occaecat reprehenderit nostrud eu qui. Enim cillum labore in commodo consectetur non cillum proident ullamco sit anim pariatur. Ea et eiusmod dolore voluptate sunt id ea cupidatat occaecat',
                image: '/assets/images/movistar/main/medico-lg.jpg',
                className: 's-cms-content--white',
                appImage: '/assets/images/movistar/main/app-medico.png',
                appBadge: {
                    text: 'Exclusive',
                    text2: 'APP',
                },
            },
            {
                title: 'Ipsum reprehenderit aliquip laboris veniam incididunt nostrud anim excepteur eu duis sit irure exercitation.',
                content:
                    'Adipisicing ullamco minim elit officia pariatur ex laboris sint ad sint consequat aliquip nostrud. Elit mollit sit esse irure tempor nisi dolor eiusmod fugiat. Culpa veniam excepteur esse Lorem minim dolor aliquip tempor laborum non quis laboris fugiat quis. Exercitation ipsum enim incididunt anim aliquip elit ex excepteur reprehenderit.',
                image: '/assets/images/movistar/main/preevaluacion-lg.jpg',
                className: 's-cms-content--white',
                button: {
                    text: 'Learn more',
                    link: '/sc',
                },
                appImage: '/assets/images/movistar/main/app-preevaluacion.png',
            },
            {
                title: 'Ut nulla quis ipsum elit.',
                content:
                    'Reprehenderit nisi sint sunt proident ut magna deserunt in ea velit. Dolor tempor laboris sunt consectetur. Et aute esse nisi qui reprehenderit nisi aliquip eiusmod mollit. Cupidatat mollit voluptate elit officia ex laboris consequat nisi laborum cillum tempor magna sunt.',
                image: '/assets/images/movistar/main/carrusel-salud.jpg',
                className: 's-cms-content--white',
                appImage: '/assets/images/movistar/main/tu-medico.png',
                appBadge: {
                    text: 'Exclusive',
                    text2: 'APP',
                },
            },
        ],
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);

            appProps.project.settings_ios_vsee_app = 'https://google.com';
            appProps.project.settings_android_vsee_app = 'https://google.com';

            return (
                <AppProvider initialProps={appProps}>
                    <MemoryRouter
                        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                        initialEntries={['/']}
                    >
                        <Routes>
                            <Route path="/" element={<Story />} />
                        </Routes>
                    </MemoryRouter>
                </AppProvider>
            );
        },
    ],
} satisfies Meta<typeof PortalSwiperSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
