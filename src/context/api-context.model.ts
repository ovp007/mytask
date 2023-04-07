import { Context } from "react";

import { MyTasksApi } from "../api/task-service";
import { AppConfiguration } from "../utils/app-configuration.model";

export interface ApiContextValue {
  myTaskService: MyTasksApi;
  urls: AppConfiguration;
}

export interface ApiContext {
  context: Context<ApiContextValue>;
  defaultValue: ApiContextValue;
}
