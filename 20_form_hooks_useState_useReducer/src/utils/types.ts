export interface ITaskForm {
  title: string;
  description: string;
}

export interface ITask extends ITaskForm {
  id: string;
}
