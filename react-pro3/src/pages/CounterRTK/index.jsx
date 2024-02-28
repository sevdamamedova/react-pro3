import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../../redux-toolkit/slices/counterSlices'

const CounterRTK = () => {
    const {actions} = counterSlice
    const counterValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
       <h1>{counterValue}</h1>
       <button onClick={() => dispatch(actions.inc())}>+</button>
       <button onClick={() => dispatch(actions.dec())}>-</button>
       <button onClick={() => dispatch(actions.reset())}>reset</button>
       <button onClick={() => dispatch(actions.special(+prompt('enter new nuber')))}>special</button>
    </>
  )
}

export default CounterRTK