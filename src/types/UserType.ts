import TaskType from './TaskType';

export default interface UserType {
  id: string;
  name: string;
  password: string;
  email: string;
  tasks: TaskType[];
}
