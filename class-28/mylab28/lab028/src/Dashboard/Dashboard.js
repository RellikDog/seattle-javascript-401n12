import React from 'react';
import Taskform from '../Taskform/Taskform';
import TaskItem from '../TaskItem/TaskItem';


export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.tasks = [{id:502, title: 'testme', task:'testmetestme'}];
  }

  renderTasks = () => {
    return(<ul>
      {
        this.state.tasks.map(currentTask => {
          // return <li key={currentTask.id}>
          //   {currentTask.title} : {currentTask.task}
          // </li>
          return <TaskItem task={currentTask}
                           handleRemoveTask={this.handleRemoveTask}
                           handleUpdateTask={this.handleUpdateTask}
                  />
        })
      }
    </ul>);
  };
//===================================Add Task==============================================
  handleAddTask = task => {
    this.setState((previousState) => {
      return {
        tasks: [...previousState.tasks, {
          ...task,
          id: Math.random(),
          createdOn: new Date(),
        }],
      }
    });
  };
//====================================Remove Task============================================
  handleRemoveTask = task => {
    this.setState(previousState => ({
      tasks: previousState.tasks.filter(currentTask => currentTask.id !== task.id),
    }));
  };
//=====================================update task===========================================
  handleUpdateTask = task => {

  };
  //========================================================================================
  render(){
    return(<div>
      <h2>Task Dashboard</h2>
      <Taskform
      handleAddTask={this.handleAddTask}
      />
      { this.renderTasks() }
    </div>);
  }
}