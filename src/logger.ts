interface Logger {
    print(message?: any, ...optionalParams: any[]): void;
    subtle(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    ok(message?: any, ...optionalParams: any[]): void;
    success(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}

const logger: Logger = require('clix-logger')({
    coloredOutput: true,
    timeFormat: 'HH:mm:ss.SSS',
    quiet: true,
    methods: {
        print: { muteable: false },
        subtle: { muteable: false },
        log: { muteable: false },
        ok: { muteable: false },
        success: { muteable: false },
        warn: { muteable: false },
        error: { muteable: false }
    }
});

export default logger;
