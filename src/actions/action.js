//Action Creators 

export const addTask = (text) => ({
    type: 'ADD_TODO',
    payload: text
})

export const deleteTask = (taskId) => ({
    type: 'DELETE_TODO',
    payload: taskId
})