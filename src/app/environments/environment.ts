// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentInterface } from './environment.interface';

const baseUrl: string = 'https://api.ragamapan.com';

export const environment: EnvironmentInterface = {
  host: {
    etma: {
      header: {
        xApiKey: 'CAD2-4CEA-99AE-314C',
      },
      url: baseUrl,
      apiVersion: 'v1',
    },
    soe: {
      header: {
        xApiKey: '543C-EF0B-4137-A27F',
      },
      url: baseUrl + '/th/soev2',
      apiVersion: 'v2',
    },
    userMan: {
      header: {
        xApiKey: 'EADF-75D9-ACE7-15C0',
      },
      url: baseUrl + '/utils/userman/',
      apiVersion: 'v1',
    },
  },

  mediaApiManagement:
    'https://api.gmf-aeroasia.co.id/innovation/utils/v2/api/media',
  innovationUtilsApiUrl: '',
  innovationUtilsApiKey: '',

  production: false,
  httpUrl: '',
  apiUrl: '',

  baseUrl: 'http://localhost:4200',
  localKey: '19ast+NnHcipOHKvd0iUUIGSjklnbo9nV8sY0',

  // Keycloak
  keycloakUrl: 'https://dev-auth.gmf-aeroasia.co.id/auth',
  realm: 'erp',
  keycloakClientId: 'erp-web',
  bucketname: 'material-movement',
  guidance: 'https://api.gmf-aeroasia.co.id/utils/guidance',

  version: '1.0.0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
