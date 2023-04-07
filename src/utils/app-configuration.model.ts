export interface AppConfiguration {
  // URL
  taskServiceURL: string;

  // VERSION
  appVersion: string;
  appBuildNumber: number;
  appDeployTime: string;

  // OKTA
  oktaAuthEnabled: boolean;
  pkce: boolean;
  issuer: string;
  //   scopes: string[];
  clientId: string;
  redirectUri: string;
}
