import { MdAddTask } from "react-icons/md";

export default function MainPage() {
  return (
    <div>
      <header>
        <h1>All Tasks</h1>
        <link href="/new">
          <MdAddTask />
          <div>Add Task</div>
        </link>
      </header>
      <div>Task Card</div>
    </div>
  );
}
