
export interface AppHost {
  url: string;
  apiVersion: string;
  header?: {
    xApiKey: string;
  };
}

type Host = 'soe' | 'etma' | 'userMan';

export interface EnvironmentInterface {
  host: Record<Host, AppHost>;
  /**
   * Define API Call for take data
   * @example https://api.hostname.com/api
   */
  apiUrl?: string;

  /**
   * Define API Call for take data thorugh Rest API
   * @example https://api.hostname.com/api
   */
  httpUrl: string;

  /**
   * Define API Call for Authentication Server
   * @example https://api.hostname.com/auth
   */
  keycloakUrl: string;

  /**
   * Define Client ID for OAuth2
   * @example 'pmo-web'
   */
  keycloakClientId: string;

  /**
   * Define base url including protocol, hostname, port
   * @example http://localhost:4200
   */
  baseUrl: string;

  /**
   * Define application mode. set true for production mode
   *
   */
  production: boolean;

  /**
   * Define local key for encryption
   * @example 'your_s4lt_h3r3'
   */
  localKey: string;

  mediaApiManagement: string;
  /**
   * Define API Call for take personal Data data
   * @example https://api.hostname.com/api
   */
  innovationUtilsApiUrl: string;

  /**
   * Define API Call for take personal Data data
   * @example https://api.hostname.com/api
   */
  innovationUtilsApiKey: string;

  /**
   * Define realm for your app
   * @example 'pmo'
   */
  realm: string;

  /**
   * Define bucket media name for your app
   * @example 'material-movement'
   */
  bucketname: string;

  /**
   * Define url for guidance for your app
   * @example 'material-movement'
   */
  guidance: string;

  /**
   * Define version of your app
   * @example '1.0.1'
   */
  version: string;
}
