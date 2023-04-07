export interface Task {
  id: number;
  task_definition_name: string;
  task_instance_status: string;
  process_instance_name: string;
  process_definition_type: string;
  process_instance_effective_date: string;
}
