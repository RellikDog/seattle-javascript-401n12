import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.tasks = [];
  }

  renderTasks = () => {
    return(<ul>
      {
        this.state.tasks.map(currentTask => {
          return <li key={}></li>
        });
      }
    </ul>);
  };

  render(){
    return(<div>
      <h2>Task Dashboard</h2>
      { this.renderTasks() }
    </div>);
  }
}