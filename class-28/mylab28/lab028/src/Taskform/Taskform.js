import React from 'react';

export default class Taskform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      task: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddTask(this.state);
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <input
        type="text"
        name="task"
        value={this.state.task}
        onChange={this.handleChange}
        placeholder="description"
        />
        <button type="submit">Create Task</button>
      </form>
    );
  }
}