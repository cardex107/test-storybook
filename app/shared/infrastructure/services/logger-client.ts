let cachedLogger: ClientLogger;

export class ClientLogger {
    log(message: string, context?: any) {
        console.log(message, context);
    }

    error(error: unknown, context?: any) {
        console.error(error, context);
    }

    info(message: string, context?: any) {
        console.info(message, context);
    }
}

export const createLogger = (): ClientLogger => {
    if (cachedLogger) {
        return cachedLogger;
    }

    cachedLogger = new ClientLogger();

    return cachedLogger;
};

export const clientLogger = createLogger();
