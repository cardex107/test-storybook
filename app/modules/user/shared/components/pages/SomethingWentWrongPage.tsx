import { clientLogger } from '~/shared/infrastructure/services/logger-client';

interface SomethingWentWrongPageProps {
    error: any;
    userId?: string | number | null;
}

const SomethingWentWrongPage = ({ error, userId }: SomethingWentWrongPageProps) => {
    clientLogger.error(error);

    return (
        <div>
            <h1 className="h-text-center h-margin-top-50">Something went wrong</h1>
            <div style={{ display: 'none' }}>{JSON.stringify(error)}</div>
            <div style={{ display: 'none' }}>userId: {userId}</div>
        </div>
    );
};

export default SomethingWentWrongPage;
