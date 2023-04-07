import { useContext } from "react";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

import {
  MyTasksApi,
  Task,
  Configuration as MyTaskServiceConfiguration,
} from "../api/task-service";

// import { QueryKeys } from "@constants/query-keys";

import { ApiContext } from "../context/api.context";
import { QueryKeys } from "../constants/query-keys";

export const useTaskDetail2 = (id?: string): UseQueryResult<Task> => {
  const { myTaskService } = useContext(ApiContext);

  //   const myTaskService = new MyTasksApi(
  //     new MyTaskServiceConfiguration({
  //       basePath: "http://localhost:5000",
  //     })
  //   );
  const query = useQuery<Task>({
    queryKey: QueryKeys.TASK_DETAIL(id),
    queryFn: async () => {
      const { data } = await myTaskService.getTasks();

      return data;
      //   return myTaskService.getTasks().then(({ data }) => data);
    },
    // enabled: Boolean(id) && id !== "new",
  });

  return query;
};
