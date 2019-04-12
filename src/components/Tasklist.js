import React, {Component} from 'react'
import { connect } from 'react-redux'
import Task from './Task'


class Tasklist extends Component {

    render() {
      return (
          <ul style={ulStyle}>
            {this.props.tasks.map((task, index)=>( 
                <Task key={index} task={task} index={index}/> 
                )
            )}
          </ul>    
      )
    }
  }

function mapStateToProps(state){
    return { tasks: state.tasks }
}

// tasks -> tasksReduser -> array

var ulStyle = { 
    
    listStyle: 'none',

};

export default connect( mapStateToProps)( Tasklist );

// mapStateToProps() для чтения состояния
// в качестве параметра получает все хранилище Redux.  

// connect должна возвращать объект. 
// Поля этого объекта станут свойствами компонента. 
// Их значения берутся из состояния.

