export default {
    health: {
        ccdComponentApi: 'http://localhost:3453/health',
        ccdDataApi: 'http://localhost:4452/health',
        documentsApi: 'http://localhost:4506/health',
        em_anno_api: 'http://em-anno-aat.service.core-compute-aat.internal/health',
    },
    logging: 'debug',
    loginRoleMatcher: 'caseworker',
    protocol: 'http',
    secureCookie: false,
    services: {
        ccd: {
            componentApi: 'http://localhost:3453',
            dataApi: 'http://localhost:4452',
        },
        documents: {
            api: 'http://dm-store:4506',
        },
        em_anno_api: 'http://em-anno-aat.service.core-compute-aat.internal',
        idam: {
            idamApiUrl: 'http://localhost:5000',
            idamClientID: 'ccd_gateway',
            idamLoginUrl: 'http://localhost:3501',
            indexUrl: '/',
            oauthCallbackUrl: 'oauth2/callback',
        },
        s2s: 'http://localhost:4502',
    },
    sessionSecret: 'secretSauce',
    useProxy: false,
}
