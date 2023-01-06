import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment } from '@relay/redux/counterSlice'
import type { RootState } from '@relay/redux/store'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className='card card-normal w-full'>
      <div className='flex items-center justify-center gap-3 py-5 text-center'>
        <button
          className='btn'
          type='button'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1 className='text-xl font-semibold'>{count}</h1>
        <button
          className='btn'
          type='button'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
