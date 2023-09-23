import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {

  //////// Task todo list state

 const[toDo,setToDo] = useState([
  //{"id":1,"title":"Task 1","status":false},
  //{"id":2,"title":"Task 2","status":false}

 ])
 
 ////////// tEMP STATE

 const [newTask,setNewTask] = useState('');
 const [updateDate,setUpdateData] =useState('');

//////////add task

 const addTask = () =>{
  if(newTask){
    let num = toDo.length + 1;
    let newEntry = {id:num,title:newTask, status:false}
    setToDo([...toDo,newEntry])
    setNewTask('');
  }

 }
 /////////// delete task

 const deleteTask = (id) => {
  let newTasks = toDo.filter( task => task.id !== id)
  setToDo(newTasks);
}

 //////////mark task done completd 

 const markDone = (id) => {
  let newTask = toDo.map( task => {
    if( task.id === id ) {
      return ({ ...task, status: !task.status })
    }
    return task;
  })
  setToDo(newTask);
}

 ////////// cancel update 

 const cancelUpdate = () =>{
  setUpdateData('');

 }


 //////////change task

 const changeTask = (e) => {
  let newEntry = {
    id: updateDate.id,
    title: e.target.value,
    status: updateDate.status ? true : false
  }
  setUpdateData(newEntry);
}

 //////////update task

 const updateTask = () =>{

  let filterRecords = [...toDo].filter(task => task.id !== updateDate.id);
  let updatedObject = [...filterRecords,updateDate]
  setToDo(updatedObject);
  setUpdateData('');

 }

  return (
    <div className="container App">
      <br></br>
      <h2>Todo List App</h2>
      <br></br>


      {/*update task */}
      {updateDate && updateDate ? (
        <>
        <UpdateForm

        changeTask ={changeTask}
        updateDate = {updateDate}
        cancelUpdate = {cancelUpdate} 
        updateTask={updateTask}
        
        />
        </>

      ) : (
       
        </*add task*/>

        <AddTaskForm

        newTask ={newTask}
        setNewTask ={setNewTask}
        addTask ={addTask}

        />
        
        </>


      )}
    
      

      
     

      {/*display Todo */}
      {toDo && toDo.length ? '' :'No task'}

      <ToDo 
      toDo ={toDo}
      markDone ={markDone}
      setUpdateData ={setUpdateData}
      deleteTask ={deleteTask}

      />

    </div>
  );
}

export default App;
