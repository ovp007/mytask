import React, { useEffect, useState } from "react";
import { CanceledError } from "../api/api-client";
import taskService, {
  Task,
} from "../api/task-management.service/task-management-service";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = taskService.getAll<Task>();
    request
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => cancel();
  }, []);

  return { tasks, error, isLoading };
};

export default useTasks;
