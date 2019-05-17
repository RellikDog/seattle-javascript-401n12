import React from 'react';
import './UpdateTask.scss';


export default class UpdateTask extends  React.Component{
  render(){
    const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none'
    return(
      <div className={showOrHide}>
        {this.props.children}
        <button>Close</button>
      </div>
    );
  }
}