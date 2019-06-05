import React from 'react';
import UpdateTask from '../UpdateTask/UpdateTask'
import TaskForm from '../Taskform/Taskform'

export default class TaskItem extends React.Component {
  removeTask = () => {
    this.props.handleRemoveTask(this.props.task);
  };

  render(){
    //-------------------------helper funcs------------------
    // const { handleUpdateTask } = this.props;
    // const currentTask = this.props.task;
    //
    // const showModal => handleUpdateTask();
    // const hideModal;
    // const handleUpdateView = () => {
    //
    // };

    //-------------------------------------------------------

    const currentTask = this.props.task;
    return(
      <li key={currentTask.id}>
        {currentTask.title} : {currentTask.task}
        <button onClick={this.removeTask}>Remove</button>
        <button>Update</button>
        <UpdateTask show={false}>
          <TaskForm/>
        </UpdateTask>
      </li>
    );
  }

}