import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../actions/action'


class Task extends Component {
    render() {
      return (
          <li>
            <div>
                {this.props.task}
            </div>
            <div>
                <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
            </div>
          </li>    
      )
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch)
}


export default connect(  mapDispatchToProps )(Task);
