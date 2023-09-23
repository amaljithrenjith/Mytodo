const UpdateForm = ({changeTask, updateDate, cancelUpdate, updateTask}) => {
    return(
        <>
        <>
        <div className='row'>
        <div className='col'>
          <input value={updateDate && updateDate.title} 
           onChange={(e) => changeTask(e)}
           className='form-control form-control-lg'></input>
        </div>
        <div className='col-auto'>
          <button onClick={updateTask} className='btn btn-ig btn-success mr-20'>update</button>
          <button onClick={cancelUpdate} className='btn btn-ig btn-warning'>cancel</button>
        </div>
      </div>

        
        </></>

    )
}

export default UpdateForm;