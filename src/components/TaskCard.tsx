import type { Task } from "@/types";

interface Props {
  task: Task | null;
}

function TaskCard({ task }: Props) {
  return <div>Hello</div>;
}

export default TaskCard;
