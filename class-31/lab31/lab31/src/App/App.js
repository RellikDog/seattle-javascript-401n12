import React from 'react';
import ExpenseForm from '../Components/ExpenseForm/ExpenseForm';
import { connect } from 'react-redux';
//import { createExpense } from "../reducer/actions/actions";

class App extends React.Component {
  render() {
    return(
      <div>
        <ExpenseForm />
        <ul>
          {this.props.expenses.map(current =><li>{current.expense}: {current.amount}</li>)}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // Vinicio - anything I return here WILL become props
  // Vinicio - now the state is not just the sections :(
  console.log(state.mainReducer.expenses, 'state in app');
  return {
    expenses: state.mainReducer.expenses,

    //sections: state.sections, // state:{sections:, cards:}
  };
};

// const mapDispatchToProps = (dispatch) => {
//   // Vinicio - anything I return here WILL become props
//   return {
//     createExpense: expenseData => dispatch(createExpense(expenseData)),
//     // mappedSectionCreate: (section) => {
//     //   dispatch(createSection(section.title));
//     // }
//   }
// };

export default connect(mapStateToProps)(App);

