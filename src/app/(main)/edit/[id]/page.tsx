import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

interface Params {
  params: { id: string };
}

const EditTasks = ({ params }: Params) => {
  // const id = params.id
  return (
    <div className="flex flex-col justify center py-20-">
      <h2 className="text-center text-2xl font-bold">
        <EditTaskForm />
      </h2>
    </div>
  );
};

export default EditTasks;
