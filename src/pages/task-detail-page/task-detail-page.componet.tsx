import { Button } from "antd";
import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import taskService, {
  Task,
} from "../../api/task-management.service/task-management-service";
import { useTaskDetail2 } from "../../hooks/my-task.hook";

const TaksDetailPage: React.FC = ({}) => {
  // const { tasks, error, isLoading } = useTasks();
  const { data } = useTaskDetail2();

  console.log(data);
  // const { id } = useParams();
  // const { task } = useTaskDetail(id);

  return (
    <div>
      <Link to={`/mytask/`}>
        <Button>Back</Button>
      </Link>
      <h1>Task Detail</h1>
      {/* {?.task_definition_name}
      <div> {task?.task_instance_status}</div> */}
    </div>
  );
};

export default TaksDetailPage;
