import { combineReducers } from 'redux'

// reducers function
// редюсер - чистая функция в формате (state, action) => state.
// описывает то, как действие преобразовывает состояние в следующее состояние 
// Важно только одно, вы не должны изменять объект состояния
// напрямую, а возвращать новый объект, если состояние изменилось
// обновляют состояние (state) в соответствии с actions

const tasksReduser = ( state=[], action ) => {

        switch(action.type) {
            case 'ADD_TODO':
                if ( !action.payload ) return state;
                return state = state.concat(action.payload)

            case 'DELETE_TODO':
                console.log(action.payload);
                return state.filter( (item, id) => id !== action.payload)

            default: return state;
        }

}

// Обновим точку входа для редьюсеров:
const reducers = combineReducers({
   tasks: tasksReduser
})

// combineReducers просто возвращает "составной" редьюсер.

export default reducers;
