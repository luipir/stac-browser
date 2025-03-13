module.exports = {
    catalogUrl: "https://geoportale-preprod.comune.roma.it/stacapi/",
    catalogTitle: "STAC Browser",
    allowExternalAccess: false, // Must be true if catalogUrl is not given
    allowedDomains: [],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "it",
    fallbackLocale: "it",
    supportedLocales: [
<<<<<<< HEAD
        "de",
        "ar",
=======
        // "de",
>>>>>>> 2a93bd82 (logo & colors)
//      "de-CH",
        // "es",
        // "en",
//      "en-GB",
//      "en-US",
        // "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        // "ro",
        // "ja",
        // "pt",
//      "pt-BR"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    // buildTileUrlTemplate: null,
    // buildTileUrlTemplate: asset => "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=" + encodeURIComponent(asset.getAbsoluteUrl()),
    buildTileUrlTemplate: async (
        asset
    ) => {
        let modifiedHref = asset.href.replace("/aerofototeca/integration/api/download", "/aerofototeca-api/integration/api/tile");
        return "https://geoportale-preprod.comune.roma.it/titiler/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@2x?url=" + encodeURIComponent(modifiedHref);
      },
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showKeywordsInItemCards: true,
    showKeywordsInCatalogCards: true,
    showThumbnailsAsAssets: true,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: [300, 300],
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    // socialSharing: ['email', 'bsky', 'mastodon', 'x'],
    socialSharing: [],
    preprocessSTAC: null,
<<<<<<< HEAD
    authConfig: null,
    crs: {}
=======
    authConfig: null
    // authConfig:  {
    //     type: "openIdConnect",  // (openIdConnect | apiKey | basicAuth | bearerToken | sessionKey).
    //     description: "OIDC Auth Method",
    //     name: "session_key",  // The name of the header, query, or cookie parameter to be used.
    //     in: "query",  // (query | header | cookie).
    //     cheme: "bearer",
    //     formatter: token => `Bearer ${token}`,
    //     low: "implicit", // (authorizationCode | implicit | password  | clientCredentials).
    //     penIdConnectUrl: "http://localhost:8282/realms/aerofototeca/.well-known/openid-configuration",
    //     idcConfig: {
    //        client_id: "aerofototeca"
    //     },
    //     issuer: "http://localhost:8282/realms/aerofototeca",
    // }
>>>>>>> 2a93bd82 (logo & colors)
};
