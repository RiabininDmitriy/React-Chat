import React, { Component } from 'react'
import Input from '../Input'
import ButtonComponent from '../Button'
import { sendApi } from '../../utils/index'
import SelectComponent from  '../Select'

class Form extends Component {
    constructor(props) {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const formValue = { nick: this.nickValue.state.value, message: this.messageValue.state.value , roomName : this.select.state.id}
        sendApi(formValue, "POST","message")
        .then(()=>{this.nickValue.setState({value:""})
        this.messageValue.setState({value:""})})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <SelectComponent  ref = {select => this.select = select}/>
                    <Input name="nick" ref={(node) => this.nickValue = node} />
                    <Input name="message" ref={(node) => this.messageValue = node} />
                    <ButtonComponent />
                </form>
            </div>
        )
    }
}


export default Form
