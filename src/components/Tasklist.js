import React, {Component} from 'react'
import { connect } from 'react-redux'
import Task from './Task'


class Tasklist extends Component {
    render() {
    const array = [1,2,3,4,5,6];
    const list = array.map((task, index)=>( <Task key={index} task={task} /> ))
      return (
          <ul>
            {list}
          </ul>    
      )
    }
  }

//   {this.props.map((task,index)=>( <Task key={index} task={task} /> ) )}

function mapStateToProps(state){
    return { tasks: state.tasks }
}

export default connect( mapStateToProps)( Tasklist );

// mapStateToProps() для чтения состояния
// в качестве параметра получает все хранилище Redux.  

// connect должна возвращать объект. 
// Поля этого объекта станут свойствами компонента. 
// Их значения берутся из состояния.

