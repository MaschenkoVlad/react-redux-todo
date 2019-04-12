import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../actions/action'


class Task extends Component {
    render() {
      return (
          <li style={liStyle}>
            <div style={divStyle}>
                {this.props.task}
            </div>
            <div>
                <button onClick={()=>{this.props.deleteTask(this.props.index) }}>Delete</button>
            </div>
          </li>
      )
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch)
}

const liStyle = {
    display: 'flex'
}
const divStyle = {
    marginRight: '25px',
    marginBottom: '15px',
}

export default connect( null, mapDispatchToProps )(Task);
