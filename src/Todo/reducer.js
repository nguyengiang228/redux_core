import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'

//1. initState
export const initState = {
    job: '',
    listJobs: []
}
//3. reducer
const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return{
                ...state,
                job: action.payload
            }
            
        case ADD_JOB:
            return{
                ...state,
                listJobs: [...state.listJobs, action.payload],
            }
            
        case DELETE_JOB:
            const newJobs = [...state.listJobs]
            newJobs.splice(action.payload, 1)       //Xóa đi 1 phần tử theo index(payload)
            return{
                ...state,
                listJobs: newJobs
            }
            
        default:
            throw new Error('Invalid action.')
    }
}

export default reducer