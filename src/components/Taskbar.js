import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../actions/action'


class Taskbar extends Component {
    render() {
      return (
          <div>
              <input type="text" ref="task" placeholder="Add task" />
              <button type="submit" onClick={()=>{this.props.addTask(this.refs.task.value)} }>Add</button>
          </div>    
      )
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)
}

// mapDispatchToProps() для передачи события

// bindActionCreators оборачивает каждый экшн в dispatch, 
// когда вызываем this.props.actions.Func() происходит dispatch экшена 

// dispatch() отправляет в Redux объект, action.

export default connect(  mapDispatchToProps )(Taskbar);

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]);
// connect ает возможность получить текущее состояние,
// либо передавать события путем привязки нашего экшена к переменной из props (то что делает mapDispatchToProps()). 

// Если нужно получать данные из хранилища, или требуется диспетчеризовать действия

// // Единственный способ изменить внутреннее состояние - это вызвать действие
// Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
// store.dispatch({ type: 'INCREMENT' })