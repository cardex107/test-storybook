import React, { Attributes } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AppProvider from '../infrastructure/context/AppProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import user from '../fixtures/user';

interface WithAppProps {
    storeData: any;
    currentUrl?: string;
    queryClient?: QueryClient;
}

const defaultQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
            retry: false,
        },
    },
});

defaultQueryClient.setQueryData(['user-data'], user);

export const resetQueryClient = () => {
    defaultQueryClient.clear();
};

const withApp = (Component: React.ComponentType<{ currentUrl?: string; queryClient?: QueryClient }>) =>
    class withApp extends React.Component<WithAppProps> {
        render() {
            const { storeData, currentUrl, queryClient } = this.props;
            resetQueryClient();
            return (
                <AppProvider initialProps={storeData}>
                    <QueryClientProvider client={queryClient || defaultQueryClient}>
                        {React.createElement(Component, currentUrl ? ({ currentUrl } as Attributes) : null)}
                    </QueryClientProvider>
                </AppProvider>
            );
        }
    };

export const createTestComponentWithRoutes = (Component: React.ComponentType) => {
    return withApp(() => {
        return (
            <MemoryRouter
                future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                initialEntries={['/unit/testing']}
            >
                <Routes>
                    <Route path="/unit/testing" element={<Component />} />
                </Routes>
            </MemoryRouter>
        );
    });
};

export default withApp;
