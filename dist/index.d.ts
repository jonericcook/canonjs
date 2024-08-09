import { GenericAbortSignal, AxiosResponse } from 'axios';

type Endpoint = {
    path: string;
    get: boolean;
    post: boolean;
    put: boolean;
    delete: boolean;
};
type Methods = {
    get: boolean;
    post: boolean;
    put: boolean;
    delete: boolean;
};
type SupportedApis = Record<string, Endpoint[]>;
type SupportedVersionMethods = Record<string, Methods>;
declare const ccapi: (ipAddress: string, signal?: GenericAbortSignal | undefined) => Promise<AxiosResponse>;
declare const Camera: (ipAddress: string, supportedApis: SupportedApis) => {
    topUrlForDev: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    deviceInformation: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    storage: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    currentStorage: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    currentDirectory: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    battery: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    batteryList: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    lens: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    temperature: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    copyright: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    author: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    ownerName: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    nickName: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    dateTime: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    cardFormat: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    beep: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    displayOff: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    autoPowerOff: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    sensorCleaning: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    networkConnection: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    networkSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    currentConnectionSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    connectionSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    connectionSettingSet: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    commSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    commSettingNw: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    functionSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    functionSettingMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    wifiConnection: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    wifiSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    wifiSettingSet1: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    wifiSettingSet2: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    wifiSettingSet3: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    caCert: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    commonName: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    corsSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    corsOrigin: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    recordFunctionsSeparate: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    recordFunctionsStillImage: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    recordFunctionsMovie: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    cardSelectionStillImage: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    cardSelectionMovie: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    exposureIncrementsAv: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    exposureIncrementsTv: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    exposureIncrementsExposure: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    exposureIncrementsFlashExposure: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    isoIncrements: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    contents: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    contentsStorage: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    contentsStorageDirectory: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    contentsStorageDirectoryFile: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shutterButton: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shutterButtonManual: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    ignoreShootingModeDialMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    movieMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    recButton: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    zoom: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    driveFocus: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    autoFocus: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    flickerDetection: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    hfFlickerDetection: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    controlHfFlickerTv: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shootingSettings: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shootingModeDial: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shootingModeDialMovie: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shootingMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    apertureValue: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    timeValue: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    iso: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    exposure: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    whiteBalance: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    colorTemperature: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    autoFocusOperation: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    autoFocusMethod: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    trackingSetting: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shutterMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageQuality: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionLarge: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionMedium: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionMedium1: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionMedium2: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionSmall: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionSmall1: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageCompressionSmall2: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    hdr: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    stillImageAspectRatio: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    flash: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    metering: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    drive: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    shootingSpeed: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    numberOfShots: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    autoExposureBracketing: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    whiteBalanceShift: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    whiteBalanceBracket: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    colorSpace: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyle: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleAuto: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleStandard: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStylePortrait: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleLandscape: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleFineDetail: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleNeutral: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleFaithful: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleMonochrome: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleUserDef1: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleUserDef2: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    pictureStyleUserDef3: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    basePictureStyleUserDef1: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    basePictureStyleUserDef2: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    basePictureStyleUserDef3: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    antiFlickerShoot: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    hfAntiFlickerShoot: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    settingsHfFlickerTv: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    focusBracketing: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    focusBracketingNumberOfShots: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    focusBracketingFocusIncrement: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    focusBracketingExposureSmoothing: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    movieQuality: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    highFramerate: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    movieCropping: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    movieFormat: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    soundRecording: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    soundRecordingLevel: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    soundRecordingWindFilter: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    soundRecordingAttenuator: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    recordable: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveView: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewFlip: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewFlipDetail: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewScroll: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewScrollDetail: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewMultipart: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewRtpSessionDescription: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewRtp: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewAngleInfo: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewAutoFocusFramePosition: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    liveViewClickWhiteBalance: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    opticalFinderAutoFocusAreaSelectionMode: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    opticalFinderAutoFocusAreaSelection: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    opticalFinderAutoFocusFrameInfo: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    opticalFinderAutoFocusAreaInfo: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    polling: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
    monitoring: {
        supported: () => boolean;
        versions: () => never[];
        versionMethods: () => void;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<never>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<never>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<never>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<never>;
    } | {
        supported: () => boolean;
        versions: () => string[];
        versionMethods: () => SupportedVersionMethods;
        path: () => string;
        get: (version: string, { paths, params, signal }?: GetOptions) => Promise<AxiosResponse>;
        post: (version: string, { paths, params, data, signal, }?: PostOptions) => Promise<AxiosResponse>;
        put: (version: string, { paths, params, data, signal, }?: PutOptions) => Promise<AxiosResponse>;
        delete: (version: string, { paths, params, signal }?: DeleteOptions) => Promise<AxiosResponse>;
    };
};
type GetOptions = {
    paths?: string[] | [];
    params?: Object | null;
    signal?: GenericAbortSignal | undefined;
};
type PostOptions = {
    paths?: string[] | [];
    params?: Object | null;
    data?: Object | {};
    signal?: GenericAbortSignal | undefined;
};
type PutOptions = {
    paths?: string[] | [];
    params?: Object | null;
    data?: Object | {};
    signal?: GenericAbortSignal | undefined;
};
type DeleteOptions = {
    paths?: string[] | [];
    params?: Object | null;
    signal?: GenericAbortSignal | undefined;
};

export { Camera, type SupportedApis, ccapi };
