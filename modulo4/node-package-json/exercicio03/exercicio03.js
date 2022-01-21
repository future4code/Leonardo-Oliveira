const Tasks = [];

function AddTask(task, arrTasks) {
  arrTasks.push(task);
}


AddTask("Make breakfast!", Tasks);
AddTask("Study programming", Tasks);
AddTask("Workout 8:30 at morning", Tasks);
AddTask("Read some pages of a book", Tasks);

export default Tasks;