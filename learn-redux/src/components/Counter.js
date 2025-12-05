import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterAction } from "../store/counter";
import classes from "./Counter.module.css";

//This is an example of function based component
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterAction.increment());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };

  const decHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={increaseHandler}>Inc 5</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;


//This is an example of class based component
// class Counter extends Component {
//   incHandler() {
//     this.props.increment();
//   }

//   decHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.decHandlercounter}</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>Inc</button>
//           <button onClick={this.decHandler.bind(this)}>Dec</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
