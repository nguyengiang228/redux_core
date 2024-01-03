import { useReducer, useRef } from 'react'
import {setJob, addJob, deleteJob } from './actions'
import reducer, { initState } from './reducer'
import logger from './logger'
//1. initState

//2. Actions

//3. reducer

//4. dispatch
function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef()

    const { job, listJobs } = state             //Sử dụng distructuring để lấy ra state cho gọn

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>Todo list</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {listJobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App