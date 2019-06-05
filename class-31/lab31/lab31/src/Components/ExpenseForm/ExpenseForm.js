import React from 'react';
import {createExpense} from "../../reducer/actions/actions";
import {connect} from "react-redux";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: 'expense',
      amount: 0,
    };
  };
  handleChange =(event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createExpense(this.state);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='expense'
          //value={this.state.expense}
          onChange={this.handleChange}
          placeholder='Expense'
        />
        <input
          type='number'
          name='amount'
          //value={this.state.amount}
          onChange={this.handleChange}
          placeholder='0'
        />
        <button type='submit'> Create Expense </button>
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  // Vinicio - anything I return here WILL become props
  // Vinicio - now the state is not just the sections :(
  return {
    //sections: state.sections, // state:{sections:, cards:}
  };
};

const mapDispatchToProps = (dispatch) => {
  // Vinicio - anything I return here WILL become props
  return {
    createExpense: expenseData => dispatch(createExpense(expenseData)),
    // same as
    // mappedSectionCreate: (section) => {
    //   dispatch(createSection(section.title));
    // }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);