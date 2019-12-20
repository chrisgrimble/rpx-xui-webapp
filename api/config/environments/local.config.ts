export default {
    health: {
        ccdComponentApi: 'http://localhost:3453/health',
        ccdDataApi: 'http://localhost:4452/health',
        documentsApi: 'http://localhost:4630/health',
        em_anno_api: 'http://em-anno-aat.service.core-compute-aat.internal/health',
    },
    logging: 'debug',
    loginRoleMatcher: 'caseworker',
    protocol: 'http',
    proxy: {
        host: '172.16.0.7',
        port: 8080,
    },
    secureCookie: false,
    services: {
        ccd: {
            componentApi: 'http://localhost:3453',
            dataApi: 'http://localhost:4452',
        },
        documents: {
            api: 'http://localhost:4630',
        },
        em_anno_api: 'http://em-anno-aat.service.core-compute-aat.internal',
        idam: {
            idamApiUrl: 'http://localhost:5000',
            idamClientID: 'ccd_gateway',
            idamLoginUrl: 'http://localhost:3501',
            indexUrl: '/',
            oauthCallbackUrl: 'oauth2/callback',
        },
        s2s: 'http://service-auth-provider-api:4502',
    },
    sessionSecret: 'secretSauce',
}
