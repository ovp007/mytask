// import React, { useEffect, useState } from "react";
// import { CanceledError } from "../api/api-client";
// import taskService, {
//   Task,
// } from "../api/task-management.service/task-management-service";

// const useTaskDetail = (id?: string) => {
//   const [task, setTask] = useState<Task>();
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     taskService
//       .getById(id)
//       .then((res) => {
//         setTask(res.data);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return { task, error, isLoading };
// };

// export default useTaskDetail;
