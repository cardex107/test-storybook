import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Client, Country, CustomerProduct, Menu, Project } from '~/modules/amos-api/types';
import type { EmbeddingConfiguration } from '~/modules/portal/infrastructure/services/embedding';

export type AppProps = {
    app: {
        notSupportedSpecialties: string[];
        tracking: Record<string, { route_names?: string[]; uris: string[] }>;
        signUpUrl: string | null;
        homeUrl: string;
        platform: 'website' | 'app';
        availabilitiesRange: number;
        recaptchaKey: string;
        baseUrl: string;
        embeddingConfiguration: EmbeddingConfiguration;
        routeType: any;
    };
    project: Project;
    auth: {
        user: Client | null;
    };
    product: CustomerProduct | null;
    countries: Country[];
    menu: Menu;
};

interface AppProviderProps {
    initialProps: AppProps;
    children: React.ReactNode;
}

//@ts-expect-error because we have no pre initial data at this point
export const AppContext = React.createContext<AppProps & { refreshUser: () => Promise<void> }>({});

const AppProvider = ({ initialProps, children }: AppProviderProps) => {
    const {
        i18n: { language },
    } = useTranslation();
    const [user, setUser] = useState(initialProps.auth.user);

    const refreshUser = useCallback(async () => {
        const user = {} as Client;
        setUser(user);
    }, []);

    const value = React.useMemo(
        () => ({ ...initialProps, auth: { user }, refreshUser }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user, initialProps.app.baseUrl, language]
    );
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
