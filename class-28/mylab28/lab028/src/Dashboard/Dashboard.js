import React from 'react';
import Taskform from '../Taskform/Taskform';


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
          return <li key={currentTask.id}>
            {currentTask.title} : {currentTask.task}
          </li>
        })
      }
    </ul>);
  };

  handleAddTask = task => {
    task.id = Math.random();
    task.createdOn = new Date();
    this.setState((previousState) => {
      return {
        tasks: [...previousState.tasks, task],
      }
    });
  };

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