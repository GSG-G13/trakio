import { TaskBox, Label } from './updateTask';

const EditTaskForm = () => (
  <TaskBox>
    <Label sx={{ marginTop: '100px', fontSize: '20px', fontWeight: '600' }}> Task Title </Label>
    <Label sx={{ marginTop: '50px' }}> Assignee </Label>
    <Label> Due Date </Label>
    <Label> Project </Label>
    <Label> Section </Label>
    <Label> Priority </Label>
    <Label> Description </Label>
    {/* <TextField label="Title" />
    <TextField label="Description" />
    <TextField label="Project ID" />
    <TextField label="Priority ID" />
    <TextField label="Section ID" />
    <TextField label="User ID" />
    <Button variant="contained">Update Task</Button> */}
  </TaskBox>
);
//   const [task, setTask] = useState({});
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [projectId, setProjectId] = useState('');
//   const [priorityId, setPriorityId] = useState('');
//   const [sectionId, setSectionId] = useState('');
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     fetchTaskData(taskId)
//       .then((data) => {
//         setTask(data);
//         setTitle(data.title);
//         setDescription(data.description);
//         setProjectId(data.projectId);
//         setPriorityId(data.priorityId);
//         setSectionId(data.sectionId);
//         setUserId(data.userId);
//       })
//       .catch((error) => {
//         console.error('Error fetching task data', error);
//       });
//   }, [taskId]);

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleProjectIdChange = (event) => {
//     setProjectId(event.target.value);
//   };

//   const handlePriorityIdChange = (event) => {
//     setPriorityId(event.target.value);
//   };

//   const handleSectionIdChange = (event) => {
//     setSectionId(event.target.value);
//   };

//   const handleUserIdChange = (event) => {
//     setUserId(event.target.value);
//   };

//   const handleFormSubmit = () => {
//     const editedTask = {
//       id: taskId,
//       title: title,
//       description: description,
//       projectId: projectId,
//       priorityId: priorityId,
//       sectionId: sectionId,
//       userId: userId,
//     };

//     updateTaskData(editedTask)
//       .then((result) => {
//         console.log('Task updated successfully', result);
//       })
//       .catch((error) => {
//         console.error('Error updating task', error);
//       });
//   };

export default EditTaskForm;
