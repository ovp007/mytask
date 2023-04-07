import { createContext } from "react";
// import { appConfiguration } from "../utils/app-configuration"

import {
  MyTasksApi,
  Configuration as MyTaskServiceConfiguration,
} from "../api/task-service";

import { appConfiguration } from "../utils/app-configuration";

import { ApiContextValue } from "./api-context.model";
import App from "../app.component";

export const ApiContext = createContext<
  ApiContextValue | Record<string, never>
>({});

export const apiContext = async (): Promise<ApiContextValue> => {
  //   const configuration = await appConfiguration();
  const configuration = appConfiguration;

  const urls = configuration;

  const myTaskService = new MyTasksApi(
    new MyTaskServiceConfiguration({
      basePath: configuration.taskServiceURL,
    })
  );

  return {
    myTaskService,
    urls,
  };
};
