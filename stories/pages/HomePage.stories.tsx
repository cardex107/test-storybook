import { Meta, StoryObj } from '@storybook/react';
import { cloneDeep } from 'lodash';
import { MemoryRouter, Route, Routes } from 'react-router';
import {
    AppCookieModal,
    AppPromotionBlock,
    HeroBlock,
    HomeServiceList,
    PortalSwiperSlider,
} from '~/modules/portal/components';
import Footer from '~/modules/portal/components/Footer';
import Header from '~/modules/portal/components/Header';
import defaultAppProps from '~/modules/user/shared/fixtures/appProps';
import AppProvider from '~/modules/user/shared/infrastructure/context/AppProvider';
import menu from '~/shared/fixtures/menu';

const DefaultHomePage = () => (
    <>
        <Header />
        <HeroBlock
            image="/stories/assets/01_247_helpline_1800x560.jpg"
            title="Qui Lorem labore tempor labore elit fugiat culpa."
            subtitle="Nostrud cupidatat qui culpa ut ea elit laborum ex."
        />
        <HomeServiceList />
        <AppPromotionBlock
            title="Title"
            content="Voluptate occaecat in excepteur laborum dolore sunt mollit deserunt adipisicing sunt commodo fugiat sit cillum."
            image="/stories/assets/app-image.png"
        />
        <Footer />
    </>
);

const MovistarHomePage = () => (
    <>
        <Header />
        <PortalSwiperSlider
            className="swiper-hero"
            slides={[
                {
                    title: 'Esse nisi aliquip velit irure sit.',
                    subtitle: 'Nisi id aliquip minim et.',
                    image: '/assets/images/movistar/main/app-movistar-salud.jpg',
                    className: 'o-swiper-content-banner--hero',
                    showAppButtons: true,
                },
                {
                    title: 'Sunt duis irure in sint ex excepteur.',
                    subtitle: 'Reprehenderit amet pariatur eu laboris.',
                    image: '/assets/images/movistar/main/slide-hero.jpg',
                    className: 'o-swiper-content-banner--hero',
                    newBadge: {
                        text: '__badge.new',
                    },
                },
            ]}
        />
        <PortalSwiperSlider
            title="Eiusmod qui enim adipisicing nisi et ipsum dolore eu amet pariatur ipsum excepteur amet enim."
            slides={[
                {
                    title: 'Nisi commodo enim et adipisicing.',
                    content: 'Nulla commodo reprehenderit amet magna et.',
                    image: '/assets/images/movistar/main/consulta-medica-lg.jpg',
                    className: 's-cms-content--white',
                    button: {
                        text: 'Proident adipisicing id sit nulla adipisicing.',
                        link: '/omc-general',
                    },
                    appImage: '/assets/images/movistar/main/app-consulta.png',
                },
                {
                    title: 'Veniam sit dolor deserunt pariatur reprehenderit aliquip non.',
                    content: 'Consectetur sint aute minim in eu dolor fugiat fugiat cupidatat est incididunt.',
                    image: '/assets/images/movistar/main/especialidades-lg.jpg',
                    className: 's-cms-content--white',
                    button: {
                        text: 'Voluptate nisi dolor elit proident velit tempor ipsum exercitation dolor.',
                        link: '/specialties',
                    },
                    appImage: '/assets/images/movistar/main/app-especialidades.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
                {
                    title: 'Aute laboris enim voluptate mollit proident sint pariatur duis duis non.',
                    content: 'Cillum officia magna duis consequat sunt minim nulla sint quis irure.',
                    image: '/assets/images/movistar/main/medico-lg.jpg',
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/app-medico.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
                {
                    title: 'Ad adipisicing ipsum exercitation ut exercitation.',
                    content: 'Laboris proident mollit amet dolore nostrud quis laborum elit cupidatat.',
                    image: '/assets/images/movistar/main/preevaluacion-lg.jpg',
                    className: 's-cms-content--white',
                    button: {
                        text: 'Nisi irure minim nostrud adipisicing labore ad quis.',
                        link: '/sc',
                    },
                    appImage: '/assets/images/movistar/main/app-preevaluacion.png',
                },
                {
                    title: 'Ipsum Lorem minim sunt minim nisi sint consectetur id commodo ullamco eu ullamco.',
                    content: 'Laborum aute proident ipsum tempor pariatur commodo est Lorem.',
                    image: '/assets/images/movistar/main/carrusel-salud.jpg',
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/tu-medico.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
            ]}
        />
        <PortalSwiperSlider
            title="Aute sit voluptate laborum veniam aliqua ullamco sit nostrud."
            slides={[
                {
                    title: 'Cupidatat elit adipisicing do consequat in qui magna anim laboris deserunt culpa nostrud ad.',
                    content: 'Exercitation nulla veniam esse ea labore est.',
                    image: '/assets/images/movistar/main/ponte-en-forma-lg.jpg',
                    className: 's-cms-content--white',
                    button: {
                        text: 'Eiusmod officia consectetur ullamco proident.',
                        link: '/gfpv3',
                    },
                    appImage: '/assets/images/movistar/main/app-ponte-en-forma.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
                {
                    title: 'Commodo et cupidatat ipsum magna incididunt duis tempor cupidatat culpa.',
                    content: 'Labore officia ut nulla excepteur incididunt.',
                    image: '/assets/images/movistar/main/soporte-nutricional-lg.jpg',
                    className: 's-cms-content--white',
                    button: {
                        text: 'Cupidatat do ullamco ex amet.',
                        link: '/omc-diet-support',
                    },
                    appImage: '/assets/images/movistar/main/app-nutricional.png',
                },
                {
                    title: 'Elit Lorem non velit sunt.',
                    content: 'Aliquip cupidatat ullamco aute enim labore fugiat veniam tempor in.',
                    image: '/assets/images/movistar/main/articulos-lg.jpg',
                    button: {
                        text: 'In nisi dolore eu et in non excepteur sint cillum minim ex.',
                        link: '/omc-diet-support',
                    },
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/app-articulos.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
                {
                    title: 'Aliquip nulla cillum officia occaecat est voluptate.',
                    content: 'Elit cupidatat adipisicing Lorem dolore cillum.',
                    image: '/assets/images/movistar/main/famosos-lg.jpg',
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/app-famosos.jpg',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
            ]}
        />
        <PortalSwiperSlider
            title="Consequat adipisicing eu consequat consequat Lorem mollit."
            slides={[
                {
                    title: 'Enim labore est Lorem in ad veniam adipisicing laboris ad.',
                    content: 'Est officia qui veniam dolor aute magna dolore.',
                    image: '/assets/images/movistar/main/descuentos-presenciales-lg.jpg',
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/app-descuentos.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                    textPanelImages: [
                        '/assets/images/movistar/other/logo-hm.svg',
                        '/assets/images/movistar/other/logo-synlab.svg',
                        '/assets/images/movistar/other/logo-echevarne.svg',
                    ],
                },
                {
                    title: 'Elit incididunt qui laboris reprehenderit exercitation cillum anim irure dolore tempor do.',
                    content: 'Veniam adipisicing est consequat nulla cupidatat laborum ex excepteur voluptate aliquip.',
                    image: '/assets/images/movistar/main/explora-lg.jpg',
                    className: 's-cms-content--white',
                    appImage: '/assets/images/movistar/main/app-explora.png',
                    appBadge: {
                        text: 'Exclusivo',
                        text2: 'APP',
                    },
                },
            ]}
        />
        <AppCookieModal
            id="assigned-doctor"
            title="Cupidatat cillum cupidatat elit velit velit non."
            subtitle="Culpa occaecat Lorem et quis duis anim duis cupidatat cillum labore."
            appSideImages={[
                '/assets/images/movistar/main/tu-medico.png',
                '/assets/images/movistar/main/screen-popup.jpg',
            ]}
        />
        <Footer />
    </>
);

const meta = {
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const appProps = cloneDeep(defaultAppProps);

            appProps.project.settings_ios_vsee_app = 'https://google.com';
            appProps.project.settings_android_vsee_app = 'https://google.com';
            appProps.menu = menu;

            return (
                <AppProvider initialProps={appProps}>
                    <div className="l-site-wrapper">
                        <div className="l-site-content">
                            <MemoryRouter
                                future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                                initialEntries={['/']}
                            >
                                <Routes>
                                    <Route path="/" element={<Story />} />
                                </Routes>
                            </MemoryRouter>
                        </div>
                    </div>
                </AppProvider>
            );
        },
    ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <DefaultHomePage />,
};

export const Movistar: Story = {
    render: () => <MovistarHomePage />,
};
