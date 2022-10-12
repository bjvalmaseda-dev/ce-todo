export interface ITask {
  content: string;
  id: number;
}

export type Action =
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "EDIT_TASK"; payload: ITask }
  | { type: "SET_TASK_TO_EDIT"; payload: number }
  | { type: "SET_CREATING"; payload: boolean };

export interface AppState {
  tasks: ITask[];
  editingTask: number;
  creating: boolean;
}
