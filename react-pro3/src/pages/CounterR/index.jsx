import {connect} from 'react-redux'

const CounterR = ({count, dispatch}) => {
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => dispatch({type: 'inc'})}>+</button>
    <button onClick={() => dispatch({type: 'dec'})}>-</button>
    </>
  )
}
const mapStoreToProps = (store) => store;
// currying
export default connect(mapStoreToProps)(CounterR);