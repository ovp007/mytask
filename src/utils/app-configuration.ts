import { AppConfiguration } from "./app-configuration.model";

// export const appConfiguration = async (): Promise<AppConfiguration> =>
//   fetch("/config/config.json")
//     .then((res) => res.json())
//     .catch((error) => console.error(error));

export const appConfiguration: AppConfiguration = {
  taskServiceURL: "http://localhost:5000",

  appVersion: "latest",
  appBuildNumber: 1,
  appDeployTime: "2022-05-23T10:30:00Z",

  oktaAuthEnabled: false,
  pkce: true,
  issuer: "https://trial-5001019.okta.com/oauth2/default",
  clientId: "0oa2lu0si1h5hNH8S697",
  redirectUri: "{REDIRECT_URI}/login/callback",
};
