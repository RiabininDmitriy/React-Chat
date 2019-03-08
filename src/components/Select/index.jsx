import React, { Component } from 'react'
// import Select from 'react-select'
import { sendApi } from '../../utils/index'
import Option from '../Options';


export let ROOMID = 1;

class SelectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {options:[],id:1}
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
      sendApi(null,"GET","ChatRooms")
      .then(data => this.setState({options:data}))
    }

    handleChange(event){console.log(event.target.key)
      this.setState({id: event.target.value}) 
      ROOMID = event.target.value
    }

    render() {
        return (
            <select id="slct" onChange={this.handleChange}>
            {this.state.options.map(option => { return  (<Option id = {option.id} key = {option.id} value={option.roomName}></Option>) })}
            </select>
        )
    }
}

export default SelectComponent
